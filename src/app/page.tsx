import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import MyNavigationBar from "@/components/custom/MyNavigation";

import { Separator } from "@/components/ui/separator";

import MyDrawer from "@/components/custom/myDrawer";

import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
import MyFooter from "@/components/custom/MyFooter";
import { Carousel } from "@/components/ui/carousel";
import { CarouselSize } from "@/components/custom/CarouselSize";
import MyMap from "@/components/custom/MyMap";
import ObserverProvider from "@/components/custom/ObserverProvider";
import MyBanner from "@/components/custom/MyBanner";

export default function Home() {
  return (
    <main className=" min-h-screen">
      {/* Notification Bar */}
      {/* Main Content */}
      <ObserverProvider>
        <MyBanner></MyBanner>
        <section className=" flex flex-col gap-8 p-6 sm:p-10 lg:p-20 bg-fixed bg-cover bg-center h-screen">
          <video
            className=" lg:visible absolute top-0 left-0 w-full h-screen object-cover -z-10 pointer-events-none"
            autoPlay
            muted
            loop
            preload="auto"
            playsInline
          >
            <source src="/videos/testing.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <MyNavigationBar></MyNavigationBar>
          <div className=" text-6xl sm:text-8xl lg:text-9xl text-white font-bold">
            <h1 className="flex flex-col">
              <span className="motion-opacity-in-0 motion-translate-x-in-100 motion-delay-100 ">
                LP
              </span>
              <span className="motion-opacity-in-0 motion-translate-x-in-100 motion-delay-500">
                DELIVERS
              </span>
              <span className="motion-opacity-in-0 motion-translate-x-in-100 motion-delay-1000">
                RESULTS
              </span>
            </h1>
          </div>
          <h3 className=" text-white text-lg sm:text-xl lg:text-2xl font-light motion-opacity-in-0 motion-translate-y-in-100 motion-delay-1500">
            SETTING THE NEW STANDARD FOR ROOFING
          </h3>
        </section>

        <section
          id="process"
          className=" flex flex-col gap-8 p-6 sm:p-10 lg:p-20 items-center"
        >
          <h2
            id="top"
            className="text-4xl sm:text-5xl lg:text-6xl text-WayneBlack underline"
          >
            The Process
          </h2>
          <div className="flex flex-wrap justify-between gap-4 ">
            <div
              id="container"
              className="flex flex-col bg-cloudyGray w-full md:flex-1 lg:flex-1 shadow-lg hover:shadow-xl intersect-once intersect:motion-translate-y-in-100 intersect:motion-delay-100"
            >
              <div className=" relative w-full h-96 overflow-hidden">
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
                <h3 className="text-2xl lg:text-3xl text-WayneBlack underline">
                  VERIFY DAMAGE
                </h3>
                <p className=" flex-1 text-lg lg:text-xl">
                  Schedule a free in-person inspection with us. Our experts will
                  assess your property and provide a recommendation on whether
                  to proceed with the claims process.
                </p>
                <Link href="/services">
                  <Button className="text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                    LEARN MORE
                    <Image
                      src="/images/arrow-up-right.svg"
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                  </Button>
                </Link>
              </div>
            </div>
            <div
              id="container"
              className="flex flex-col bg-cloudyGray w-full md:flex-1 lg:flex-1  shadow-lg hover:shadow-xl intersect-once intersect:motion-translate-y-in-100 intersect:motion-delay-200"
            >
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
                <h3 className="text-2xl lg:text-3xl text-WayneBlack underline">
                  FILE A CLAIM
                </h3>
                <p className=" flex-1 text-lg lg:text-xl">
                  Filing a claim is simple and takes only a few minutes. We
                  guide you through the process, ensuring the insurance company
                  is informed of our collaboration and your claim details.
                </p>
                <Link href="/services">
                  <Button className="text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                    LEARN MORE
                    <Image
                      src="/images/arrow-up-right.svg"
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                  </Button>
                </Link>
              </div>
            </div>
            <div
              id="container"
              className="flex flex-col bg-cloudyGray w-full md:flex-1 lg:flex-1  shadow-lg hover:shadow-xl intersect-once intersect:motion-translate-y-in-100 intersect:motion-delay-300"
            >
              <div className=" relative w-full h-96 overflow-hidden">
                <Image
                  src="/images/adjuster.png"
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
                <h3 className="text-2xl lg:text-3xl text-WayneBlack underline">
                  SCHEDULE THE ADJUSTMENT
                </h3>
                <p className=" flex-1 text-lg lg:text-xl">
                  An insurance adjuster will visit your property to assess the
                  damage. Our presence ensures that all issues are addressed and
                  nothing critical is overlooked.
                </p>
                <Link href="/services">
                  <Button className="text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                    LEARN MORE
                    <Image
                      src="/images/arrow-up-right.svg"
                      alt="arrow"
                      width={24}
                      height={24}
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Separator className=" bg-SunsetOrange p-1"></Separator>
        <section
          id="services"
          className=" bg-[url('/images/IMG_7164.jpg')] flex shadow-inner-before flex-col md:flex-row gap-8 p-6 sm:p-10 lg:p-20 bg-cover md:bg-fixed bg-center h-screen"
        >
          <div className=" lg:p-20 items-center justify-center flex-1 flex w-full bg-none"></div>
          <div
            id="div1"
            className=" items-center motion-scale-y-in justify-center flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow"
          >
            <div>
              <h2 className="text-gray-300 text-center text-2xl sm:text-3xl lg:text-5xl">
                Solutions That Last
              </h2>
              <h2 className="text-2xl text-center text-WayneBlack sm:text-3xl lg:text-5xl">
                Request A Quote
              </h2>
            </div>
            <p className=" text-center text-WayneBlack text-lg lg:text-xl">
              Whether you need repairs, replacements, or enhancements,
              we&apos;re here to bring your vision to life. Explore our
              comprehensive services designed to meet your needs with precision
              and care.
            </p>
            <div className="flex flex-col items-center justify-center">
              <div className=" flex">
                <Image
                  src="/images/check.svg"
                  alt="check"
                  width={24}
                  height={24}
                ></Image>
                <p className="text-WayneBlack text-lg lg:text-xl">
                  Roof Storm Damage Repair
                </p>
              </div>
              <div className=" flex">
                <Image
                  src="/images/check.svg"
                  alt="check"
                  width={24}
                  height={24}
                ></Image>
                <p className="text-WayneBlack text-lg lg:text-xl">
                  Full Roof Replacement
                </p>
              </div>

              <div className=" flex">
                <Image
                  src="/images/check.svg"
                  alt="check"
                  width={24}
                  height={24}
                ></Image>
                <p className="text-WayneBlack text-lg lg:text-xl">
                  Siding & Fascia Repair
                </p>
              </div>
              <div className=" flex">
                <Image
                  src="/images/check.svg"
                  alt="check"
                  width={24}
                  height={24}
                ></Image>
                <p className="text-WayneBlack text-lg lg:text-xl">
                  Gutter Installation
                </p>
              </div>
            </div>
            <Link href="/team">
              <Button className="text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                REQUEST A QUOTE
              </Button>
            </Link>
          </div>
        </section>
        <Separator className=" bg-SunsetOrange p-1"></Separator>
        <section className=" bg-white flex flex-col items-center justify-center gap-8 p-12 sm:p-12 lg:p-12">
          <h3 className=" text-4xl sm:text-5xl lg:text-6xl underline">
            Our Services
          </h3>
          <CarouselSize></CarouselSize>
        </section>

        <CarouselPlugin></CarouselPlugin>

        <Separator className=" bg-SunsetOrange p-1"></Separator>

        <section id="team" className=" flex flex-col md:flex-row h-screen">
          <div
            id="div1"
            className="bg-[url('/images/IMG_7163.jpg')] shadow-inner-before hover:shadow-inner-after bg-cover bg-center justify-end flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 items-start text-left"
          >
            <div>
              <h2 className=" text-gray-300 text-2xl sm:text-3xl lg:text-5xl">
                About Us
              </h2>
              <h3 className="text-2xl text-white sm:text-3xl lg:text-5xl ">
                We work together to make great things happen.
              </h3>
            </div>
            <Link href="/about">
              <Button className=" text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none intersect-once intersect:motion-preset-slide-up motion-delay-600">
                LEARN MORE
                <Image
                  src="/images/arrow-up-right.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </Button>
            </Link>
          </div>
          <div
            id="div2"
            className="shadow-inner-before hover:shadow-inner-after bg-purple-500 bg-center bg-cover justify-end flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 items-start text-left"
          >
            <div>
              <h2 className="text-gray-300 text-2xl sm:text-3xl lg:text-5xl">
                Our Team
              </h2>
              <h3 className="text-2xl text-white sm:text-3xl lg:text-5xl">
                Impact-driven projects that build Houston for better.
              </h3>
            </div>
            <div>
              <Link href="/team">
                <Button className="text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  MEET OUR TEAM
                  <Image
                    src="/images/arrow-up-right.svg"
                    alt="arrow"
                    width={24}
                    height={24}
                  />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="flex flex-col gap-8 p-6 sm:p-10 lg:p-20 items-center bg-white"
        >
          <div className=" flex flex-col gap-8 bg-cloudyGray p-6 sm:p-10 lg:p-20 items-center text-center">
            <h2 className=" text-4xl sm:text-5xl lg:text-6xl underline">
              Get In Touch
            </h2>
            <p className=" text-lg sm:text-2xl lg:text-2xl text-bottomGray">
              Have questions or want to learn more about how we can help? Reach
              out to us! We&apos;re here to provide answers, support, and
              guidance every step of the way.&nbsp;
              <Link href="/contact">
                <span className="hover:motion-text-out-devilRed font-oswald hover:font-bold">
                  Let&apos;s start a conversation today.
                </span>
              </Link>
            </p>
            <Link href="/contact">
              <Button
                className=" text-lg sm:text-xl lg:text-2xl gap-2 text-devilRed p-6 bg-transparent border-devilRed rounded-none border-2 "
                variant={"outline"}
              >
                CONTACT US
                <Image
                  src="/images/arrow-right.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </Button>
            </Link>
          </div>
        </section>
        <Separator className=" bg-SunsetOrange p-1"></Separator>
        <MyMap></MyMap>
        <MyFooter></MyFooter>
      </ObserverProvider>
    </main>
  );
}
