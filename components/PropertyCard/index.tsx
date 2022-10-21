import React from 'react';
import { Card, Rate } from 'antd';
import { CardProps } from 'antd';
import { formatNumber } from '../../common/utils';

type PropertyCardProps = {
  title: string;
  image?: string;
  price: number;
  bedrooms?: number;
  surface?: number;
} & CardProps;

export const PropertyCard: React.FC<PropertyCardProps> = ({
  title,
  image,
  price,
  bedrooms,
  surface,
  ...cardProps
}) => {
  const _formatForNull = (val: number | undefined) => val ? formatNumber(val) : '-';

  return (
    <Card
      bodyStyle={{
        padding: 0,
      }}
      bordered={true}
      {...cardProps}
    >
      <div className="w-full h-[167px] overflow-hidden">
        <img
          className="w-full"
          src={image}
        />
      </div>
      <div className="pl-[18px] pr-[6px] pt-[5px] pb-[9px]">
        <p className="text-sm leading-[24px] font-bold text-bgSecondaryLight">{title}</p>
        <div className="flex justify-between">
          <div>
            <p className="text-secondary1 text-xs leading-[24px] font-bold">${_formatForNull(price)}</p>
            <p className="text-secondary1 text-[10px] leading-[24px]">{_formatForNull(bedrooms)} bedrooms</p>
            <p className="text-secondary1 text-[10px] leading-[24px]">{_formatForNull(surface)}m<sup>2</sup></p>
          </div>
          <Rate
            value={4.5}
            allowHalf={true}
            disabled={true}
          />
        </div>
        <div className="flex justify-end pr-[10px]">
          <a
            className="text-secondary2 font-bold text-[12px] leading-[24px]"
            href="#">read more ...</a>
        </div>
      </div>
    </Card>
  );
}
