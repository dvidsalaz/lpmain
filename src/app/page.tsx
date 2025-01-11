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

export default function Home() {
  return (
    <main className=" min-h-screen">
      {/* Notification Bar */}
      <div className="bg-SunsetOrange text-white text-center p-2">
        <div className=" flex justify-end items-center gap-4 text-sm sm:text-base lg:text-lg">
          <div className=" flex gap-4">
            <h3 className="text-sm sm:text-base lg:text-lg">
              <a
                href="mailto:dsalazar@lpexteriors.com"
                className=" hover:underline"
              >
                dsalazar@lpexteriors.com
              </a>
            </h3>
            <span>|</span>
            <a
              href="tel:+18324686980"
              className="text-sm sm:text-base hover:underline lg:text-lg"
              aria-label="Call us at (832) 468-6980"
              title="Call us at (832) 468-6980"
            >
              (832) 468-6980
            </a>
            <span>
              <Image
                src="/images/phone.svg"
                alt="Phone Icon"
                width={24}
                height={24}
              />
            </span>
          </div>
        </div>
      </div>
      {/* Main Content */}
      <section
        id="header"
        className="flex flex-col gap-8 p-6 sm:p-10 lg:p-20 bg-slate-400 min-h-screen"
      >
        <MyNavigationBar></MyNavigationBar>
        <div className=" text-6xl sm:text-8xl lg:text-9xl text-white font-bold ">
          <h1 className="motion-opacity-in-0 motion-translate-x-in-100 motion-delay-100 ">
            LP
          </h1>
          <h1 className="motion-opacity-in-0 motion-translate-x-in-100 motion-delay-500">
            DELIVERS
          </h1>
          <h1 className="motion-opacity-in-0 motion-translate-x-in-100 motion-delay-1000">
            RESULTS
          </h1>
        </div>
        <h2 className=" text-lg sm:text-xl lg:text-2xl font-light motion-opacity-in-0 motion-translate-y-in-100 motion-delay-1500">
          SETTING THE NEW STANDARD FOR ROOFING
        </h2>
      </section>

      <section
        id="process"
        className="flex flex-col gap-8 p-6 sm:p-10 lg:p-20 items-center"
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
            className="flex flex-col bg-cloudyGray flex-1 shadow-lg hover:shadow-xl"
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
          </div>
          <div
            id="container"
            className="flex flex-col bg-cloudyGray flex-1 shadow-lg hover:shadow-xl"
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
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-WayneBlack underline">
                FILE A CLAIM
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
          </div>
          <div
            id="container"
            className="flex flex-col bg-cloudyGray flex-1 shadow-lg hover:shadow-xl"
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
              <h3 className="text-xl sm:text-2xl lg:text-3xl text-WayneBlack underline">
                SCHEDULE THE ADJUSTMENT
              </h3>
              <p className=" flex-1 sm:text-lg lg:text-xl">
                An insurance adjuster will visit your property to assess the
                damage. Our presence ensures that all issues are addressed and
                nothing critical is overlooked.
              </p>
              <Link href="/services">
                <Button className="text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  LEARN MORE
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Separator className=" bg-SunsetOrange p-1"></Separator>
      <section
        id="services"
        className="flex flex-col md:flex-row gap-8 p-6 sm:p-10 lg:p-20 bg-cover md:bg-fixed bg-center h-screen"
        style={{ backgroundImage: "url('/images/IMG_7164.jpg')" }}
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
            <h1 className="text-2xl text-center text-WayneBlack sm:text-3xl lg:text-5xl">
              Request A Quote
            </h1>
          </div>
          <p className=" text-center text-WayneBlack text-base sm:text-lg lg:text-xl">
            Whether you need repairs, replacements, or enhancements, we&apos;re
            here to bring your vision to life. Explore our comprehensive
            services designed to meet your needs with precision and care.
          </p>
          <div className="flex flex-col items-center justify-center">
            <div className=" flex">
              <Image
                src="/images/check.svg"
                alt="check"
                width={24}
                height={24}
              ></Image>
              <p className="text-WayneBlack text-base sm:text-lg lg:text-xl">
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
              <p className="text-WayneBlack text-base sm:text-lg lg:text-xl">
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
              <p className="text-WayneBlack text-base sm:text-lg lg:text-xl">
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
              <p className="text-WayneBlack text-base sm:text-lg lg:text-xl">
                Gutter Installation
              </p>
            </div>
          </div>
          <Link href="/team">
            <Button className="text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
              REQUEST A QUOTE
            </Button>
          </Link>
        </div>
      </section>
      <section className=" flex flex-col items-center justify-center gap-4 p-6 sm:p-10 lg:p-10">
        <CarouselSize></CarouselSize>
      </section>
      <section className=" bg-cloudyGray flex flex-col items-center justify-center p-6 gap-4">
        <h3 className=" font-oswald font-bold text-lg text-center sm:xl md:text-2xl lg:text-3xl">
          WE USE TOP-QUALITY ROOFING MATERIALS TAILORED TO YOUR NEEDS
        </h3>
        <CarouselPlugin></CarouselPlugin>
      </section>
      <Separator className=" bg-SunsetOrange p-1"></Separator>

      <section id="team" className=" flex flex-col md:flex-row h-screen">
        <div
          id="div1"
          className=" shadow-inner-before hover:shadow-inner-after bg-cover bg-center justify-end flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 items-start text-left"
          style={{ backgroundImage: "url('/images/IMG_7163.jpg')" }}
        >
          <div>
            <h2 className=" text-gray-300 text-2xl sm:text-3xl lg:text-5xl">
              About Us
            </h2>
            <h1 className="text-2xl text-white sm:text-3xl lg:text-5xl">
              We work together to make great things happen.
            </h1>
          </div>
          <Link href="/about">
            <Button className=" text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
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
          style={{ backgroundImage: "url('/images/.jpg')" }}
        >
          <div>
            <h2 className="text-gray-300 text-2xl sm:text-3xl lg:text-5xl">
              Our Team
            </h2>
            <h1 className="text-2xl text-white sm:text-3xl lg:text-5xl">
              Impact-driven projects that build Houston for better.
            </h1>
          </div>
          <div>
            <Link href="/team">
              <Button className=" text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
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
        className="flex flex-col gap-8 p-6 sm:p-10 lg:p-20 items-center"
      >
        <div className=" flex flex-col gap-8 bg-cloudyGray p-6 sm:p-10 lg:p-20 items-center text-center">
          <h1 className=" text-4xl sm:text-5xl lg:text-6xl underline">
            Get In Touch
          </h1>
          <p className=" text-lg sm:text-2xl lg:text-2xl text-bottomGray">
            Have questions or want to learn more about how we can help? Reach
            out to us! We&apos;re here to provide answers, support, and guidance
            every step of the way.&nbsp;
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
      <MyFooter></MyFooter>
    </main>
  );
}
