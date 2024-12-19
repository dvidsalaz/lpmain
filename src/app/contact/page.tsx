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
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import { MyForm } from "@/components/custom/MyForm";

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
      <section className="flex flex-col gap-20 p-6 sm:p-10 lg:p-20 bg-fixed bg-cover bg-center h-screen">
        <video
          className=" lg:visible absolute top-0 left-0 w-full h-full object-cover -z-10"
          autoPlay
          muted
          loop
        >
          <source src="/videos/testing.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <nav className=" sticky top-0 z-50 flex items-center justify-between">
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
            <Link href="/" className="text-lg sm:text-xl text-white">
              HOME
            </Link>
            <NavigationMenu>
              <NavigationMenuItem>
                <NavigationMenuTrigger className=" hover:bg-transparent p-0 text-lg sm:text-xl bg-transparent text-white">
                  COMPANY
                </NavigationMenuTrigger>
                <NavigationMenuContent className=" flex flex-col gap-4 p-6">
                  <Link href="/expertise">EXPERTISE</Link>
                  <Link href="/careers">CAREERS</Link>
                  <Link href="/media">MEDIA</Link>
                  <Link href="/testimonials">TESTIMONIALS</Link>
                  <Link href="/finished-projects">FINISHED PROJECTS</Link>
                  <Link href="/under-construction">UNDER CONSTRUCTION</Link>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenu>
            <Link href="#portfolio" className="text-lg sm:text-xl text-white">
              PORTFOLIO
            </Link>
            <Link href="/team" className="text-lg sm:text-xl text-white">
              OUR TEAM
            </Link>
            <Link href="#contact" className="text-lg sm:text-xl text-white">
              CONTACT US
            </Link>
          </div>
          <Drawer>
            <DrawerTrigger className=" sm:hidden bg-transparent" asChild>
              <Image
                src="/images/align-justify.svg"
                alt="Menu"
                width={56}
                height={56}
              />
            </DrawerTrigger>
            <DrawerContent className=" border-none">
              <DrawerDescription>
                <nav className=" flex flex-col p-6 gap-6">
                  <Link href="/" className="text-lg sm:text-xl text-WayneBlack">
                    HOME
                  </Link>
                  <Link
                    href="#company"
                    className="text-lg sm:text-xl text-WayneBlack"
                  >
                    COMPANY
                  </Link>
                  <Link
                    href="#portfolio"
                    className="text-lg sm:text-xl text-WayneBlack"
                  >
                    PORTFOLIO
                  </Link>
                  <Link
                    href="/team"
                    className="text-lg sm:text-xl text-WayneBlack"
                  >
                    OUR TEAM
                  </Link>
                  <Link
                    href="/contact"
                    className="text-lg sm:text-xl text-WayneBlack"
                  >
                    CONTACT US
                  </Link>
                </nav>
              </DrawerDescription>
              <DrawerFooter className=" bg-WayneBlack p-10">
                <div className=" flex flex-col justify-center items-center">
                  <Image
                    src="/images/lp_logo(2).svg"
                    alt="LP Construction Logo"
                    width={80}
                    height={80}
                    className="object-contain"
                  />
                  <div className=" flex items-center gap-1">
                    <Image
                      src="/images/texasflag.png"
                      alt="Texas Flag"
                      width={25}
                      height={17}
                    />
                    <p className="text-white text-sm sm:text-base">
                      A TEXAS COMPANY
                    </p>
                  </div>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </nav>
        <div className=" text-6xl sm:text-8xl lg:text-9xl text-white font-bold">
          <h1>CONTACT US</h1>
        </div>
        <p className=" text-lg sm:text-xl lg:text-2xl font-light text-white">
          SETTING THE NEW STANDARD FOR ROOFING
        </p>
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
          <p className="text-white text-sm sm:text-base">A TEXAS COMPANY</p>
        </div>
        <div className=" flex flex-col lg:flex-row items-center gap-8 justify-between w-full ">
          <nav className="text-white flex gap-4 items-center text-sm sm:text-base lg:text-lg">
            <Link className=" hover:text-gray-300" href="/team">
              Our Team
            </Link>
            <Link className=" hover:text-gray-300" href="/services">
              Our Services
            </Link>
            <Link className=" hover:text-gray-300" href="/portfolio">
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
