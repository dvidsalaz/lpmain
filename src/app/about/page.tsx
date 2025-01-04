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

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Separator } from "@/components/ui/separator";
import MyDrawer from "@/components/custom/myDrawer";

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
      <section className="flex flex-col h-screen bg-slate-400">
        <div className="flex-grow flex flex-col gap-20 p-6 sm:p-10 lg:p-20">
          <nav className="sticky top-0 z-50 flex items-center justify-between">
            <Link href="/">
              <Image
                src="/images/lp_logo(2).svg"
                alt="LP Construction Logo"
                width={120}
                height={120}
                className=" object-contain"
              />
            </Link>
            <div className=" hidden sm:flex gap-6">
              <Link
                href="/"
                className="text-lg sm:text-xl text-white hover:text-SunsetOrange"
              >
                HOME
              </Link>
              <NavigationMenu>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className=" hover:bg-transparent p-0 text-lg sm:text-xl bg-transparent text-white">
                    COMPANY
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className=" flex flex-col gap-4 p-6">
                    <Link
                      className="hover:underline hover:decoration-SunsetOrange"
                      href="/about"
                    >
                      ABOUT US
                    </Link>
                    <Link
                      className="hover:underline hover:decoration-SunsetOrange"
                      href="/expertise"
                    >
                      EXPERTISE
                    </Link>
                    <Link
                      className="hover:underline hover:decoration-SunsetOrange"
                      href="/testimonials"
                    >
                      TESTIMONIALS
                    </Link>
                    <Link
                      className="hover:underline hover:decoration-SunsetOrange"
                      href="/finished-projects"
                    >
                      FINISHED PROJECTS
                    </Link>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenu>
              <Link
                href="/services"
                className="text-lg sm:text-xl text-white hover:text-SunsetOrange"
              >
                SERVICES
              </Link>
              <Link
                href="/team"
                className="text-lg sm:text-xl text-white hover:text-SunsetOrange"
              >
                OUR TEAM
              </Link>
              <Link
                href="/contact"
                className="text-lg sm:text-xl text-white hover:text-SunsetOrange"
              >
                CONTACT US
              </Link>
            </div>
            <MyDrawer></MyDrawer>
          </nav>
          <div className=" text-6xl sm:text-8xl lg:text-9xl text-white font-bold">
            <h1>ABOUT US</h1>
          </div>
          <p className=" text-lg sm:text-xl lg:text-2xl font-light text-white">
            SETTING THE NEW STANDARD FOR ROOFING
          </p>
        </div>
        <div
          id="socials"
          className=" bg-WayneBlack p-4 px-20 flex items-center gap-8 justify-end w-full"
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

            <Link href="/portfolio">
              <Image
                src="/images/linkedin.svg"
                alt="linkedin"
                width={32}
                height={32}
                className=" border-2"
              />
            </Link>
            <Link href="/portfolio">
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
      <section
        id="member"
        className=" flex flex-col md:flex-row gap-8 p-6 sm:p-10 lg:p-20"
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
              <Button className=" text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-slate-400 rounded-none">
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

      <footer className="flex flex-col gap-8 bg-WayneBlack p-6 sm:p-10 lg:p-20 items-center text-center">
        <Link href="#main-section">
          <Image
            src="/images/lp_logo(2).svg"
            alt="LP Construction Logo"
            width={144}
            height={144}
            className="object-contain"
          />
        </Link>
        <div className="flex items-center gap-2">
          <Image
            src="/images/texasflag.png"
            alt="Texas Flag"
            width={50}
            height={33}
          />
          <h3 className="text-white text-sm sm:text-base">A TEXAS COMPANY</h3>
        </div>
        <div className=" flex flex-col lg:flex-row items-center gap-8 justify-between w-full ">
          <nav className="text-white flex gap-4 items-center text-sm sm:text-base lg:text-lg">
            <Link className=" hover:text-gray-300 hover:underline" href="/team">
              Our Team
            </Link>
            <Link
              className=" hover:text-gray-300 hover:underline"
              href="/services"
            >
              Our Services
            </Link>
            <Link
              className=" hover:text-gray-300 hover:underline"
              href="/portfolio"
            >
              Our Portfolio
            </Link>
          </nav>
          <div>
            <p className="text-white text-sm sm:text-base lg:text-lg text-center">
              Copyright &copy; 2024 LP Exteriors LLC. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
