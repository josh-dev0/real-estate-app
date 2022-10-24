import React from 'react';
import { Card, Rate, Skeleton } from 'antd';
import { CardProps } from 'antd';
import { formatNumber } from '../common/utils';

type PropertyCardProps = {
  title: string;
  image?: string;
  price: number;
  bedrooms?: number;
  surface?: number;
  review?: number;
  loading?: boolean;
} & Omit<CardProps, "title" | "loading">;

export const PropertyCard: React.FC<PropertyCardProps> = ({
  loading,
  title,
  image,
  price,
  bedrooms,
  surface,
  review,
  ...cardProps
}) => {
  const _formatForNull = (val: number | undefined) => val ? formatNumber(val) : '-';

  return (
    <Card
      bodyStyle={{
        padding: 0,
        boxShadow: "0px 1px 12px rgba(0, 0, 0, 0.15)",
      }}
      bordered={true}
      {...cardProps}
    >
      <div className="w-full h-[167px] overflow-hidden">
        {(loading || !image) && <Skeleton.Image className="w-full h-full" active={loading} />}
        <img className="w-full" src={image} />
      </div>
      <div className="pl-[18px] pr-[18px] pt-[9px] pb-[9px]">
        <Skeleton className="w-3/5 mt-1 mb-[5px]" paragraph={false} loading={loading} active>
          <p className="text-sm leading-[16px] font-bold text-bgSecondaryLight mb-[5px]">{title || '-'}</p>
        </Skeleton>
        <div className="w-full flex justify-between">
          <div>
            <Skeleton className="w-full min-w-[100px]" paragraph={false} loading={loading} active>
              <p className="text-secondary1 text-[12px] leading-[14px] font-bold">${_formatForNull(price)}</p>
            </Skeleton>
            <Skeleton className="w-full mt-[6px]" paragraph={false} loading={loading} active>
              <p className="text-secondary1 text-[10px] leading-[12px] mt-[6px]">{_formatForNull(bedrooms)} bedrooms</p>
            </Skeleton>
            <Skeleton className="w-full mt-[3px]" paragraph={false} loading={loading} active>
              <p className="text-secondary1 text-[10px] leading-[12px] mt-[3px]">{_formatForNull(surface)}m<sup>2</sup></p>
            </Skeleton>
          </div>

          <div className="flex gap-[3px] pr-[6px] pt-2">
            {loading && new Array(5).fill(null).map((_, i) =>
              <Skeleton.Avatar
                key={i}
                size={20}
                active
              />
            )}
          </div>
          {!loading && <Rate
            value={review}
            allowHalf={true}
            disabled={true}
          />}
        </div>
        <div className="flex justify-end mt-[3px]">
          <Skeleton className="w-2/5" paragraph={false} loading={loading}>
            <a
              className="text-secondary2 font-bold text-[12px] leading-[24px]"
              href="#">
              read more ...
            </a>
          </Skeleton>
        </div>
      </div>
    </Card>
  );
}
