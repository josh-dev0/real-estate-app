import Router from "next/router";
import { random } from "./index";
import type {
  ProfessionalCardProps,
  RewardCardProps,
  ServiceCardProps,
  SimpleCardProps,
} from "@app/components";
import {
  FormOutlined,
  EuroCircleOutlined,
  ClusterOutlined,
  CrownOutlined,
} from '@ant-design/icons';
import { ICountry, IdentityType } from '@app/types';
import { notification } from './notification';

export const generateProperties = (n: number = 16) =>
  new Array(n).fill(null).map((_, i) => ({
    title: "Penthouse in Howald" + (i + 1),
    image: "/images/card-image.png",
    price: random(765000, 865000),
    bedrooms: random(2, 10),
    surface: random(300, 450),
    review: random(2, 5),
    loading: false,
  }));

export const getRewardCardData = (): RewardCardProps[] => {
  return [
    {
      title: 'Newsletter',
      summary: 'Subscribe and get notified on  great deals and events',
      link: '#',
      isFlex: true,
      icon: <FormOutlined />,
    },
    {
      title: 'Bonus Program',
      summary: 'Get discounts, promo codes ...',
      link: '#',
      isFlex: true,
      icon: <EuroCircleOutlined />,
    },
    {
      title: 'Referral Program',
      summary: 'Earn while networking ...',
      link: '#',
      isFlex: true,
      icon: <ClusterOutlined />,
    },
    {
      title: 'Loyalty Progam',
      summary: 'Climb the ladder by earning points ...',
      link: '#',
      isFlex: true,
      icon: <CrownOutlined />,
    },
  ];
}

export const getFeaturedProfessionals = (): ProfessionalCardProps[] => {
  return [
    {
      company: 'Lotiself Inc',
      name: 'Neudorf',
      rate: 4,
      summary: 'A tout juste cinq minutes du quartier des ...',
      link: '#',
    },
    {
      company: 'Immo Inc',
      name: 'Neudorf',
      rate: 4.5,
      summary: 'A tout juste cinq minutes du quartier des ...',
      link: '#',
    },
    {
      company: 'Lotiself Inc',
      name: 'Neudorf',
      rate: 4,
      summary: 'A tout juste cinq minutes du quartier des ...',
      link: '#',
    },
    {
      company: 'Immosphere Inc',
      name: 'Neudorf',
      rate: 3.7,
      summary: 'A tout juste cinq minutes du quartier des ...',
      link: '#',
    },
    {
      company: 'Immo Inc',
      name: 'Neudorf',
      rate: 4.5,
      summary: 'A tout juste cinq minutes du quartier des ...',
      link: '#',
    },
    {
      company: 'Lotiself Inc',
      name: 'Neudorf',
      rate: 4,
      summary: 'A tout juste cinq minutes du quartier des ...',
      link: '#',
    },
    {
      company: 'Immosphere Inc',
      name: 'Neudorf',
      rate: 3.7,
      summary: 'A tout juste cinq minutes du quartier des ...',
      link: '#',
    },
  ];
}

export const getServices = (): ServiceCardProps[] => [
  {
    image: "images/demo/service-financing.png",
    title: 'Financing',
    summary: 'Finance your project...this is a temporry text',
    link: '',
  },
  {
    image: "images/demo/service-insurance.png",
    title: 'Insurance',
    summary: 'Insuring your house .. another temporary text',
    link: '',
  },
  {
    image: "images/demo/service-energy.png",
    title: 'Energy',
    summary: 'Insuring your house .. another temporary text',
    link: '',
  },
  {
    image: "images/demo/service-removal.png",
    title: 'Removal',
    summary: 'Insuring your house .. another temporary text',
    link: '',
  },
  {
    image: "images/demo/service-insurance.png",
    title: 'Insurance',
    summary: 'Insuring your house .. another temporary text',
    link: '',
  },
  {
    image: "images/demo/service-energy.png",
    title: 'Energy',
    summary: 'Insuring your house .. another temporary text',
    link: '',
  },
  {
    image: "images/demo/service-removal.png",
    title: 'Removal',
    summary: 'Insuring your house .. another temporary text',
    link: '',
  },
]

