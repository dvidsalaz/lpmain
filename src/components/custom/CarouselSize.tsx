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
    <Carousel className="w-full">
      <CarouselContent className="">
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
          <Card className="flex flex-col bg-cloudyGray flex-1 rounded-none border-none">
            <div className=" relative w-full h-96 overflow-hidden">
              <Image
                src="/images/insurance.jpg"
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
              <h3 className=" font-oswald font-bold text-xl sm:text-2xl lg:text-3xl text-WayneBlack underline">
                Roof Leak Repair
              </h3>
              <p className=" flex-1 sm:text-lg lg:text-xl">
                Filing a claim is simple and takes only a few minutes. We guide
                you through the process, ensuring the insurance company is
                informed of our collaboration and your claim details.
              </p>
              <Link href="/services">
                <Button className="text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
          <Card className="flex flex-col bg-cloudyGray flex-1 rounded-none border-none">
            <div className=" relative w-full h-96 overflow-hidden">
              <Image
                src="/images/insurance.jpg"
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
              <h3 className=" font-oswald font-bold text-xl sm:text-2xl lg:text-3xl text-WayneBlack underline">
                Shingle Replacement
              </h3>
              <p className=" flex-1 sm:text-lg lg:text-xl">
                Filing a claim is simple and takes only a few minutes. We guide
                you through the process, ensuring the insurance company is
                informed of our collaboration and your claim details.
              </p>
              <Link href="/services">
                <Button className="text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
          <Card className="flex flex-col bg-cloudyGray flex-1 rounded-none border-none">
            <div className=" relative w-full h-96 overflow-hidden">
              <Image
                src="/images/insurance.jpg"
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
              <h3 className="font-oswald font-bold text-xl sm:text-2xl lg:text-3xl text-WayneBlack underline">
                Storm Damage Repair
              </h3>
              <p className=" flex-1 sm:text-lg lg:text-xl">
                Filing a claim is simple and takes only a few minutes. We guide
                you through the process, ensuring the insurance company is
                informed of our collaboration and your claim details.
              </p>
              <Link href="/services">
                <Button className="text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
          <Card className="flex flex-col bg-cloudyGray flex-1 rounded-none border-none">
            <div className=" relative w-full h-96 overflow-hidden">
              <Image
                src="/images/insurance.jpg"
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
              <h3 className="font-oswald font-bold text-xl sm:text-2xl lg:text-3xl text-WayneBlack underline">
                Roof Replacement
              </h3>
              <p className=" flex-1 sm:text-lg lg:text-xl">
                Filing a claim is simple and takes only a few minutes. We guide
                you through the process, ensuring the insurance company is
                informed of our collaboration and your claim details.
              </p>
              <Link href="/services">
                <Button className="text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </Card>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3 ">
          <Card className="flex flex-col bg-cloudyGray flex-1 rounded-none border-none">
            <div className=" relative w-full h-96 overflow-hidden">
              <Image
                src="/images/insurance.jpg"
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
              <h3 className="font-oswald font-bold text-xl sm:text-2xl lg:text-3xl text-WayneBlack underline">
                Gutter Repair & Installation
              </h3>
              <p className=" flex-1 sm:text-lg lg:text-xl">
                Filing a claim is simple and takes only a few minutes. We guide
                you through the process, ensuring the insurance company is
                informed of our collaboration and your claim details.
              </p>
              <Link href="/services">
                <Button className="text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </Card>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
