"use client";

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

import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";

const MyDrawer = () => {
  return (
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
        <nav className=" flex flex-col p-6 gap-6">
          <Link href="/" className="text-lg sm:text-xl text-WayneBlack">
            HOME
          </Link>
          <Link href="/about" className="text-lg sm:text-xl text-WayneBlack">
            ABOUT US
          </Link>
          <Link href="/services" className="text-lg sm:text-xl text-WayneBlack">
            SERVICES
          </Link>
          <Link href="/team" className="text-lg sm:text-xl text-WayneBlack">
            OUR TEAM
          </Link>
          <Link href="/contact" className="text-lg sm:text-xl text-WayneBlack">
            CONTACT US
          </Link>
        </nav>
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
              <h3 className="text-white text-sm sm:text-base">
                A TEXAS COMPANY
              </h3>
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

              <Link href="/">
                <Image
                  src="/images/linkedin.svg"
                  alt="linkedin"
                  width={24}
                  height={24}
                />
              </Link>
              <a
                href="mailto:dsalazar@lpexteriors.com"
                className=" hover:underline"
              >
                <Image
                  src="/images/envelope.svg"
                  alt="envelope"
                  width={24}
                  height={24}
                />
              </a>
            </nav>
          </div>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MyDrawer;
