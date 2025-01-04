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
import { MyForm } from "@/components/custom/MyForm";
import { Separator } from "@/components/ui/separator";
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
              <a
                href="mailto:dsalazar@lpexteriors.com"
                className=" hover:underline"
              >
                dsalazar@lpexteriors.com
              </a>
            </p>
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
            <Link
              href="#home"
              className="text-lg sm:text-xl text-white hover:text-SunsetOrange "
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
              href="/portfolio"
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
                    href="/about"
                    className="text-lg sm:text-xl text-WayneBlack"
                  >
                    ABOUT US
                  </Link>
                  <Link
                    href="/services"
                    className="text-lg sm:text-xl text-WayneBlack"
                  >
                    SERVICES
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
              <Separator className=" bg-SunsetOrange p-1"></Separator>
              <DrawerFooter className=" bg-WayneBlack p-10">
                <div className=" flex flex-col gap-2 justify-center items-center">
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
                  <Separator></Separator>

                  <nav className=" flex gap-4 items-center justify-items-end">
                    <Link href="/team">
                      <Image
                        src="/images/facebook.svg"
                        alt="facebook"
                        width={24}
                        height={24}
                      />
                    </Link>

                    <Link href="/portfolio">
                      <Image
                        src="/images/linkedin.svg"
                        alt="linkedin"
                        width={24}
                        height={24}
                      />
                    </Link>
                    <Link href="/portfolio">
                      <Image
                        src="/images/envelope.svg"
                        alt="envelope"
                        width={24}
                        height={24}
                      />
                    </Link>
                  </nav>
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
        id="process"
        className="flex flex-col gap-8 p-6 sm:p-10 lg:p-20 items-center"
      >
        <h2
          id="top"
          className="text-4xl sm:text-5xl lg:text-6xl text-WayneBlack underline"
        >
          The Process
        </h2>
        <div className="flex flex-wrap justify-between gap-4">
          <div
            id="container"
            className="flex flex-col bg-cloudyGray flex-1 shadow-lg hover:shadow-xl"
          >
            <Link href="/team">
              <div className=" relative w-full h-96 overflow-hidden">
                <Image
                  src="/images/IMG_5501.jpeg"
                  alt="A flexible image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div
                id="text-space"
                className="flex flex-col items-center justify-center text-center gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-WayneBlack underline">
                  VERIFY DAMAGE
                </h3>
                <p className=" flex-1">
                  Schedule a free in-person inspection with us. Our experts will
                  assess your property and provide a recommendation on whether
                  to proceed with the claims process.
                </p>
                <Link href="/team">
                  <Button className="text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                    LEARN MORE
                  </Button>
                </Link>
              </div>
            </Link>
          </div>
          <div
            id="container"
            className="flex flex-col bg-cloudyGray flex-1 shadow-lg hover:shadow-xl"
          >
            <Link href="/team">
              <div className=" relative w-full h-96 overflow-hidden">
                <Image
                  src="/images/insurance.jpg"
                  alt="A flexible image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div
                id="text-space"
                className="flex flex-col items-center justify-center text-center gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-WayneBlack underline">
                  FILE A CLAIM
                </h3>
                <p className=" flex-1">
                  Filing a claim is simple and takes only a few minutes. We
                  guide you through the process, ensuring the insurance company
                  is informed of our collaboration and your claim details.
                </p>
                <Link href="/team">
                  <Button className="text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                    LEARN MORE
                  </Button>
                </Link>
              </div>
            </Link>
          </div>
          <div
            id="container"
            className="flex flex-col bg-cloudyGray flex-1 shadow-lg hover:shadow-xl"
          >
            <Link href="/team">
              <div className=" relative w-full h-96 overflow-hidden">
                <Image
                  src="/images/adjuster.png"
                  alt="A flexible image"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div
                id="text-space"
                className="flex flex-col items-center justify-center text-center gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
              >
                <h3 className="text-xl sm:text-2xl lg:text-3xl text-WayneBlack underline">
                  SCHEDULE THE ADJUSTMENT
                </h3>
                <p className=" flex-1">
                  An insurance adjuster will visit your property to assess the
                  damage. Our presence ensures that all issues are addressed and
                  nothing critical is overlooked.
                </p>
                <Link href="/team">
                  <Button className="text-base sm:text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                    LEARN MORE
                  </Button>
                </Link>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <Separator className=" bg-SunsetOrange p-1"></Separator>
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
          <Link href="/team">
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
      <Separator className=" bg-SunsetOrange p-1"></Separator>
      <footer className="flex flex-col bg-none">
        <div className="flex flex-col bg-WayneBlack gap-10 p-6 sm:p-10 lg:p-20">
          <div id="logo" className="flex flex-col gap-2 items-center">
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
          </div>
          <Separator></Separator>
          <div className="flex flex-col sm:flex-row items-center gap-8 justify-center sm:justify-between w-full">
            <nav className=" flex gap-4 items-center justify-items-end">
              <Link href="/team">
                <Image
                  src="/images/facebook.svg"
                  alt="facebook"
                  width={32}
                  height={32}
                />
              </Link>

              <Link href="/portfolio">
                <Image
                  src="/images/linkedin.svg"
                  alt="linkedin"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href="/portfolio">
                <Image
                  src="/images/envelope.svg"
                  alt="envelope"
                  width={32}
                  height={32}
                />
              </Link>
            </nav>
            <p className="text-white text-sm sm:text-base lg:text-lg text-center">
              Copyright &copy; 2025 LP Exteriors LLC. All rights reserved.
            </p>
          </div>
        </div>

        <Accordion type="single" collapsible className=" w-full bg-bottomGray">
          {/* Quick Links */}
          <AccordionItem value="item-1" className=" p-6">
            <AccordionTrigger className=" text-white text-2xl">
              QUICK LINKS
            </AccordionTrigger>
            <AccordionContent className=" flex flex-col gap-2 text-white text-lg text-left">
              <Link
                href="/"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                HOME
              </Link>
              <Link
                href="/about"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                ABOUT US
              </Link>
              <Link
                href="/expertise"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                EXPERTISE
              </Link>
              <Link
                href="/services"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                SERVICES
              </Link>
              <Link
                href="/team"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                OUR TEAM
              </Link>
              <Link
                href="/contact"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                CONTACT US
              </Link>
            </AccordionContent>
          </AccordionItem>
          {/* Services */}
          <AccordionItem value="item-2" className=" p-6">
            <AccordionTrigger className=" text-white text-2xl">
              SERVICES
            </AccordionTrigger>
            <AccordionContent className=" flex flex-col gap-2 text-white text-lg text-left">
              <Link
                href="/services"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                &middot; ROOFING
              </Link>
              <Link
                href="/services"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                &middot; SIDING
              </Link>
              <Link
                href="/services"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                &middot; GUTTER INSTALLATION
              </Link>
              <Link
                href="/services"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                &middot; STORM DAMAGE REPAIR
              </Link>
            </AccordionContent>
          </AccordionItem>
          {/* LEARN MORE */}
          <AccordionItem value="item-3" className=" p-6">
            <AccordionTrigger className=" text-white text-2xl">
              LEARN MORE
            </AccordionTrigger>
            <AccordionContent className=" flex flex-col gap-2 text-white text-lg text-left">
              <Link
                href="/questions"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                &middot; FAQs
              </Link>
              <Link
                href="/team"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                &middot; Insurance Process
              </Link>
              <Link
                href="/team"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                &middot; Maintenance Tips
              </Link>
              <Link
                href="/team"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                &middot; Project Timelines
              </Link>
            </AccordionContent>
          </AccordionItem>
          {/* LEGAL */}
          <AccordionItem value="item-4" className=" p-6">
            <AccordionTrigger className=" text-white text-2xl">
              LEGAL
            </AccordionTrigger>
            <AccordionContent className=" flex flex-col gap-2 text-white text-lg text-left">
              <Link
                href="/legal"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                &middot; Privacy Policy
              </Link>
              <Link
                href="/legal"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                &middot; Terms of Service
              </Link>
              <Link
                href="/legal"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                &middot; Licensing Information
              </Link>
              <Link
                href="/legal"
                className=" hover:underline hover:decoration-SunsetOrange"
              >
                &middot; Insurance Certificates
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </footer>
    </main>
  );
}
