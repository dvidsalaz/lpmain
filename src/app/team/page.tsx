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
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Team() {
  return (
    <main className=" min-h-screen">
      {/* Notification Bar */}
      <div className=" bg-WayneBlack text-white text-center p-2">
        <div className=" flex justify-end items-center gap-4 text-sm sm:text-base lg:text-lg">
          <div className=" flex gap-4">
            <p className="text-sm sm:text-base lg:text-lg">
              info@lpexteriors.com
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
      <section className="flex flex-col gap-8 p-6 sm:p-10 lg:p-20 bg-fixed bg-cover bg-center h-screen">
        <video
            className=" absolute top-0 left-0 w-full h-full object-cover -z-10"
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
          <Sheet>
            <SheetTrigger className=" sm:hidden bg-transparent" asChild>
              <Image
                src="/images/align-justify.svg"
                alt="Menu"
                width={32}
                height={32}
              />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <SheetDescription>
                <nav className=" flex flex-col gap-6">
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
                    href="#contact"
                    className="text-lg sm:text-xl text-WayneBlack"
                  >
                    CONTACT US
                  </Link>
                </nav>
              </SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
        <div className=" text-6xl sm:text-8xl lg:text-9xl text-white font-bold">
          <h1>MEET</h1>
          <h1>OUR</h1>
          <h1>TEAM</h1>
        </div>
        <p className=" text-lg sm:text-xl lg:text-2xl font-light text-white">
          SETTING THE NEW STANDARD FOR HOME CONSTRUCTION
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
        <div className=" relative flex-1 flex items-center justify-center">
          <Image
            src="/images/IMG_1684.jpg"
            alt="founderpicture"
            layout="fill"
            objectFit="cover"
            className="absolute inset-0"
          />
        </div>
      </section>
      <section
        id="portfolio"
        className="flex flex-col md:flex-row gap-8 p-6 sm:p-10 lg:p-20 bg-fixed bg-cover bg-center h-screen bg-slate-400"
        style={{ backgroundImage: "url('/images/IMG_7164.jpg')" }}
      >
        <div className=" lg:p-20 items-center justify-center flex-1 flex w-full bg-none"></div>
        <div
          id="div1"
          className=" items-center justify-center flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow"
        >
          <div>
            <h2 className="text-gray-300 text-center text-2xl sm:text-3xl lg:text-5xl">
              Build With Us
            </h2>
            <h1 className="text-2xl text-center text-WayneBlack sm:text-3xl lg:text-5xl">
              Uvalde Residential Estate
            </h1>
          </div>
          <p className=" text-center text-WayneBlack text-base sm:text-lg lg:text-xl">
            We are looking forward to learning more about your project. Please
            click on the button below to visit our contact page.
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
                  CONTACT US
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
