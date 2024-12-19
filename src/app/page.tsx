import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogClose,
} from "@/components/ui/dialog";

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
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  return (
    <main className=" min-h-screen">
      {/* Notification Bar */}
      <div className="bg-SunsetOrange text-white text-center p-2">
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
      {/* Main Content */}
      <section
        id="header"
        className="flex flex-col gap-8 p-6 sm:p-10 lg:p-20 bg-slate-400 min-h-screen"
      >
        <nav className=" sticky top-0 z-50 flex items-center justify-between">
          <Link href="#home">
            <Image
              src="/images/lp_logo(2).svg"
              alt="LP Construction Logo"
              width={120}
              height={120}
              className=" object-contain"
            />
          </Link>
          <div className=" hidden sm:flex gap-6">
            <Link href="#home" className="text-lg sm:text-xl text-white">
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
            <Link href="/portfolio" className="text-lg sm:text-xl text-white">
              PORTFOLIO
            </Link>
            <Link href="/team" className="text-lg sm:text-xl text-white">
              OUR TEAM
            </Link>
            <Link href="/contact" className="text-lg sm:text-xl text-white">
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
          <h1>LP</h1>
          <h1>DELIVERS</h1>
          <h1>RESULTS</h1>
        </div>
        <p className=" text-lg sm:text-xl lg:text-2xl font-light">
          SETTING THE NEW STANDARD FOR ROOFING
        </p>
      </section>
      <section
        id="our-mission"
        className=" flex flex-col gap-8 p-6 sm:p-10 lg:p-20 items-center text-center"
      >
        <h2 className=" p-4 text-4xl sm:text-5xl lg:text-6xl text-devilRed underline">
          Our Mission
        </h2>
        <p className=" text-lg sm:text-xl lg:text-2xl p-4">
          LP Construction operates with intention. We strive to deliver the
          highest standard of service while fostering a positive influence that
          will resonate for years to come.
        </p>
      </section>
      <section
        id="portfolio"
        className="flex flex-col md:flex-row gap-8 p-6 sm:p-10 lg:p-20 bg-cover md:bg-fixed bg-center h-screen bg-slate-4=00"
        style={{ backgroundImage: "url('/images/IMG_7164.jpg')" }}
      >
        <div className=" lg:p-20 items-center justify-center flex-1 flex w-full bg-none"></div>
        <div
          id="div1"
          className=" items-center justify-center flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow"
        >
          <div>
            <h2 className="text-gray-300 text-center text-2xl sm:text-3xl lg:text-5xl">
              Top Projects
            </h2>
            <h1 className="text-2xl text-center text-WayneBlack sm:text-3xl lg:text-5xl">
              Uvalde Residential Estate
            </h1>
          </div>
          <p className=" text-center text-WayneBlack text-base sm:text-lg lg:text-xl">
            Massa nunc nisi fames adipiscing scelerisque placerat et sagittis
            cursus. Mi commodo id maecenas amet, elementum a, in.
          </p>
          <div className="flex flex-col">
            <p className="text-WayneBlack text-base sm:text-lg lg:text-xl">
              4 Bed | 3 Bath | 2,500 Sqft
            </p>
            <p className="text-WayneBlack text-base sm:text-lg lg:text-xl">
              4 Bed | 3 Bath | 2,500 Sqft
            </p>
          </div>
          <div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className=" text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                  VIEW OUR PORTFOLIO
                </Button>
              </DialogTrigger>
              <DialogContent className=" w-full p-4 bg-transparent border-0">
                <AspectRatio ratio={16 / 9} className=" w-full">
                  <video
                    controls
                    className="w-full h-full object-cover"
                    style={{ maxHeight: "100%" }}
                  >
                    <source src="/videos/work-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </AspectRatio>
                <DialogClose />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
      <section
        id="team"
        className=" flex flex-col md:flex-row gap-8 p-6 sm:p-10 lg:p-20 "
      >
        <div
          id="div1"
          className=" flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow items-center text-center md:text-left md:items-start"
        >
          <div>
            <h2 className="text-gray-300 text-2xl sm:text-3xl lg:text-5xl">
              Meet Our Team
            </h2>
            <h1 className="text-2xl text-WayneBlack sm:text-3xl lg:text-5xl">
              Experienced Professionals
            </h1>
          </div>
          <p className="text-WayneBlack text-base sm:text-lg lg:text-xl">
            Our team is composed of skilled professionals dedicated to
            delivering exceptional results. With a wealth of experience and a
            passion for excellence, they bring a unique blend of expertise to
            every project.
          </p>
          <div className="flex flex-col">
            <p className="text-WayneBlack text-base sm:text-lg lg:text-xl">
              4 Bed | 3 Bath | 2,500 Sqft
            </p>
            <p className="text-WayneBlack text-base sm:text-lg lg:text-xl">
              4 Bed | 3 Bath | 2,500 Sqft
            </p>
          </div>
          <div>
            <Link href="/team">
              <Button className=" text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                MEET OUR TEAM
              </Button>
            </Link>
          </div>
        </div>
        <div className=" relative flex-1 flex items-center justify-center">
          <Image
            src="/images/IMG_7474.jpg"
            alt="Uvalde Residential Estate"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
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
          <p className=" text-base sm:text-lg lg:text-xl text-gray-400">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
            Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla
            felis ac turpis at amet. Purus malesuada placerat arcu at enim elit
            in accumsan.
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
      <footer className="">
        <div className="  flex flex-col gap-8 bg-WayneBlack items-center text-center p-10 md:p-20 lg:p-20">
          <Link href="#main-section">
            <Image
              src="/images/lp_logo(2).svg"
              alt="LP Construction Logo"
              height={144}
              width={144}
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
              <Link
                className=" hover:text-gray-300 hover:underline"
                href="/team"
              >
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
            <div className=" text-white">Test</div>
          </div>
        </div>
        <div className=" bg-darkGray text-cloudyGray md:hidden lg:hidden">
          <Accordion type="single" collapsible>
            <AccordionItem className=" text-xl p-4" value="item-1">
              <AccordionTrigger>Frequently Asked Questions</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className=" text-xl p-4" value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className=" text-xl p-4" value="item-3">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem className=" text-xl p-4" value="item-4">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </footer>
    </main>
  );
}
