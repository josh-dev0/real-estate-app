import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import type { CarouselProps } from 'antd';
import type { CarouselRef } from 'antd/lib/carousel';
import classNames from 'classnames';
import { PropertyCard, PropertyCardProps } from '@app/components';
import styles from './styles.module.scss';

type PropertyCarouselProps = {
  label: string;
  properties: PropertyCardProps[],
} & CarouselProps;

export const PropertyCarousel: React.FC<PropertyCarouselProps> = ({
  className,
  label,
  properties,
  infinite,
  ...carouselProps
}) => {
  const carouselRef = useRef<CarouselRef>(null);
  const [isSSR, setIsSSR] = useState(true);
  const [slide, setSlide] = useState<number>(0);
  const [numInSlide, setNumInSlide] = useState(4);
  const numOfSlides = useMemo(() => Math.ceil(properties.length / numInSlide), [properties.length, numInSlide]);

  const handleOnPrev = useCallback(() => setSlide(Math.max(slide - 1, 0)), [slide, carouselRef]);
  const handleOnNext = () => setSlide(Math.min(slide + 1, numOfSlides - 1))

  useEffect(() => {
    carouselRef.current?.goTo(slide);
  }, [slide, carouselRef]);

  useEffect(() => {
    // TODO: need to change the property count in a slide based on the screen size?.
    setNumInSlide(4);
    setIsSSR(false);
  })

  if (isSSR) return null;

  return (
    <div className={classNames("w-full", className)}>
      <div className="flex items-center justify-between mb-3">
        <label className="text-base leading-2xl text-secondary-1 font-medium">{label}</label>
        <div className="flex items-center gap-[0.875rem]">
          <LeftOutlined
            className={classNames(styles.arrow, {
              [styles.arrowEnabled]: slide > 0,
              [styles.arrowDisabled]: slide === 0,
            })}
            onClick={handleOnPrev}
          />
          <RightOutlined
            className={classNames(styles.arrow, {
              [styles.arrowEnabled]: slide < numOfSlides - 1,
              [styles.arrowDisabled]: slide === numOfSlides - 1,
            })}
            onClick={handleOnNext}
          />
        </div>
      </div>
      <Carousel
        ref={carouselRef}
        infinite={false}
        {...carouselProps}
      >
        {
          new Array(numOfSlides).fill(null).map((_, slideIndex) =>
            <div
              key={slideIndex}
              className="flex justify-between gap-[1rem]"
            >
              {new Array(numInSlide).fill(null).map((_, propertyIndexInSlide) => <PropertyCard
                key={`${slideIndex}-${propertyIndexInSlide}`}
                className="w-full"
                {...properties[slideIndex * numInSlide + propertyIndexInSlide]}
              />
              )}
            </div>
          )
        }
      </Carousel >
    </div >
  );
}