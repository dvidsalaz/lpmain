import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

import { Separator } from "@/components/ui/separator";
import MyDrawer from "@/components/custom/myDrawer";
import MyNavigationBar from "@/components/custom/MyNavigation";
import MyFooter from "@/components/custom/MyFooter";
import MyBanner from "@/components/custom/myBanner";
import ObserverProvider from "@/components/custom/ObserverProvider";

export default function Team() {
  return (
    <main className=" min-h-screen">
      {/* Notification Bar */}
      <ObserverProvider>
        <MyBanner></MyBanner>
        <section className=" bg-[url('/images/IMG_6687.jpg')] flex flex-col h-screen md:bg-fixed bg-cover shadow-inner-before">
          <div className="flex-grow flex flex-col gap-20 p-6 sm:p-10 lg:p-20">
            <MyNavigationBar></MyNavigationBar>
            <h1 className="text-6xl sm:text-8xl lg:text-9xl text-white font-bold motion-opacity-in-0 motion-translate-y-in-100 motion-delay-100">
              ABOUT US
            </h1>
            <h3 className=" text-lg sm:text-xl lg:text-2xl font-light text-white motion-opacity-in-0 motion-translate-y-in-100 motion-delay-500">
              SETTING THE NEW STANDARD FOR ROOFING
            </h3>
          </div>
          <div
            id="socials"
            className=" bg-WayneBlack p-4 px-10 lg:px-20 flex items-center gap-8 justify-end w-full"
          >
            <nav className=" flex gap-4 items-center">
              <Link href="/team">
                <Image
                  src="/images/facebook.svg"
                  alt="facebook"
                  width={32}
                  height={32}
                  className=" border-2"
                />
              </Link>

              <Link href="/">
                <Image
                  src="/images/linkedin.svg"
                  alt="linkedin"
                  width={32}
                  height={32}
                  className=" border-2"
                />
              </Link>
              <Link href="/">
                <Image
                  src="/images/envelope.svg"
                  alt="envelope"
                  width={32}
                  height={32}
                  className=" border-2"
                />
              </Link>
            </nav>
          </div>
        </section>
        <Separator className=" bg-SunsetOrange p-1"></Separator>

        <section
          id="member"
          className=" flex flex-col gap-8 p-6 sm:p-10 lg:p-10 bg-cloudyGray"
        >
          <div
            id="div1"
            className=" gap-4 flex flex-col p-10 lg:p-20 text-left items-start border-l-8 border-SunsetOrange "
          >
            <h2 className=" text-4xl sm:text-5xl lg:text-6xl intersect-once intersect:-motion-translate-x-in intersect:motion-delay-100 ">
              Our Mission
            </h2>
            <p className="text-2xl lg:text-4xl intersect-once intersect:motion-translate-y-in-100 intersect:motion-delay-400 ">
              LP Exteriors operates with intention. We strive to deliver the
              highest standard of service while fostering a positive influence
              that will resonate for years to come.
            </p>
          </div>
        </section>

        <section id="team" className=" flex flex-col md:flex-row h-screen">
          <div
            id="div1"
            className="bg-[url('/images/IMG_7163.jpg')]  shadow-inner-before hover:shadow-inner-after bg-cover bg-center justify-end flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 items-start text-left"
          >
            <div>
              <h2 className=" text-gray-300 text-2xl sm:text-3xl lg:text-5xl">
                Our Services
              </h2>
              <h2 className="text-2xl text-white sm:text-3xl lg:text-5xl">
                Enhancing Homes with Expertise You Can Always Trust
              </h2>
            </div>
            <Link href="/about">
              <Button className=" text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                LEARN MORE
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
                Contact Us
              </h2>
              <h2 className="text-2xl text-white sm:text-3xl lg:text-5xl">
                Impact-driven projects that build Houston for better.
              </h2>
            </div>
            <div>
              <Link href="/team">
                <Button className=" text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  MEET OUR TEAM
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <MyFooter />
      </ObserverProvider>
    </main>
  );
}
