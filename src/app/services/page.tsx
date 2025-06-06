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
import { CarouselPlugin } from "@/components/custom/CarouselPlugin";
import MyBanner from "@/components/custom/MyBanner";
export default function Team() {
  return (
    <main className=" min-h-screen">
      {/* Notification Bar */}
      <MyBanner></MyBanner>
      <section className="flex flex-col h-screen bg-slate-400">
        <div className="flex-grow flex flex-col gap-20 p-6 sm:p-10 lg:p-20">
          <MyNavigationBar></MyNavigationBar>
          <h1 className="text-6xl sm:text-8xl lg:text-9xl text-white font-bold motion-opacity-in-0 motion-translate-y-in-100 motion-delay-100">
            SERVICES
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
      <section id="team" className=" flex flex-col md:flex-row h-screen">
        <div
          id="div1"
          className="bg-[url('/images/image38.svg')]  shadow-inner-before hover:shadow-inner-after bg-cover bg-center bg-green-500 justify-end flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 items-start text-left"
        >
          <div>
            <h2 className=" text-gray-300 text-2xl sm:text-3xl lg:text-5xl">
              Storm Damage
            </h2>
            <h3 className="text-2xl text-white sm:text-3xl lg:text-5xl">
              We work together to make great things happen.
            </h3>
          </div>
          <Link href="/storm-damage">
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
          className="bg-[url('/images/roofLeak.svg')] shadow-inner-before hover:shadow-inner-after bg-purple-500 bg-center bg-cover justify-end flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 items-start text-left"
        >
          <div>
            <h2 className="text-gray-300 text-2xl sm:text-3xl lg:text-5xl">
              Roof Leaks
            </h2>
            <h3 className="text-2xl text-white sm:text-3xl lg:text-5xl">
              Impact-driven projects that build Houston for better.
            </h3>
          </div>
          <div>
            <Link href="/roof-leaks">
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
        </div>
      </section>
      <section id="team" className=" flex flex-col md:flex-row h-screen">
        <div
          id="div1"
          className=" shadow-inner-before hover:shadow-inner-after bg-cover bg-center bg-purple-500 justify-end flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 items-start text-left"
          style={{ backgroundImage: "url('/images/.svg')" }}
        >
          <div>
            <h2 className=" text-gray-300 text-2xl sm:text-3xl lg:text-5xl">
              Shingle Replacement
            </h2>
            <h3 className="text-2xl text-white sm:text-3xl lg:text-5xl">
              We work together to make great things happen.
            </h3>
          </div>
          <Link href="/shingle-replacement">
            <Button className=" text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
              LEARN MORE{" "}
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
          className="bg-[url('/images/image41.svg')] shadow-inner-before hover:shadow-inner-after bg-purple-500 bg-center bg-cover justify-end flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 items-start text-left"
        >
          <div>
            <h2 className="text-gray-300 text-2xl sm:text-3xl lg:text-5xl">
              Roof Replacement
            </h2>
            <h3 className="text-2xl text-white sm:text-3xl lg:text-5xl">
              Impact-driven projects that build Houston for better.
            </h3>
          </div>
          <div>
            <Link href="/roof-replacement">
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
        </div>
      </section>
      <section id="team" className=" flex flex-col md:flex-row h-screen">
        <div
          id="div1"
          className=" shadow-inner-before hover:shadow-inner-after bg-cover bg-center bg-green-500 justify-end flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 items-start text-left"
        >
          <div>
            <h2 className=" text-gray-300 text-2xl sm:text-3xl lg:text-5xl">
              Gutter Repair & Installment
            </h2>
            <h3 className="text-2xl text-white sm:text-3xl lg:text-5xl">
              We work together to make great things happen.
            </h3>
          </div>
          <Link href="/gutter-repair">
            <Button className=" text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
              LEARN MORE{" "}
              <Image
                src="/images/arrow-up-right.svg"
                alt="arrow"
                width={24}
                height={24}
              />
            </Button>
          </Link>
        </div>
      </section>
      <Separator className=" bg-SunsetOrange p-1"></Separator>

      <CarouselPlugin></CarouselPlugin>

      <section
        id="contact"
        className="flex flex-col gap-8 p-6 sm:p-10 lg:p-20 items-center"
      >
        <div className=" flex flex-col gap-8 bg-cloudyGray p-6 sm:p-10 lg:p-20 items-center text-center">
          <h2 className=" text-4xl sm:text-5xl lg:text-6xl underline">
            Get In Touch
          </h2>
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