export const getPropertyTypes = (): SimpleCardProps[] => {
  return [
    {
      title: 'Flats',
      image: '/images/demo/property-types/flats.png',
    },
    {
      title: 'Semi-Detached',
      image: '/images/demo/property-types/semi-detached.png',
    },
    {
      title: 'Detached',
      image: '/images/demo/property-types/detached.png',
    },
    {
      title: 'Terraced',
      image: '/images/demo/property-types/terraced.png',
    },
    {
      title: 'Building',
      image: '/images/demo/property-types/building.png',
    },
    {
      title: 'Studios',
      image: '/images/demo/property-types/studios.png',
    },
    {
      title: 'Offices',
      image: '/images/demo/property-types/offices.png',
    },
    {
      title: 'Farm Land',
      image: '/images/demo/property-types/farm-land.png',
    },
    {
      title: 'Land',
      image: '/images/demo/property-types/land.png',
    },
    {
      title: 'Parking & Garages',
      image: '/images/demo/property-types/parking-garages.png',
    },
    {
      title: 'Warehouse',
      image: '/images/demo/property-types/warehouse.png',
    },
    {
      title: 'Commercial Premisses',
      image: '/images/demo/property-types/commercial-premisses.png',
    },
    {
      title: 'Bungalow',
      image: '/images/demo/property-types/bungalow.png',
    },
    {
      title: 'Loft',
      image: '/images/demo/property-types/loft.png',
    },
    {
      title: 'Penthouse',
      image: '/images/demo/property-types/penthouse.png',
    },
    {
      title: 'Chalet',
      image: '/images/demo/property-types/chalet.png',
    },
  ];
}

export const getDreamProperties = (): SimpleCardProps[] => {
  return [
    {
      title: 'Greek Revival',
      image: '/images/demo/dream-properties/greek-revival.png',
    },
    {
      title: 'Victorian Houses',
      image: '/images/demo/dream-properties/victorian-houses.png',
    },
    {
      title: 'Gothic Revival',
      image: '/images/demo/dream-properties/gothic-revival.png',
    },
    {
      title: 'Mansion',
      image: '/images/demo/dream-properties/mansion.png',
    },
    {
      title: 'French Country',
      image: '/images/demo/dream-properties/french-country.png',
    },
  ];
}

export const getRegions = (): SimpleCardProps[] => {
  return [
    {
      title: 'Esch-Sur-Alzette',
      image: '/images/demo/regions/esch-sur-alzette.png',
    },
    {
      title: 'Capellen',
      image: '/images/demo/regions/capellen.png',
    },
    {
      title: 'Grevenmacher',
      image: '/images/demo/regions/grevenmacher.png',
    },
    {
      title: 'Echternach',
      image: '/images/demo/regions/echternach.png',
    },
    {
      title: 'Capellen',
      image: '/images/demo/regions/capellen.png',
    },
    {
      title: 'Grevenmacher',
      image: '/images/demo/regions/grevenmacher.png',
    },
  ];
}

export const getFeaturedServices = (): RewardCardProps[] => {
  return [
    {
      title: 'Estimation',
      summary: 'Subscribe and get notified on  great deals and events',
      link: '#',
      isFlex: true,
      icon: <FormOutlined />,
    },
    {
      title: 'Commuting Tool',
      summary: 'Get discounts, promo codes ...',
      link: '#',
      isFlex: true,
      icon: <EuroCircleOutlined />,
    },
    {
      title: 'Mached Agnecies',
      summary: 'Earn while networking ...',
      link: '#',
      isFlex: true,
      icon: <ClusterOutlined />,
    },
    {
      title: 'Publishing your ad',
      summary: 'Climb the ladder by earning points ...',
      link: '#',
      isFlex: true,
      icon: <CrownOutlined />,
    },
  ];
}

export const getLifeStyles = (): SimpleCardProps[] => [
  {
    title: 'Urban Area',
    image: '/images/demo/lifestyles/urban-area.png',
  },
  {
    title: 'Country Side',
    image: '/images/demo/lifestyles/country-side.png',
  },
  {
    title: 'Sea',
    image: '/images/demo/lifestyles/sea.png',
  },
  {
    title: 'Mountain',
    image: '/images/demo/lifestyles/mountain.png',
  },
]

export const getCountries = (): SimpleCardProps[] => [
  {
    title: 'France',
    image: '/images/demo/countries/france.png',
  },
  {
    title: 'Luxemburg',
    image: '/images/demo/countries/luxemburg.png',
  },
  {
    title: 'Belgium',
    image: '/images/demo/countries/belgium.png',
  },
  {
    title: 'Germany',
    image: '/images/demo/countries/germany.png',
  },
  {
    title: 'Luxemburg',
    image: '/images/demo/countries/luxemburg.png',
  },
  {
    title: 'Belgium',
    image: '/images/demo/countries/belgium.png',
  },
]

export const getCountryList = (): ICountry[] => [
  {
    name: 'United Kingdom',
    code: '+44',
    flag: '/images/flags/sh.png',
  },
  {
    name: 'France',
    code: '+33',
    flag: '/images/flags/fr.png',
  },
  {
    name: 'Germany',
    code: '+49',
    flag: '/images/flags/de.png',
  },
  {
    name: 'Spain',
    code: '+34',
    flag: '/images/flags/es.png',
  },
  {
    name: 'Portugal',
    code: '+351',
    flag: '/images/flags/pt.png',
  },
]

export const fakeLogin = (val: any, identityType: IdentityType) => {
  console.log('submitting authentication...', val);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const result = Math.random() > 0.5;
      if (!result)
        notification.error({
          description: <span>Either username or password is incorrect.<br /> Please try again!!</span>,
        });
      else Router.push(`/${identityType}/auth/information1`);
    }, 500);
  });
}