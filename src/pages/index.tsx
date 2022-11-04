import type { NextPage } from 'next'
import Head from 'next/head'
import Router, { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import classNames from 'classnames';
import { Button, Col, Row } from 'antd';
import { ROUTES, SESSION_STATUS, QUERY } from '@app/constants';
import {
  CozziCarousel,
  DealType,
  Footer,
  ProfessionalCard,
  PropertyCard,
  RewardCard,
  Searchbar,
  ServiceCard,
  SimpleCard,
  TopMenu,
} from '@app/components';
import type {
  ProfessionalCardProps,
  PropertyCardProps,
  RewardCardProps,
  ServiceCardProps,
  SimpleCardProps,
} from '@app/components';
import { HCenter } from '@app/containers/HCenter';
import { notification } from 'antd';
import {
  generateProperties,
  getCountries,
  getDreamProperties,
  getFeaturedProfessionals,
  getFeaturedServices,
  getLifeStyles,
  getPropertyTypes,
  getRegions,
  getRewardCardData,
  getServices,
} from '@app/utils/demo';
import styles from '@app/styles/pages/Home.module.scss';
import { IdentityType } from '@app/types';
import { CloseCircleOutlined } from '@ant-design/icons';

const Home: NextPage = () => {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  // --> Search bar props
  const [dealType, setDealType] = useState('');
  const [propertiesAroundMe, setPropertiesAroundMe] = useState<PropertyCardProps[]>([]);
  const [matchedProperties, setMatchedProperties] = useState<PropertyCardProps[]>([]);
  const [recentlyViewedProperties, setRecentlyViewedProperties] = useState<PropertyCardProps[]>([]);
  const [rewardCardData, setRewardCardData] = useState<RewardCardProps[]>([]);
  const [professionalCards, setProfessionalCards] = useState<ProfessionalCardProps[]>([]);
  const [services, setServices] = useState<ServiceCardProps[]>([]);
  const [propertyTypes, setPropertyTypes] = useState<SimpleCardProps[]>([]);
  const [dreamProperties, setDreamProperties] = useState<SimpleCardProps[]>([]);
  const [regions, setRegions] = useState<SimpleCardProps[]>([]);
  const [featuredServices, setFeaturedServices] = useState<RewardCardProps[]>([]);
  const [lifeStyles, setLifeStyles] = useState<SimpleCardProps[]>([]);
  const [countries, setCountries] = useState<SimpleCardProps[]>([]);
  // <-- Search bar props.

  const openNotification = () => {
    const key = 'open-just-after-login';
    const btn = (
      <Button type="primary" size="small" onClick={() => close()}>
        OK
      </Button>
    );
    const close = () => {
      console.log('notification.close');
      notification.close(key)
      Router.push('/')
    }
    notification.open({
      message: `Welcome ${session?.user.name}`,
      description:
        'You can start browsing and creating a project with Freemium access.You can consult our plans here when your ready',
      btn,
      key,
      onClose: close,
      icon: <CloseCircleOutlined style={{ color: '#108ee9' }} />
    });
  };

  const handleOnIdentify = (identity: IdentityType) => {
    Router.push(`/${ROUTES.login}?role=${identity}`);
  }

  useEffect(() => {
    setPropertiesAroundMe(generateProperties(10));
    setMatchedProperties(generateProperties(10));
    setRecentlyViewedProperties(generateProperties(10));
    setRewardCardData(getRewardCardData());
    setProfessionalCards(getFeaturedProfessionals());
    setServices(getServices());
    setPropertyTypes(getPropertyTypes());
    setDreamProperties(getDreamProperties());
    setRegions(getRegions());
    setFeaturedServices(getFeaturedServices());
    setLifeStyles(getLifeStyles());
    setCountries(getCountries());
  }, [])

  useEffect(() => {
    if (sessionStatus !== SESSION_STATUS.LOADING && router.query[QUERY.justLoggedIn]) {
      openNotification();
    }
  }, [sessionStatus, router.query]);

  return (
    <>
      <Head>
        <title>Home | Cozzinest</title>
        <meta name="description" content="Home page of Cozzinest" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <TopMenu
          locale="EN/EN"
          onIdentify={handleOnIdentify}
        />
        <section className={classNames("min-h-[11.25rem]", styles.topImgContainer)}>
          <HCenter>
            <DealType className="mt-[7.125rem] mb-3"
              value={dealType}
              onChange={e => setDealType(e.target.value)}
            />
          </HCenter>
          <HCenter><Searchbar /></HCenter>
        </section>

        <section className="max-w-[66.125rem] mx-auto">
          <CozziCarousel
            className="mt-[5.5rem]"
            label="Properties around me"
            items={propertiesAroundMe.map(props => <PropertyCard {...props} />)}
          />
          <CozziCarousel
            className="mt-[7.5rem]"
            label="Matched Properties"
            items={matchedProperties.map(props => <PropertyCard {...props} />)}
          />
          <CozziCarousel
            className="mt-[7.5rem]"
            label="Properties recently viewed"
            items={recentlyViewedProperties.map(props => <PropertyCard {...props} />)}
          />
          <CozziCarousel
            className="mt-[10rem]"
            label="Featured Professionals"
            items={professionalCards.map(props => <ProfessionalCard {...props} />)}
          />
          <section className="mt-[9.375rem]">
            <p className="font-medium text-xl leading-2xl text-secondary-1">Featured Services</p>
            <div className="flex justify-between mt-[4.25rem] gap-[2rem]">
              {
                featuredServices.map((data, i) =>
                  <RewardCard
                    key={i}
                    className="w-1/4"
                    {...data}
                  />
                )
              }
            </div>
          </section>
          <CozziCarousel
            className="mt-[7.688rem]"
            label="Associate Services"
            items={services.map(props => <ServiceCard {...props} />)}
          />
          <div className="mt-[9.75rem]">
            <p className="font-medium text-xl leading-2xl text-secondary-1">Offers</p>
            <p className="text-sm leading-[22px] text-primary">Deals, promotions, special offers, gifts</p>
            <img
              className="mt-[1.313rem]"
              src="images/demo/home-offers.png"
              alt="Offers"
            />
          </div>
          <div className="mt-[9.313rem]">
            <p className="font-medium text-xl leading-2xl text-secondary-1 mb-[2.625rem]">Browse by Property Type</p>
            <Row gutter={[41, 72]}>
              {propertyTypes.map((propertyType, i) =>
                <Col
                  key={i}
                  span={6}
                >
                  <SimpleCard {...propertyType} />
                </Col>
              )}
            </Row>
          </div>
          <div className="mt-[8.5rem]">
            <p className="font-medimum text-xl leading-2xl text-secondary-1">Find your dream property</p>
            <Row
              className="mt-[2.625rem]"
              gutter={[41, 72]}
            >
              {
                dreamProperties.map((dreamProperty, i) =>
                  <Col
                    key={i}
                    span={6}
                  >
                    <SimpleCard {...dreamProperty} />
                  </Col>
                )
              }
            </Row>
          </div>
          <CozziCarousel
            className="mt-[8.25rem]"
            label="Browse by Region"
            items={regions.map(props => <SimpleCard {...props} />)}
          />
          <div className="mt-[6.5rem]">
            <p className="font-medium text-xl leading-2xl text-secondary-1">Rewards</p>
            <div className="flex justify-between mt-[4.25rem] gap-[2rem]">
              {
                rewardCardData.map((data, i) =>
                  <RewardCard
                    key={i}
                    className="w-1/4"
                    {...data}
                  />
                )
              }
            </div>
          </div>
          <div className="mt-[5.938rem]">
            <p className="font-medimum text-xl leading-2xl text-secondary-1">Browse by lifestyle</p>
            <Row
              className="mt-6"
              gutter={[41, 72]}
            >
              {
                lifeStyles.map((dreamProperty, i) =>
                  <Col
                    key={i}
                    span={6}
                  >
                    <SimpleCard {...dreamProperty} />
                  </Col>
                )
              }
            </Row>
          </div>
          <CozziCarousel
            className="mt-[5.875rem]"
            label="Browse by Country"
            items={countries.map(props => <SimpleCard {...props} />)}
          />
        </section>
      </main>
      <Footer className="mt-[6.625rem]" />
    </>
  )
}

export default Home
