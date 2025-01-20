"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false })
  );

  return (
    <section className=" bg-cloudyGray flex flex-col items-center justify-center p-6 gap-4">
      <h3 className=" font-oswald font-bold text-2xl text-center md:text-2xl lg:text-3xl">
        WE USE TOP-QUALITY ROOFING MATERIALS TAILORED TO YOUR NEEDS
      </h3>
      <Carousel plugins={[plugin.current]} className=" w-full">
        <CarouselContent className="bg-none">
          <CarouselItem className=" basis-1/2 sm:basis-1/5 lg:basis-1/5">
            <div className="p-1">
              <Card className="">
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image
                    src="/images/owens-corning.svg"
                    alt="test"
                    className=" object-contain"
                    layout="fill"
                  ></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 sm:basis-1/5 lg:basis-1/5">
            <div className="p-1">
              <Card className="">
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image
                    src="/images/Clove_Logo.svg"
                    alt="test"
                    className=" object-contain"
                    layout="fill"
                  ></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 sm:basis-1/5 lg:basis-1/5">
            <div className="p-1">
              <Card className="">
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image
                    src="/images/Certainteed_Logo.svg"
                    alt="test"
                    className=" object-contain"
                    layout="fill"
                  ></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 sm:basis-1/5 lg:basis-1/5">
            <div className="p-1">
              <Card className="">
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image
                    src="/images/Atlas_Logo.svg"
                    alt="test"
                    className=" object-contain"
                    layout="fill"
                  ></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 sm:basis-1/5 lg:basis-1/5">
            <div className="p-1">
              <Card className="">
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image
                    src="/images/GAF_Logo.svg"
                    alt="test"
                    className=" object-contain"
                    layout="fill"
                  ></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 sm:basis-1/5 lg:basis-1/5">
            <div className="p-1">
              <Card className="">
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image
                    src="/images/TAMKO_Logo.svg"
                    alt="test"
                    className=" object-contain"
                    layout="fill"
                  ></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className=" basis-1/2 sm:basis-1/5 lg:basis-1/5">
            <div className="p-1">
              <Card className="">
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <Image
                    src="/images/IKO_Logo.svg"
                    alt="test"
                    className=" object-contain"
                    layout="fill"
                  ></Image>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
