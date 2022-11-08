import { NextPage } from "next";
import Head from "next/head";
import { useState } from 'react';
import { Col, Row } from "antd";
import { PageBody } from '@app/containers';
import { Breadcrumb, Footer, TopMenu } from "@app/components";
import {
  AgencyCard,
  AgencyFilterbar,
  AgencyStatusbar,
} from '@app/modules/Agency';
import { SegmentedValue } from "antd/lib/segmented";

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
  const [isSeniority, setIsSeniority] = useState(true);
  const [rate, setRate] = useState<number>(3.3);
  const [serviceType, setServiceType] = useState<string[]>([]);
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
  const [region, setRegion] = useState<string[]>([]);
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
  const [location, setLocation] = useState<string[]>([]);
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
  // <-- Status Bar
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
              isSeniority={isSeniority}
              onIsSeniorityChange={setIsSeniority}
              rate={rate}
              onRateChange={setRate}
              serviceType={serviceType}
              serviceTypeOptions={serviceTypeOptions}
              onServiceTypeChange={setServiceType}
              region={region}
              regionOptions={regionOptions}
              onRegionChange={setRegion}
              location={location}
              locationOptions={locationOptions}
              onLocationChange={setLocation}
            />
            <section className="grow">
              <AgencyStatusbar
                viewMode={statusbarViewMode}
                onViewModeChange={setStatusbarViewMode}
                keyword={keyword}
                onKeywordChange={setKeyword}
                sortBy={sortBy}
                onSortByChange={setSortBy}
                sortByOptions={sortByOptions}
              />

              <Row
                className="mt-5"
                gutter={[27, 27]}
              >
                {
                  new Array(18).fill(null).map((_, i) =>
                    <Col key={i} span={8}>
                      <AgencyCard
                        avatar="/images/user.png"
                        company="Deco-home Inc"
                        name="Neudorf"
                        rate={4.6}
                        summary="A tout juste cinq minutes du quartier des nutes du quartier des..."
                      />
                    </Col>
                  )
                }
              </Row>

            </section>
          </div>
        </PageBody>
      </main>
      <Footer className="mt-[6.625rem]" />

    </>
  );
}

export default AgenciesDirectory;