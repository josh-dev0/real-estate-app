import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Card, Col, Rate, Row, Typography } from 'antd';
import type { CardProps } from 'antd';
import { ProfileAvatar } from '@app/components';
import {
  ThumbupIcon,
  HeartIcon,
  ShareIcon,
  EyeHiddenIcon,
  ChatIcon,
  CalendarIcon,
} from '@app/components/SVGs';
import styles from './styles.module.scss';


export type PropertyDetailsCardProps = {

} & CardProps;

export const PropertyDetailsCard: React.FC<PropertyDetailsCardProps> = ({
  className,
}) => {


  return (
    <Card className={className}
      bodyStyle={{
        padding: 0,
      }}>
      <div className={styles.container}>
        <section className={styles.imageWrapper}>
          <img
            className={styles.primaryImage}
            src="/images/demo/properties/property-1.png" alt="property 1" />
          <div className={styles.chlidrenWrapper}>
            {
              new Array(4).fill(null).map((_, i) =>
                <img
                  key={i}
                  className={styles.childImage}
                  src={`/images/demo/properties/property-1-${i + 1}.png`} alt="Details" />
              )
            }
          </div>
        </section>
        <section>
          <div className="flex justify-between pb-2">
            <div>
              <p className={styles.price}>1 475 625 &euro;</p>
              <p className={classNames(styles.title, 'mt-7')}>Penthouse 5 chambres à vendre à Filsdorf </p>
              <div className="flex mt-4 pl-3 gap-[1.25rem]">
                <ChracterItem
                  image="/images/property-details/map.png"
                  value="Map"
                  alt="Map"
                />
                <ChracterItem
                  image="/images/property-details/surface.png"
                  value="650 m2"
                />
                <ChracterItem
                  image="/images/property-details/bed.png"
                  value="5"
                />
                <ChracterItem
                  image="/images/property-details/room.png"
                  value="2"
                />
                <ChracterItem
                  image="/images/property-details/bathroom.png"
                  value="2"
                />
              </div>
            </div>
            <div className="flex flex-col items-center">
              <Rate className="block" value={4} allowHalf={true} disabled={true} />
              <ProfileAvatar
                containerClassName="mt-3"
                size={40}
                name="Lotiself Inc"
              />
              <p className="text-xs leading-xs text-primary font-medium mt-2">Lotiself Inc</p>
              <p className="text-[0.688rem] leading-xs text-bg-secondary mt-2">Neudorf</p>
            </div>
          </div>
          <Typography.Paragraph className="text-xs leading-sm text-primary" ellipsis={{ rows: 2, expandable: true, symbol: <span className="text-bg-secondary text-sm font-medium">Read more</span>, }} >
            A tout juste cinq minutes du quartier des affaires de Kirchberg, votre agence immobilière
            Unicorn a le plaisir de vous présenter à la vente ce nouveau programme immobilier u quartier des affaires de Kirchberg, votre agence immobilière
            Unicorn a le plaisir de vous présenter à la vente ce nouveau programme immobilier..
          </Typography.Paragraph>
          <Row className="mt-3">
            <Col span={12}>
              <NearbyItem
                image='/images/property-details/affair-center.png'
                text="1 min away from Kirchberg Affair Center"
              />
              <NearbyItem
                image='/images/property-details/train.png'
                text="5 min away from Luxemburg City Train station"
              />
            </Col>
            <Col span={12}>
              <NearbyItem
                image='/images/property-details/college.png'
                text="2 min away from Luxemburg City College"
              />
              <NearbyItem
                image='/images/property-details/mall.png'
                text="2 min away from Luxemburg City Mall"
              />
            </Col>
          </Row>
          <div className="flex items-center justify-end mt-5 gap-[1.5rem]">
            <ThumbupIcon className={styles.actionIcon} width="12.5" height="12.88" />
            <HeartIcon className={styles.actionIcon} width="13.5" height="12.1" />
            <ShareIcon className={styles.actionIcon} width="10.5" height="11.6" />
            <EyeHiddenIcon className={styles.actionIcon} width="16.5" height="14.3" />
            <ChatIcon className={styles.actionIcon} width="14" height="14" />
            <CalendarIcon className={styles.actionIcon} width="14" height="11" />
          </div>
        </section>
      </div>
    </Card>
  )
}

type CharacterItemProps = {
  image: string;
  alt?: string;
  value: ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

const ChracterItem: React.FC<CharacterItemProps> = ({
  className,
  image,
  alt,
  value,
  ...otherProps
}) => <div>
    <div className={classNames(styles.iconContainer, className)} {...otherProps}>
      <img src={image} alt={alt} />

    </div>
    <p className={styles.characterLabel}>{value}</p>
  </div>

type NearbyItemProps = {
  image: string;
  text: string;
  alt?: string;
} & React.HTMLAttributes<HTMLDivElement>;

const NearbyItem: React.FC<NearbyItemProps> = ({
  className,
  image,
  alt,
  text,
  ...otherProps
}) => <div className={classNames("flex items-center gap-[10px]", className)} {...otherProps}>
    <img className={styles.nearbyImage} src={image} alt={alt} />
    <p className={styles.nearbyText}>{text}</p>
  </div>