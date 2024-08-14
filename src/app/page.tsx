import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <body className="min-h-screen">
      <main className="">
        <section className="flex flex-col gap-20 p-6 sm:p-10 lg:p-20 bg-slate-400">
          <nav className=" sticky top-0 z-50 flex">
            <Image
              src="/images/lp_logo.svg"
              alt="LP Construction Logo"
              width={80}
              height={80}
            />
            <div>
              <p>test</p>
            </div>
          </nav>
          <div className=" text-9xl text-white">
            <h1 className="">LP</h1>
            <h1>DELIVERS</h1>
            <h1>RESULTS</h1>
          </div>
          <p className="text-2xl font-light">
            SETTING THE NEW STANDARD FOR HOME CONSTRUCTION
          </p>
        </section>
        <section className="flex flex-col gap-8 p-6 sm:p-10 lg:p-20 items-center text-center">
          <h2 className="text-6xl text-devilRed underline">Our Mission</h2>
          <p>
            LP Construction operates with intention. We strive to deliver the
            highest standard of service while fostering a positive influence
            that will resonate for years to come.
          </p>
        </section>
        <section className="flex gap-8 p-6 sm:p-10 lg:p-20 items-center bg-cloudyGray">
          <div className=" flex flex-col p-6 sm:p-10 lg:p-20">
            test
          </div>
          <div className="flex bg-white flex-col p-6 sm:p-10 lg:p-20 items-center">
            <h2>Featured Properties</h2>
            <h1>Bayshoes Traditional</h1>
          </div>
        </section>
        <section className="flex flex-col p-6 sm:p-10 lg:p-20 items-center">
          <div className=" flex flex-col gap-8 bg-cloudyGray p-6 sm:p-10 lg:p-20 items-center text-center">
            <h1 className=" text-6xl underline">
              Get In Touch
            </h1>
            <p className=" text-gray-400">
            Egestas fringilla aliquam leo, habitasse arcu varius lorem elit. Neque pellentesque donec et tellus ac varius tortor, bibendum. Nulla felis ac turpis at amet. Purus malesuada placerat arcu at enim elit in accumsan.
            </p>
            <Button className=" text-2xl gap-2 text-devilRed p-6 bg-transparent border-devilRed rounded-none border-2 " variant={"outline"}>
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
        <footer className=" p-6 bg-WayneBlack text-white sm:p-10 lg:p-20 flex flex-col justify-between items-center gap-4 max-w-screen-2xl">
          <Image
              src="/images/lp_logo.svg"
              alt="LP Construction Logo"
              width={144}
              height={144}
          />
          <div className="flex">
            <Image
                src="/images/texasflag.png"
                alt="LP Construction Logo"
                width={50}
                height={33}
            />
            <p>
              A TEXAS COMPANY
            </p>
          </div>   
          <nav className=" flex gap-4 items-center text-base lg:gap-8">
            <Link href="/Values">Our Company</Link>
            <Link href="/Services">Our Services</Link>
            <Link href="/Projects">Our Projects</Link>
          </nav>
          <div>
            <p className=" text-base text-center">
              Copyright &copy; 2024 LP Construction LLC. All rights reserved.
            </p>
          </div> 
        </footer>
      </main>
    </body>
  );
}
