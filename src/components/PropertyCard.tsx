import React from 'react';
import { Card, Rate, Skeleton } from 'antd';
import { CardProps } from 'antd';
import { formatNumber } from '@app/utils';

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
        boxShadow: "0 0.063rem 0.75rem rgba(0, 0, 0, 0.15)",
      }}
      bordered={true}
      {...cardProps}
    >
      <div className="w-full h-[10.438rem] overflow-hidden">
        {(loading || !image) && <Skeleton.Image className="w-full h-full" active={loading} />}
        <img className="w-full" src={image} />
      </div>
      <div className="pl-[1.125rem] pr-[1.125rem] py-[0.563rem]">
        <Skeleton className="w-3/5 mt-1 mb-1" paragraph={false} loading={loading} active>
          <p className="text-sm leading-[1rem] font-bold text-bg-secondary-light mb-[0.313rem]">{title || '-'}</p>
        </Skeleton>
        <div className="w-full flex justify-between">
          <div>
            <Skeleton className="w-full min-w-[6.25rem]" paragraph={false} loading={loading} active>
              <p className="text-secondary-1 text-xs leading-sm font-bold">${_formatForNull(price)}</p>
            </Skeleton>
            <Skeleton className="w-full mt-[0.375rem]" paragraph={false} loading={loading} active>
              <p className="text-secondary-1 text-2xs leading-xs mt-[0.375rem]">{_formatForNull(bedrooms)} bedrooms</p>
            </Skeleton>
            <Skeleton className="w-full mt-[0.188rem]" paragraph={false} loading={loading} active>
              <p className="text-secondary-1 text-2xs leading-xs mt-[0.188rem]">{_formatForNull(surface)}m<sup>2</sup></p>
            </Skeleton>
          </div>

          <div className="flex gap-[0.188rem] pr-[0.375rem] pt-2">
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
        <div className="flex justify-end mt-[0.188rem]">
          <Skeleton className="w-2/5" paragraph={false} loading={loading}>
            <a
              className="text-bg-secondary font-bold text-xs leading-2xl"
              href="#">
              read more ...
            </a>
          </Skeleton>
        </div>
      </div>
    </Card>
  );
}
