import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Carousel } from 'antd';
import type { CarouselProps } from 'antd';
import type { CarouselRef } from 'antd/lib/carousel';
import classNames from 'classnames';
import { PropertyCardProps } from '@app/components';
import { withExtraClass } from '@app/utils';
import styles from './styles.module.scss';

type CozziCarouselProps = {
  label: string;
  items: JSX.Element[];
  handlePosition?: 'top' | 'side'
} & Omit<CarouselProps, 'infinite' | 'dots'>;

export const CozziCarousel: React.FC<CozziCarouselProps> = ({
  className,
  label,
  items,
  handlePosition = 'side',
  ...carouselProps
}) => {
  const carouselRef = useRef<CarouselRef>(null);
  const [isSSR, setIsSSR] = useState(true);
  const [slide, setSlide] = useState<number>(0);
  const [numInSlide, setNumInSlide] = useState(4);
  const numOfSlides = useMemo(() => Math.ceil(items.length / numInSlide), [items.length, numInSlide]);

  const handleOnPrev = useCallback(() => setSlide(Math.max(slide - 1, 0)), [slide]);
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
    <div className={classNames(styles.container, className)}>
      <div className={classNames("flex items-center px-2", {
        "justify-between": handlePosition === 'top',
      })}>
        <label className="text-base leading-2xl text-secondary-1 font-medium">{label}</label>
        {
          handlePosition === 'top' && <div className="flex items-center gap-[0.875rem]">
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
        }
      </div>
      <div className="relative">
        {/* Side Arrow Handles */}
        {
          handlePosition === 'side' && <LeftOutlined
            className={classNames(styles.arrowSide, styles.arrowSideLeft, {
              [styles.arrowEnabled]: slide > 0,
              [styles.arrowDisabled]: slide === 0,
            })}
            onClick={handleOnPrev}
          />
        }
        {
          handlePosition === 'side' && <RightOutlined
            className={classNames(styles.arrowSide, styles.arrowSideRight, {
              [styles.arrowEnabled]: slide < numOfSlides - 1,
              [styles.arrowDisabled]: slide === numOfSlides - 1,
            })}
            onClick={handleOnNext}
          />
        }
        <Carousel
          ref={carouselRef}
          dots={false}
          infinite={false}
          {...carouselProps}
        >
          {
            new Array(numOfSlides).fill(null).map((_, slideIndex) =>
              <div
                key={slideIndex}
                className="flex gap-[1rem] px-2 pb-4 pt-3"
              >
                {new Array(Math.min(numInSlide, items.length - numInSlide * slideIndex)).fill(null).map((_, itemIndexInSlide) =>
                  withExtraClass(items[slideIndex * numInSlide + itemIndexInSlide], `w-1/${numInSlide}`, { key: `${slideIndex}-${itemIndexInSlide}` })
                )}
              </div>
            )
          }
        </Carousel >
      </div>
    </div >
  );
}