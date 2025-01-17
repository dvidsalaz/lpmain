import Link from "next/link";
import Image from "next/image";
import MyNavigationBar from "@/components/custom/MyNavigation";

import { Button } from "@/components/ui/button";

import { MyForm } from "@/components/custom/MyForm";
import MyFooter from "@/components/custom/MyFooter";

export default function Team() {
  return (
    <main className=" min-h-screen">
      {/* Notification Bar */}
      <div className=" bg-WayneBlack text-white text-center p-2">
        <div className=" flex justify-end items-center gap-4 text-sm sm:text-base lg:text-lg">
          <div className=" flex gap-4">
            <p className="text-sm sm:text-base lg:text-lg">
              dsalazar@lpexteriors.com
            </p>
            <span>|</span>
            <a
              href="tel:+18324686980"
              className="text-sm sm:text-base lg:text-lg"
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
          <p className="text-sm sm:text-base lg:text-lg"></p>
        </div>
      </div>
      <section className="flex flex-col gap-20 p-6 sm:p-10 lg:p-20 bg-fixed bg-cover bg-center h-screen bg-slate-400">
        <MyNavigationBar></MyNavigationBar>
        <div className=" text-6xl sm:text-8xl lg:text-9xl text-white font-bold">
          <h1 className="motion-opacity-in-0 motion-translate-y-in-100 motion-delay-100">
            CONTACT US
          </h1>
        </div>
        <p className=" text-lg sm:text-xl lg:text-2xl font-light text-white motion-opacity-in-0 motion-translate-y-in-100 motion-delay-500">
          SETTING THE NEW STANDARD FOR ROOFING
        </p>
      </section>
      <section
        id="member"
        className=" bg-white flex flex-col md:flex-row gap-8 p-6 sm:p-10 lg:p-20"
      >
        <div
          id="div1"
          className=" flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow items-center text-center md:text-left md:items-start"
        >
          <div>
            <h2 className=" text-WayneBlack text-2xl sm:text-3xl lg:text-5xl">
              Joaquin Salazar
            </h2>
            <h1 className="text-2xl text-gray-300 sm:text-3xl lg:text-5xl">
              Founder
            </h1>
          </div>
          <p className=" text-base sm:text-lg lg:text-xl">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
            felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
            in accumsan.
          </p>
          <p className=" text-base sm:text-lg lg:text-xl">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
            felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
            in accumsan.
          </p>
          <div>
            <Link href="/team">
              <Button className=" text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                CONTACT
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative flex-1 flex items-center justify-center md:flex-col">
          <Image
            src="/images/IMG_1684.jpg"
            alt="founderpicture"
            layout="responsive"
            width={500}
            height={500}
            objectFit=" cover"
            className="shadow-lg"
          />
        </div>
      </section>
      <section
        id="portfolio"
        className="flex flex-col md:flex-row gap-8 p-6 sm:p-10 lg:p-20 bg-cover md:bg-fixed bg-center min-h-screen bg-slate-400"
        style={{ backgroundImage: "url('/images/IMG_7164.jpg')" }}
      >
        <div className="lg:p-20 items-center justify-center flex-1 flex w-full bg-none"></div>
        <div
          id="div1"
          className="items-center justify-center flex-1 gap-8 flex flex-col p-6 sm:p-8 lg:p-10 bg-white shadow"
        >
          <div>
            <h2 className="text-gray-300 text-center text-2xl sm:text-3xl lg:text-5xl">
              Build With Us
            </h2>
            <h1 className="text-2xl text-center text-WayneBlack sm:text-3xl lg:text-5xl">
              Request Free Estimate
            </h1>
          </div>
          <MyForm />
        </div>
      </section>
      <MyFooter></MyFooter>
    </main>
  );
}
