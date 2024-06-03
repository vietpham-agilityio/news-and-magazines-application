"use client";

// hooks
import { useState, useEffect, useCallback } from "react";

// components
import Image from "next/image";
import { BoxIcon, Typography } from "@/ui/components";

// types
import { FontWeight, ISlideItem, Size } from "@/types";

// icons
import { ArrowLeft, ArrowRight } from "@/ui/components/Icons";

interface IProps {
  listSlider: ISlideItem[];
  autoPlay?: boolean;
  autoPlayTime?: number;
}

export const Carousel = ({
  listSlider = [],
  autoPlay = true,
  autoPlayTime = 3000,
}: IProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? listSlider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, listSlider.length]);

  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === listSlider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, listSlider.length]);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(goToNext, autoPlayTime);
      return () => clearInterval(interval);
    }
  }, [currentIndex, autoPlay, autoPlayTime, goToNext]);

  return (
    <div className="relative flex flex-col items-center w-full h-full mx-auto overflow-hidden border-2 bg-black-100 border-dark-10 rounded-lg">
      <BoxIcon
        width="10"
        height="10"
        additionalClasses="absolute left-4 z-10 top-1/2 hover:opacity-80"
        icon={<ArrowLeft />}
        onClick={goToPrevious}
      />
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {listSlider.map((slider, index) => {
          const { image, title, content } = slider;

          return (
            <div key={index} className="w-full flex-shrink-0 flex flex-col items-center relative">
              <Image
                key={index}
                src={image}
                width={900}
                height={600}
                alt={`Slide ${index}`}
                className="w-[744px] h-[500px]"
              />
              <div className="absolute left-5 bottom-15 p-4 bg-white-75 rounded-xl opacity-80 w-[93%] lg:w-[96%] xl:w-[92%] 2xl:w-[95%]">
                <Typography
                  tag="h3"
                  textSize={Size.LG}
                  weight={FontWeight.Normal}
                  additionalClasses="text-black-100 h-10 text-ellipsis overflow-hidden"
                >
                  {title}
                </Typography>
                <Typography
                  tag="p"
                  textSize={Size.XSM}
                  weight={FontWeight.Light}
                  additionalClasses="text-dark-100 w-[400px] lg:w-full xl:w-[300px] 2xl:w-[543px] h-10 leading-5 text-ellipsis overflow-hidden"
                >
                  {content}
                </Typography>
              </div>
            </div>
          );
        })}
      </div>
      <BoxIcon
        width="10"
        height="10"
        additionalClasses="absolute right-4 top-1/2 hover:opacity-80"
        icon={<ArrowRight />}
        onClick={goToNext}
      />

      <div className="flex absolute bottom-4 right-6">
        {listSlider.map((_, index) => (
          <button
            key={index}
            className={`h-2.5 mr-2 z-10 rounded-full ${index === currentIndex ? "w-7 bg-white-100" : "w-2.5 bg-white-75"}`}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};