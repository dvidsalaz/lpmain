"use client";

import {
  Carousel,
  CarouselMainContainer,
  SliderMainItem,
} from "@/components/ui/embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

const CarouselOrientation = () => {
  return (
    <Carousel
      plugins={[
        AutoScroll({
          speed: 1,
        }),
      ]}
      carouselOptions={{
        loop: true,
      }}
    >
      <CarouselMainContainer className="h-60 flex overflow-hidden">
        {Array.from({ length: 10 }).map((_, index) => (
          <SliderMainItem key={index} className=" flex-1 bg-transparent">
            <div className=" outline outline-1 outline-border size-full flex items-center justify-center rounded-xl bg-background">
              <img
                src={`/images/image_${index + 1}.png`}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </SliderMainItem>
        ))}
      </CarouselMainContainer>
    </Carousel>
  );
};

export default CarouselOrientation;
