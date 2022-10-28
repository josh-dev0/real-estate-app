import { random } from "./index";
import {
  ProfessionalCardProps,
  RewardCardProps,
} from "@app/components";
import {
  FormOutlined,
  EuroCircleOutlined,
  ClusterOutlined,
  CrownOutlined,
} from '@ant-design/icons';

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
