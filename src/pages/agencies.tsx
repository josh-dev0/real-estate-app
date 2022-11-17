import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useMemo, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Col, Empty, Row, Spin } from "antd";
import { SegmentedValue } from "antd/lib/segmented";
import { LoadingOutlined } from '@ant-design/icons';
import { PageBody } from '@app/containers';
import { Breadcrumb, Footer, TopMenu } from "@app/components";
import {
  AgencyCard,
  AgencyFilterbar,
  AgencyStatusbar,
} from '@app/modules/Agency';
import { AgencyFilterValue } from '@app/modules/Agency';
import { generateRandomAgencies } from '@app/utils/demo';

const AgenciesDirectory: NextPage = () => {
  // --> Filter bar
  const [found, setFound] = useState<any>({
    total: 435,
    seniority: 226,
    rate: 205,
    serviceType: 226,
    region: 176,
    location: 176,
  });
  const [filter, setFilter] = useState<AgencyFilterValue>();
  const [serviceTypeOptions, setServiceTypeOptions] = useState<any[]>([
    { key: 'key1', label: 'Service Type I' },
    { key: 'key2', label: 'Service Type II' },
    { key: 'key3', label: 'Service Type III' },
    { key: 'key4', label: 'Service Type IV' },
    { key: 'key5', label: 'Service Type V' },
    { key: 'key6', label: 'Service Type VI' },
    { key: 'key7', label: 'Service Type VII' },
    { key: 'key8', label: 'Service Type VIII' },
    { key: 'key9', label: 'Service Type IX' },
    { key: 'key10', label: 'Service Type X' },
  ]);
  const [regionOptions, setRegionOptions] = useState<any[]>([
    { key: 'key1', label: 'Region I' },
    { key: 'key2', label: 'Region II' },
    { key: 'key3', label: 'Region III' },
    { key: 'key4', label: 'Region IV' },
    { key: 'key5', label: 'Region V' },
    { key: 'key6', label: 'Region VI' },
    { key: 'key7', label: 'Region VII' },
    { key: 'key8', label: 'Region VIII' },
    { key: 'key9', label: 'Region IX' },
    { key: 'key10', label: 'Region X' },
  ]);
  const [locationOptions, setLocationOptions] = useState<any[]>([
    { key: 'key1', label: 'Location I' },
    { key: 'key2', label: 'Location II' },
    { key: 'key3', label: 'Location III' },
    { key: 'key4', label: 'Location IV' },
    { key: 'key5', label: 'Location V' },
    { key: 'key6', label: 'Location VI' },
    { key: 'key7', label: 'Location VII' },
    { key: 'key8', label: 'Location VIII' },
    { key: 'key9', label: 'Location IX' },
    { key: 'key10', label: 'Location X' },
  ]);
  // <-- Filter bar

  // --> Status Bar
  const [statusbarViewMode, setStatusbarViewMode] = useState<SegmentedValue>('list');
  const [keyword, setKeyword] = useState('');
  const [sortBy, setSortBy] = useState('relevance');
  const [sortByOptions, setSortByOptions] = useState([
    { value: 'relevance', label: 'Relevance' },
    { value: 'featured', label: 'Featured' },
    { value: 'newlyAdded', label: 'Newly Added' },
    { value: 'date', label: 'Date' },
    { value: 'lowestPrice', label: 'Lowest Price' },
    { value: 'highestPrice', label: 'Highest Price' },
  ]);
  const handleOnSearch = (val: string) => setKeyword(val)
  // <-- Status Bar
  const [agencies, setAgencies] = useState<any[]>([]);
  // this is for dev only to check the empty results.
  const filteredAgencies = useMemo(() => keyword ? [] : agencies, [keyword, agencies]);
  const [hasMore, setHasMore] = useState(true);

  // collective filter of this page.
  const collectiveFilter = useMemo(() => ({
    ...filter,
    keyword,
  }), [filter, keyword]);

  const handleLoadMore = () => {
    generateRandomAgencies()
      .then(res => setAgencies([...agencies, ...res]))
      .finally(() => {
        if (agencies.length > 27) setHasMore(false);
      });
  }
  const LoadMore = () =>
    <div className="flex items-center justify-center gap-[3rem] mt-16">
      <Spin
        indicator={<LoadingOutlined
          style={{ fontSize: 60 }}
          spin
        />}
      />
      <span className="text-primary text-lg leading-[21px]">Loading more...</span>
    </div>

  useEffect(() => {
    generateRandomAgencies().then(setAgencies);
  }, []);

  useEffect(() => {
    console.log('collective.filter', collectiveFilter)
    if (collectiveFilter.keyword) {
      setHasMore(false);
    } else { setHasMore(true) }
    // TODO: process loading agencies based on new filter settings.
  }, [collectiveFilter])

  return (
    <>
      <Head>
        <title>Agencies | Cozzinest</title>
        <meta name="description" content="Home page of Cozzinest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopMenu />
        <PageBody>
          <Breadcrumb
            className="ml-10"
            items={[
              { name: 'Home', link: '/' },
              { name: 'Agencies Directory' }
            ]}
          />
          <div className="flex items-start gap-[1.75rem] mt-6">
            <AgencyFilterbar
              className="shrink-0"
              data={found}
              values={filter}
              onChange={setFilter}
              serviceTypeOptions={serviceTypeOptions}
              regionOptions={regionOptions}
              locationOptions={locationOptions}
              onReset={() => setFilter({})}
            />
            <section className="grow">
              <InfiniteScroll
                className="grow px-6 -mx-6 pb-16"
                next={handleLoadMore}
                hasMore={hasMore}
                loader={<LoadMore />}
                dataLength={agencies.length}
              >
                <AgencyStatusbar
                  onSearch={handleOnSearch}
                  viewMode={statusbarViewMode}
                  onViewModeChange={setStatusbarViewMode}
                  sortBy={sortBy}
                  onSortByChange={setSortBy}
                  sortByOptions={sortByOptions}
                />
                {
                  !filteredAgencies.length &&
                  <Row className="mt-[12rem]" gutter={0}>
                    <Col span={24}>
                      <div className="w-full flex flex-col items-center justify-center">
                        <Empty
                          description={<div className="text-center mt-10 text-icon-1 text-sm leading-[22px]">
                            No result found<br /> for '{keyword}'.<br />Please try again.
                          </div>}
                        />
                      </div>
                    </Col>
                  </Row>
                }

                {
                  filteredAgencies.length > 0 &&
                  <Row
                    className="mt-5"
                    gutter={[27, 27]}
                  >
                    {
                      filteredAgencies.map((agency, i) =>
                        <Col key={i} span={8}>
                          <AgencyCard
                            {...agency}
                          />
                        </Col>
                      )
                    }
                  </Row>
                }
              </InfiniteScroll>
            </section>
          </div>
        </PageBody>
      </main>
      <Footer className="mt-[6.625rem]" />
    </>
  );
}

export default AgenciesDirectory;