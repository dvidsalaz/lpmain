import Image from "next/image";
import Link from "next/link";
import { Separator } from "../ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const MyFooter = () => {
  return (
    <footer className="flex flex-col bg-none">
      <Separator className=" bg-SunsetOrange p-1"></Separator>
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
            <h3 className="text-white text-sm sm:text-base">A TEXAS COMPANY</h3>
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

            <Link href="/">
              <Image
                src="/images/linkedin.svg"
                alt="linkedin"
                width={32}
                height={32}
              />
            </Link>
            <a href="mailto:dsalazar@lpexteriors.com">
              <Image
                src="/images/envelope.svg"
                alt="envelope"
                width={32}
                height={32}
              />
            </a>
          </nav>
          <p className="text-white text-base lg:text-lg text-center">
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
              href="/drone-inspection"
              className=" hover:underline hover:decoration-SunsetOrange"
            >
              &middot; DRONE INSPECTION SERVICES
            </Link>
            <Link
              href="/storm-damage"
              className=" hover:underline hover:decoration-SunsetOrange"
            >
              &middot; STORM DAMAGE REPAIR
            </Link>
            <Link
              href="/roof-leaks"
              className=" hover:underline hover:decoration-SunsetOrange"
            >
              &middot; ROOF LEAKS
            </Link>
            <Link
              href="/shingle-replacement"
              className=" hover:underline hover:decoration-SunsetOrange"
            >
              &middot; SHINGLE REPLACEMENT
            </Link>
            <Link
              href="/roof-replacement"
              className=" hover:underline hover:decoration-SunsetOrange"
            >
              &middot; ROOF REPLACEMENT
            </Link>
            <Link
              href="/gutter-repair"
              className=" hover:underline hover:decoration-SunsetOrange"
            >
              &middot; GUTTER REAPIR & INSTALLATION
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
              href="/learn"
              className=" hover:underline hover:decoration-SunsetOrange"
            >
              &middot; FAQs
            </Link>
            <Link
              href="/learn"
              className=" hover:underline hover:decoration-SunsetOrange"
            >
              &middot; Insurance Process
            </Link>
            <Link
              href="/learn"
              className=" hover:underline hover:decoration-SunsetOrange"
            >
              &middot; Maintenance Tips
            </Link>
            <Link
              href="/learn"
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
              href="/privacy-policy"
              className=" hover:underline hover:decoration-SunsetOrange"
            >
              &middot; Privacy Policy
            </Link>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </footer>
  );
};

export default MyFooter;
