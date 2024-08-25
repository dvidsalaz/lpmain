import Link from "next/link";
import Image from "next/image";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuTrigger } from "@/components/ui/navigation-menu";

export default function Team() {
  return (
    <body className=" min-h-screen">
      <main className="">
      <section
            className="flex flex-col gap-8 p-6 sm:p-10 lg:p-20 bg-slate-400 min-h-screen"
          >
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
                      <Link href="/expertise">
                        EXPERTISE
                      </Link>
                      <Link href="/careers">
                        CAREERS
                      </Link>
                      <Link href="/media">
                        MEDIA
                      </Link>
                      <Link href="/testimonials">
                        TESTIMONIALS
                      </Link>
                      <Link href="/finished-projects">
                        FINISHED PROJECTS
                      </Link>
                      <Link href="/under-construction">
                        UNDER CONSTRUCTION
                      </Link>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenu>
                <Link href="#portfolio" className="text-lg sm:text-xl text-white">
                  PORTFOLIO
                </Link>
                <Link href="#team" className="text-lg sm:text-xl text-white">
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
                      <Link href="#home" className="text-lg sm:text-xl text-WayneBlack">
                        HOME
                      </Link>
                      <Link href="#company" className="text-lg sm:text-xl text-WayneBlack">
                        COMPANY
                      </Link>
                      <Link href="#portfolio" className="text-lg sm:text-xl text-WayneBlack">
                        PORTFOLIO
                      </Link>
                      <Link href="#team" className="text-lg sm:text-xl text-WayneBlack">
                        OUR TEAM
                      </Link>
                      <Link href="#contact" className="text-lg sm:text-xl text-WayneBlack">
                        CONTACT US
                      </Link>
                    </nav>
                  </SheetDescription>
                </SheetContent>
              </Sheet>
            </nav>
            <div className=" text-6xl sm:text-8xl lg:text-9xl text-white font-bold">
              <h1>MEET THE TEAM</h1>
            </div>
            <p className=" text-lg sm:text-xl lg:text-2xl font-light">
              SETTING THE NEW STANDARD FOR HOME CONSTRUCTION
            </p>
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
                <Link className=" hover:text-gray-300" href="/team">Our Team</Link>
                <Link className=" hover:text-gray-300" href="/services">Our Services</Link>
                <Link className=" hover:text-gray-300" href="/portfolio">Our Portfolio</Link>
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
  );
}