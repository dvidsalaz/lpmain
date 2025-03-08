import MyDrawer from "./myDrawer";
import Link from "next/link";
import Image from "next/image";
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

const MyNavigationBar = () => {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between">
      <Link href="/">
        <Image
          src="/images/lp_logo(2).svg"
          alt="LP Construction Logo"
          width={120}
          height={120}
          className="object-contain"
        />
      </Link>
      <div className="hidden sm:flex gap-6">
        <Link
          href="/"
          className="text-lg sm:text-xl text-white hover:text-SunsetOrange"
        >
          HOME
        </Link>
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-transparent p-0 text-lg sm:text-xl bg-transparent text-white font-anton">
              COMPANY
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col gap-4 p-6">
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
        <NavigationMenu>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="hover:bg-transparent p-0 text-lg sm:text-xl bg-transparent text-white font-anton">
              SERVICES
            </NavigationMenuTrigger>
            <NavigationMenuContent className="flex flex-col gap-4 p-6">
              <Link
                className="hover:underline hover:decoration-SunsetOrange"
                href="/drone-inspection"
              >
                DRONE INSPECTION
              </Link>
              <Link
                className="hover:underline hover:decoration-SunsetOrange"
                href="/storm-damage"
              >
                STORM DAMAGE
              </Link>
              <Link
                className="hover:underline hover:decoration-SunsetOrange"
                href="/roof-leaks"
              >
                ROOF LEAKS
              </Link>
              <Link
                className="hover:underline hover:decoration-SunsetOrange"
                href="/shingle-replacement"
              >
                SHINGLE REPLACEMENT
              </Link>
              <Link
                className="hover:underline hover:decoration-SunsetOrange"
                href="/roof-replacement"
              >
                ROOF REPLACEMENT
              </Link>
              <Link
                className="hover:underline hover:decoration-SunsetOrange"
                href="/gutter-repair"
              >
                GUTTER REPAIR & INSTALLATION
              </Link>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenu>
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
      <MyDrawer />
    </nav>
  );
};

export default MyNavigationBar;
