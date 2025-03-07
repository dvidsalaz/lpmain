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
import MyBanner from "@/components/custom/myBanner";

export default function Team() {
  return (
    <main className=" min-h-screen">
      {/* Notification Bar */}
      <MyBanner></MyBanner>
      <section className="flex flex-col h-screen bg-slate-400">
        <div className="flex-grow flex flex-col gap-20 p-6 sm:p-10 lg:p-20">
          <MyNavigationBar></MyNavigationBar>
          <h1 className="text-6xl sm:text-8xl lg:text-9xl text-white font-bold motion-opacity-in-0 motion-translate-y-in-100 motion-delay-100">
            ROOF LEAKS
          </h1>
          <h3 className=" text-lg sm:text-xl lg:text-2xl font-light text-white motion-opacity-in-0 motion-translate-x-in-100 motion-delay-500">
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
        className=" bg-cloudyGray flex flex-col gap-8 p-6 sm:p-10 lg:p-20"
      >
        <div
          id="div1"
          className=" flex-1 gap-8 flex flex-col p-6 bg-white sm:p-10 lg:p-20 shadow-lg items-center text-center border-b-8 border-WayneBlack"
        >
          <div>
            <h2 className=" text-WayneBlack text-2xl lg:text-5xl">
              Common Roof Repair Issues
            </h2>
            <h3 className=" text-gray-300 text-xl lg:text-4xl">
              Effective Date: January 15, 2025
            </h3>
          </div>
          <p className="text-xl font-oswald">
            Leaks, Missing or Damaged Shingles, Ponding Water, Flashing Damage,
            Gutter Issues, Ventilation Problems, Ice Dams, Cracked or Worn
            Sealant, Structural Damage, Roof Vent Issues, Granule Loss on
            Shingles, Roof Rot, Skylight Leaks, Chimney Issues, and More.
          </p>
          <div className=" flex flex-col lg:flex-row gap-6 ">
            <Link href="/services">
              <Button className="text-lg lg:text-xl gap-2 text-white p-6 bg-SunsetOrange rounded-none">
                REQUEST FREE INSPECTION
                <Image
                  src="/images/arrow-up-right.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                className=" text-lg sm:text-xl lg:text-xl gap-2 text-devilRed p-6 bg-transparent border-devilRed rounded-none border-2 "
                variant={"outline"}
              >
                832-468-6980
                <Image
                  src="/images/arrow-right.svg"
                  alt="arrow"
                  width={24}
                  height={24}
                />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <section
        id="process"
        className="flex flex-col gap-8 p-6 py-4 sm:p-10 sm:py-4 lg:px-20 bg-cloudyGray"
      >
        <div className=" flex flex-col lg:flex-row gap-4 ">
          <div
            id="container"
            className="flex flex-col bg-white w-full shadow-lg hover:shadow-xl"
          >
            <div className=" relative w-full h-96 overflow-hidden">
              <Image
                src="/images/inspection2.svg"
                alt="A flexible image"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div
              id="text-space"
              className="flex flex-col gap-5 p-3 sm:p-5 lg:p-10 md:h-[350px] lg:h-[350px]"
            >
              <h3 className="text-2xl lg:text-3xl text-WayneBlack ">
                1. Roof Leaks
              </h3>
              <div className=" flex flex-col gap-1">
                <p className="text-lg">
                  &middot;{" "}
                  <span className=" font-bold">
                    Thorough Roof Inspections:{" "}
                  </span>{" "}
                  First we identify damage such as missing shingles, leaks, or
                  structural issues.
                </p>
                <p className="text-lg">
                  &middot;{" "}
                  <span className=" font-bold">Aerial Inspections:</span> Our
                  drone certified experts use drones to assess hard-to-reach
                  areas.
                </p>
                <p className="text-lg">
                  &middot;{" "}
                  <span className=" font-bold">Interior Inspections:</span> We
                  check for water leaks, mold, and structural damage inside the
                  home.
                </p>
                <p className="text-lg">
                  &middot;{" "}
                  <span className=" font-bold">
                    Insurance Claim Assessments:
                  </span>{" "}
                  Provide detailed reports for insurance claims, including
                  photographs and damage estimates.
                </p>
              </div>
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>
          </div>
          <div
            id="container"
            className="flex flex-col bg-white w-full shadow-lg hover:shadow-xl"
          >
            <div className=" relative w-full h-96 overflow-hidden">
              <Image
                src="/images/tarp.svg"
                alt="A flexible image"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div
              id="text-space"
              className="flex flex-col gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
            >
              <h3 className="text-2xl lg:text-3xl text-WayneBlack ">
                2. Missing or Damaged Shingles
              </h3>
              <div className=" flex flex-col gap-1">
                <p className="text-lg">
                  &middot;{" "}
                  <span className=" font-bold">Emergency Tarping:</span> Protect
                  exposed areas of the roof or structure from further damage.
                </p>
                <p className="text-lg">
                  &middot;{" "}
                  <span className=" font-bold">Board-Up Services:</span> Secure
                  windows, doors, or other damaged areas to prevent further
                  intrusion or weather exposure.
                </p>
              </div>
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>
          </div>
        </div>
      </section>
      <section
        id="process"
        className="flex flex-col gap-8 p-6 sm:p-10 sm:py-0 lg:px-20 py-0 bg-cloudyGray"
      >
        <div className=" flex flex-col lg:flex-row gap-4 ">
          <div
            id="container"
            className="flex flex-col bg-white w-full shadow-lg hover:shadow-xl "
          >
            <div className=" relative w-full h-96 overflow-hidden">
              <Image
                src="/images/repair_roof.svg"
                alt="A flexible image"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div
              id="text-space"
              className="flex flex-col gap-5 p-3 sm:p-5 lg:p-10 lg:h-[350px]"
            >
              <h3 className="text-2xl lg:text-3xl text-WayneBlack ">
                3. Ponding Water
              </h3>
              <div className=" flex flex-col gap-1">
                <p className="text-lg">
                  &middot; <span className=" font-bold">Roof Repairs:</span> Fix
                  minor and moderate roof damage, including replacing shingles,
                  tiles, or panels.
                </p>
                <p className="text-lg">
                  &middot;{" "}
                  <span className=" font-bold">Structural Repairs:</span>Address
                  any damage to walls, ceilings, or frameworks caused by storms.
                </p>
                <p className="text-lg">
                  &middot;{" "}
                  <span className=" font-bold">
                    Siding and Exterior Repairs:
                  </span>{" "}
                  Fix damaged siding, gutters, and downspouts.
                </p>
              </div>
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>
          </div>
          <div
            id="container"
            className="flex flex-col bg-white w-full shadow-lg hover:shadow-xl"
          >
            <div className=" relative w-full h-96 overflow-hidden">
              <Image
                src="/images/tree_removal.svg"
                alt="A flexible image"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div
              id="text-space"
              className="flex flex-col gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
            >
              <h3 className="text-2xl lg:text-3xl text-WayneBlack ">
                4. Debris Removal
              </h3>
              <div className=" flex flex-col gap-1">
                <p className="text-lg">
                  &middot;{" "}
                  <span className=" font-bold">Storm Debris Cleanup:</span>{" "}
                  Remove fallen trees, branches, and other debris from the
                  property.
                </p>
                <p className="text-lg">
                  &middot;{" "}
                  <span className=" font-bold">Disposal Services:</span>{" "}
                  Properly dispose of hazardous materials or debris.
                </p>
              </div>
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>
          </div>
        </div>
      </section>
      <section
        id="process"
        className="flex flex-col gap-8 p-6 py-4 sm:p-10 sm:py-4 lg:px-20 bg-cloudyGray"
      >
        <div className=" flex flex-col lg:flex-row gap-4 ">
          <div
            id="container"
            className="flex flex-col bg-white w-full shadow-lg hover:shadow-xl "
          >
            <div className=" relative w-full h-96 overflow-hidden">
              <Image
                src="/images/gutter_cleaning2.svg"
                alt="A flexible image"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div
              id="text-space"
              className="flex flex-col gap-5 p-3 sm:p-5 lg:p-10 lg:h-[350px]"
            >
              <h3 className="text-2xl lg:text-3xl text-WayneBlack ">
                5. Preventative Measures
              </h3>
              <div className=" flex flex-col gap-1">
                <p className="text-lg">
                  &middot;{" "}
                  <span className=" font-bold">Reinforcement Services:</span>{" "}
                  Strengthen roofs, windows, and doors to withstand future
                  storms.
                </p>
                <p className="text-lg">
                  &middot;{" "}
                  <span className=" font-bold">
                    Gutter Cleaning and Repairs:
                  </span>{" "}
                  Ensure proper drainage to prevent water pooling and further
                  damage.
                </p>
              </div>
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>
          </div>
          <div
            id="container"
            className="flex flex-col bg-white w-full shadow-lg hover:shadow-xl"
          >
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
              className="flex flex-col gap-5 p-3 sm:p-5 lg:p-10 h-[350px]"
            >
              <h3 className="text-2xl lg:text-3xl text-WayneBlack ">
                6. Assistance with Insurance Claims
              </h3>
              <div className=" flex flex-col gap-1">
                <p className="text-lg">
                  &middot;{" "}
                  <span className=" font-bold">Damage Documentation:</span>{" "}
                  Provide detailed assessments and estimates required for
                  insurance claims.
                </p>
                <p className="text-lg">
                  &middot;{" "}
                  <span className=" font-bold">Claim Submission Support:</span>{" "}
                  Help homeowners file and navigate their insurance claims.
                </p>
              </div>
            </div>
            <Separator className=" bg-SunsetOrange p-1"></Separator>
          </div>
        </div>
      </section>

      <CarouselPlugin></CarouselPlugin>

      <section
        id="contact"
        className="flex flex-col gap-8 p-6 sm:p-10 lg:p-20 items-center"
      >
        <div className=" flex flex-col gap-8 bg-cloudyGray p-6 sm:p-10 lg:p-20 items-center text-center">
          <h1 className=" text-4xl sm:text-5xl lg:text-6xl underline">
            Request a Free Inspection
          </h1>
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
