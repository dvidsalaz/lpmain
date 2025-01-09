"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "../ui/button";
import Image from "next/image";
import { Separator } from "../ui/separator";
import Link from "next/link";

export function CarouselSize() {
  return (
    <section id="services" className="flex p-10">
      <Carousel className="w-full">
        <CarouselContent className=" gap-4">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-cloudyGray shadow-lg hover:shadow-xl ">
            <div className="relative w-full h-96 overflow-hidden">
              <Image
                src="/images/IMG_5501.jpeg"
                alt="A flexible image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>
            <div
              id="text-space"
              className="flex flex-col items-center justify-center text-center gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-WayneBlack underline">
                VERIFY DAMAGE
              </h3>
              <p className=" flex-1 sm:text-lg lg:text-xl">
                Schedule a free in-person inspection with us. Our experts will
                assess your property and provide a recommendation on whether to
                proceed with the claims process.
              </p>
              <Link href="/services">
                <Button className="text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-cloudyGray shadow-lg hover:shadow-xl ">
            <div className="relative w-full h-96 overflow-hidden">
              <Image
                src="/images/IMG_5501.jpeg"
                alt="A flexible image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>
            <div
              id="text-space"
              className="flex flex-col items-center justify-center text-center gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-WayneBlack underline">
                VERIFY DAMAGE
              </h3>
              <p className=" flex-1 sm:text-lg lg:text-xl">
                Schedule a free in-person inspection with us. Our experts will
                assess your property and provide a recommendation on whether to
                proceed with the claims process.
              </p>
              <Link href="/services">
                <Button className="text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-cloudyGray shadow-lg hover:shadow-xl ">
            <div className="relative w-full h-96 overflow-hidden">
              <Image
                src="/images/IMG_5501.jpeg"
                alt="A flexible image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>
            <div
              id="text-space"
              className="flex flex-col items-center justify-center text-center gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-WayneBlack underline">
                VERIFY DAMAGE
              </h3>
              <p className=" flex-1 sm:text-lg lg:text-xl">
                Schedule a free in-person inspection with us. Our experts will
                assess your property and provide a recommendation on whether to
                proceed with the claims process.
              </p>
              <Link href="/services">
                <Button className="text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3 bg-cloudyGray shadow-lg hover:shadow-xl ">
            <div className="relative w-full h-96 overflow-hidden">
              <Image
                src="/images/IMG_5501.jpeg"
                alt="A flexible image"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>
            <div
              id="text-space"
              className="flex flex-col items-center justify-center text-center gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
            >
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-WayneBlack underline">
                VERIFY DAMAGE
              </h3>
              <p className=" flex-1 sm:text-lg lg:text-xl">
                Schedule a free in-person inspection with us. Our experts will
                assess your property and provide a recommendation on whether to
                proceed with the claims process.
              </p>
              <Link href="/services">
                <Button className="text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </section>
  );
}
