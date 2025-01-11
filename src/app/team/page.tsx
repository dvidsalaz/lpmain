import Link from "next/link";
import Image from "next/image";
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
import MyDrawer from "@/components/custom/myDrawer";
import MyNavigationBar from "@/components/custom/MyNavigation";
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
      <section className="flex flex-col gap-8 p-6 bg-slate-400 sm:p-10 lg:p-20 bg-fixed bg-cover bg-center h-screen">
        <video
          className=" lg:visible absolute top-0 left-0 w-full h-full object-cover -z-10 pointer-events-none"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <MyNavigationBar></MyNavigationBar>
        <div className=" text-6xl sm:text-8xl lg:text-9xl text-white font-bold">
          <h1>MEET</h1>
          <h1>OUR</h1>
          <h1>TEAM</h1>
        </div>
        <p className=" text-lg sm:text-xl lg:text-2xl font-light text-white">
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
        id="our-mission"
        className=" bg-cloudyGray flex flex-col gap-8 p-6 sm:p-10 lg:p-20 items-center text-center"
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
        id="member"
        className=" bg-white flex flex-col md:flex-row gap-8 p-6 sm:p-10 lg:p-20"
      >
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
        <div
          id="div1"
          className=" flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow items-center text-center md:text-left md:items-start"
        >
          <div>
            <h2 className=" text-WayneBlack text-2xl sm:text-3xl lg:text-5xl">
              David Salazar
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
      <section
        id="contact"
        className=" bg-white flex flex-col gap-8 p-6 sm:p-10 lg:p-20 items-center"
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
      <MyFooter></MyFooter>
    </main>
  );
}
