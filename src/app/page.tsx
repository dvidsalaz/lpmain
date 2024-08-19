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
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function Home() {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className="min-h-screen">
        <main className="">
          {/* Notification Bar */}
          <div className="bg-SunsetOrange text-white text-center p-2 sm:p-4">
            <div className=" flex justify-end items-center gap-4 text-sm sm:text-base lg:text-lg">
              <div>
                <p className="text-sm sm:text-base lg:text-lg">
                  info@lpexteriors.com
                </p>
                <a
                  href="tel:+18324686980"
                  className="text-sm sm:text-base lg:text-lg"
                >
                  +1 (832) 468-6980
                </a>
              </div>
              <p className="text-sm sm:text-base lg:text-lg"></p>
            </div>
          </div>
          {/* Main Content */}
          <section
            id="main-section"
            className="flex flex-col gap-8 p-6 sm:p-10 lg:p-20 bg-slate-400 min-h-screen"
          >
            <nav className=" sticky top-0 z-50 flex items-center justify-between p-4">
              <Link href="#main-section">
                <Image
                  src="/images/lp_logo(2).svg"
                  alt="LP Construction Logo"
                  width={144}
                  height={144}
                  className=" object-contain"
                />
              </Link>
              <div className=" ">
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          HOME
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </nav>
            <div className=" text-6xl sm:text-8xl lg:text-9xl text-white font-bold">
              <h1 className=" ${oswald.variable}">LP</h1>
              <h1>DELIVERS</h1>
              <h1>RESULTS</h1>
            </div>
            <p className=" font- text-lg sm:text-xl lg:text-2xl font-light">
              SETTING THE NEW STANDARD FOR HOME CONSTRUCTION
            </p>
          </section>
          <section
            id="our-mission"
            className=" flex flex-col gap-8 p-6 sm:p-10 lg:p-20 items-center text-center"
          >
            <h2 className=" p-4 text-4xl sm:text-5xl lg:text-6xl text-devilRed underline">
              Our Mission
            </h2>
            <p className=" text-base sm:text-lg lg:text-xl p-4">
              LP Construction operates with intention. We strive to deliver the
              highest standard of service while fostering a positive influence
              that will resonate for years to come.
            </p>
          </section>
          <section
            id="projects"
            className="flex flex-col md:flex-row gap-8 p-6 sm:p-10 lg:p-20 items-center bg-cloudyGray"
          >
            <div className=" gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow">
              <div>
                <h2 className="text-gray-300 text-2xl sm:text-3xl lg:text-5xl">
                  Top Projects
                </h2>
                <h1 className="text-2xl text-WayneBlack sm:text-3xl lg:text-5xl">
                  Bayshoes Traditional
                </h1>
              </div>
              <p className="text-WayneBlack text-base sm:text-lg lg:text-xl">
                Massa nunc nisi fames adipiscing scelerisque placerat et
                sagittis cursus. Mi commodo id maecenas amet, elementum a, in.
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
                      VIEW OUR WORK
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
          <section className="flex flex-col gap-8 p-6 sm:p-10 lg:p-20 items-center">
            <div className=" flex flex-col gap-8 bg-cloudyGray p-6 sm:p-10 lg:p-20 items-center text-center">
              <h1 className=" text-4xl sm:text-5xl lg:text-6xl underline">
                Get In Touch
              </h1>
              <p className=" text-base sm:text-lg lg:text-xl text-gray-400">
                Egestas fringilla aliquam leo, habitasse arcu varius lorem elit.
                Neque pellentesque donec et tellus ac varius tortor, bibendum.
                Nulla felis ac turpis at amet. Purus malesuada placerat arcu at
                enim elit in accumsan.
              </p>
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
            </div>
          </section>
          <footer className="flex flex-col gap-8 bg-WayneBlack p-6 sm:p-10 lg:p-20 items-center text-center">
            <Image
              src="/images/lp_logo(2).svg"
              alt="LP Construction Logo"
              width={144}
              height={144}
              className="object-contain"
            />
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
                <Link href="/Values">Our Company</Link>
                <Link href="/Services">Our Services</Link>
                <Link href="/Projects">Our Projects</Link>
              </nav>
              <div>
                <p className="text-white text-sm sm:text-base lg:text-lg text-center">
                  Copyright &copy; 2024 LP Exteriors LLC. All rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </main>
      </body>
    </html>
  );
}
