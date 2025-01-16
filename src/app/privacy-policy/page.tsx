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

export default function Privacy() {
  return (
    <main className=" min-h-screen">
      {/* Notification Bar */}
      <div className=" bg-WayneBlack text-white text-center p-2">
        <div className=" flex justify-end items-center gap-4 text-sm sm:text-base lg:text-lg">
          <div className=" flex gap-4">
            <h3 className="text-sm sm:text-base lg:text-lg">
              dsalazar@lpexteriors.com
            </h3>
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
          <MyNavigationBar></MyNavigationBar>
          <div className=" text-6xl sm:text-8xl lg:text-9xl text-white font-bold">
            <h1>PRIVACY POLICY</h1>
          </div>
          <h2 className=" text-lg sm:text-xl lg:text-2xl font-light text-white">
            SETTING THE NEW STANDARD FOR ROOFING
          </h2>
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

      <section
        id="member"
        className=" bg-white flex flex-col gap-8 p-6 sm:p-10 lg:p-10"
      >
        <div
          id="div1"
          className=" flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow-lg items-center text-center md:text-left md:items-start border-b-8 border-WayneBlack"
        >
          <div>
            <h2 className=" text-WayneBlack text-2xl lg:text-5xl">
              Privacy Policy
            </h2>
            <h3 className=" text-gray-300 text-xl lg:text-4xl">
              Effective Date: January 15, 2025
            </h3>
          </div>
          <p className="text-xl font-oswald">
            LP Exteriors (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;)
            operates the https://lpexteriors.com Website. Please read this
            Privacy Policy carefully before using the https://lpexteriors.com/
            Website (the &quot;Website&quot;) as this Privacy Policy contains
            important information regarding your privacy and how we may use the
            information we collect about you.
          </p>
        </div>
      </section>
      <section id="member" className=" flex flex-col gap-8 p-6 sm:p-10 lg:p-10">
        <div
          id="div1"
          className=" flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 items-center text-center md:text-left md:items-start border-l-8 border-SunsetOrange"
        >
          <p className="text-3xl lg:text-6xl">
            By using our services or interacting with us, you agree to the terms
            of this Privacy Policy. If you disagree, please stop using our
            services immediately.
          </p>
        </div>
      </section>
      <section id="member" className=" flex flex-col gap-8 p-6 sm:p-10 lg:p-10">
        <div
          id="container"
          className=" flex-1 gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow-lg border-b-8 border-SunsetOrange"
        >
          <div>
            <h2 className=" text-WayneBlack text-xl lg:text-5xl">
              1. Information We Collect
            </h2>
            <h3 className=" text-gray-300 text-lg">
              We may collect the following types of information:
            </h3>
          </div>
          <div id="subcontainer" className=" flex flex-col gap-4">
            <h4 className="text-WayneBlack text-xl lg:text-4xl">
              1.1 Personal Information:
            </h4>
            <div className="text-xl font-oswald">
              <p>&middot; Name</p>
              <p>&middot; Email address</p>
              <p>&middot; Phone number</p>
              <p>&middot; Physical address</p>
              <p>&middot; Payment information</p>
            </div>
          </div>
          <div id="subcontainer" className=" flex flex-col gap-4">
            <h4 className="text-WayneBlack text-xl lg:text-4xl font-bolds">
              1.2 Non-Personal Information:
            </h4>
            <div className="text-xl font-oswald">
              <p>&middot; Browser type</p>
              <p>&middot; IP address</p>
              <p>&middot; Device information</p>
              <p>
                &middot; Website usage data (e.g., pages viewed, time spent on
                pages)
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="member"
        className=" flex flex-col gap-8 p-6 bg-white shadow-lg sm:p-10 lg:p-10"
      >
        <div
          id="container"
          className=" gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow-lg border-b-8 border-SunsetOrange"
        >
          <div>
            <h2 className=" text-WayneBlack text-xl lg:text-5xl">
              2. How We Use Your Information
            </h2>
            <h3 className=" text-gray-300 text-lg">
              We use the information we collect for the following purposes:
            </h3>
          </div>
          <div id="subcontainer" className=" flex flex-col gap-4">
            <div className="text-xl font-oswald flex flex-col gap-4">
              <p>&middot; To provide, operate, and improve our services</p>
              <p>&middot; To process transactions and send confirmations</p>
              <p>
                &middot; To communicate with you, including responding to
                inquiries and sending promotional materials
              </p>
              <p>
                &middot; To comply with legal obligations and resolve disputes
              </p>
              <p>
                &middot; To analyze website usage and improve our website&apos;s
                functionality
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="member"
        className=" flex flex-col gap-8 p-6 bg-white shadow-lg sm:p-10 lg:p-10"
      >
        <div
          id="container"
          className=" gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow-lg border-b-8 border-SunsetOrange"
        >
          <div>
            <h2 className=" text-WayneBlack text-xl lg:text-5xl">
              3. How We Share Your Information
            </h2>
            <h3 className=" text-gray-300 text-lg">
              We do not sell, rent, or trade your personal information. However,
              we may share your information in the following circumstances:
            </h3>
          </div>
          <div className="text-xl font-oswald flex flex-col gap-4">
            <p>
              &middot;{" "}
              <span className=" font-bold">With Service Providers:</span> To
              facilitate our services (e.g., payment processors, marketing
              platforms)
            </p>
            <p>
              &middot; <span className=" font-bold">For Legal Compliance:</span>{" "}
              To comply with applicable laws, regulations, or legal processes
            </p>
            <p>
              &middot;{" "}
              <span className=" font-bold">In Business Transactions:</span> If
              we merge, acquire, or sell parts of our business, your information
              may be transferred
            </p>
          </div>
        </div>
      </section>
      <section
        id="member"
        className=" flex flex-col gap-8 p-6 bg-white shadow-lg sm:p-10 lg:p-10"
      >
        <div
          id="container"
          className=" gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow-lg border-b-8 border-SunsetOrange"
        >
          <div>
            <h2 className=" text-WayneBlack text-xl lg:text-5xl">
              4. Data Security
            </h2>
          </div>
          <div className="text-xl font-oswald flex flex-col gap-4">
            <p>
              We take appropriate technical and organizational measures to
              protect your personal information from unauthorized access,
              disclosure, alteration, and destruction. However, no system is
              completely secure, and we cannot guarantee absolute security.
            </p>
          </div>
        </div>
      </section>
      <section
        id="member"
        className=" flex flex-col gap-8 p-6 bg-white shadow-lg sm:p-10 lg:p-10"
      >
        <div
          id="container"
          className=" gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow-lg border-b-8 border-SunsetOrange"
        >
          <div>
            <h2 className=" text-WayneBlack text-xl lg:text-5xl">
              5. Cookies and Tracking Technologies
            </h2>
          </div>
          <div className="text-xl font-oswald flex flex-col gap-4">
            <p>
              We use cookies and similar technologies to enhance your browsing
              experience and gather analytics about website usage. This includes
              the use of Google Analytics, which helps us understand how
              visitors interact with our Website by collecting and analyzing
              usage data. Google Analytics may use cookies or other tracking
              technologies to collect information such as your IP address,
              browser type, pages visited, and time spent on the Website. You
              can learn more about how Google Analytics collects and processes
              data by visiting Google&apos;s Privacy Policy. You can manage your
              cookie preferences through your browser settings or opt-out of
              Google Analytics tracking by using the Google Analytics opt-out
              browser add-on.
            </p>
          </div>
        </div>
      </section>
      <section
        id="member"
        className=" flex flex-col gap-8 p-6 bg-white shadow-lg sm:p-10 lg:p-10"
      >
        <div
          id="container"
          className=" gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow-lg border-b-8 border-SunsetOrange"
        >
          <div>
            <h2 className=" text-WayneBlack text-xl lg:text-5xl">
              6. Third-Party Links{" "}
            </h2>
          </div>
          <div className="text-xl font-oswald flex flex-col gap-4">
            <p>
              Our website may contain links to third-party websites. We are not
              responsible for the privacy practices or content of those sites.
              Please review their privacy policies before providing any personal
              information.
            </p>
          </div>
        </div>
      </section>
      <section
        id="member"
        className=" flex flex-col gap-8 p-6 bg-white shadow-lg sm:p-10 lg:p-10"
      >
        <div
          id="container"
          className=" gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow-lg border-b-8 border-SunsetOrange"
        >
          <div>
            <h2 className=" text-WayneBlack text-xl lg:text-5xl">
              7. Your Rights{" "}
            </h2>
            <h3 className=" text-gray-300 text-lg">
              Depending on your location, you may have the following rights
              regarding your personal information:
            </h3>
          </div>
          <div className="text-xl font-oswald flex flex-col gap-4">
            <p>&middot; The right to access and update your personal data</p>
            <p>&middot; The right to request deletion of your personal data</p>
            <p>&middot; The right to object to or restrict processing</p>
            <p>&middot; The right to data portability</p>
          </div>
          <p className=" text-xl">
            To exercise your rights, please contact us using the details below.
          </p>
        </div>
      </section>
      <section
        id="member"
        className=" flex flex-col gap-8 p-6 bg-white shadow-lg sm:p-10 lg:p-10"
      >
        <div
          id="container"
          className=" gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow-lg border-b-8 border-SunsetOrange"
        >
          <div>
            <h2 className=" text-WayneBlack text-xl lg:text-5xl">
              8. Changes to This Privacy Policy{" "}
            </h2>
          </div>
          <div className="text-xl font-oswald flex flex-col gap-4">
            <p>
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated &quot;Effective
              Date.&quot;
            </p>
          </div>
        </div>
      </section>
      <section
        id="member"
        className=" flex flex-col gap-8 p-6 bg-white shadow-lg sm:p-10 lg:p-10"
      >
        <div
          id="container"
          className=" gap-8 flex flex-col p-6 sm:p-10 lg:p-20 bg-white shadow-lg border-b-8 border-SunsetOrange"
        >
          <div>
            <h2 className=" text-WayneBlack text-xl lg:text-5xl">
              9. Contact Us{" "}
            </h2>
            <h3 className=" text-gray-300 text-lg">
              If you have any questions or concerns about this Privacy Policy or
              our data practices, please contact us:
            </h3>
          </div>
          <div className="text-xl font-oswald flex flex-col gap-4">
            <p>LP Exteriors</p>
            <p>Email: dsalazar@lpexteriors.com</p>
            <p>Phone: 832-468-6980</p>
          </div>
        </div>
      </section>
      <MyFooter></MyFooter>
    </main>
  );
}
