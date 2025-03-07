import Image from "next/image";

export default function MyBanner() {
  return (
    <div className="bg-WayneBlack text-white p-2">
      <div className=" flex sm:justify-between justify-end items-center gap-4 text-sm sm:text-base lg:text-lg">
        <div className="sm:flex justify-center items-center hidden ">
          <span>
            <Image
              src="/images/map-marker-f.svg"
              alt="Map Marker"
              width={24}
              height={24}
            />
          </span>
          <h3>Serving the Dallas Fort-Worth Area</h3>
        </div>
        <div className=" flex gap-4 items-center ">
          <h3 className="text-sm sm:text-base lg:text-lg">
            <a
              href="mailto:dsalazar@lpexteriors.com"
              className=" hover:underline"
            >
              dsalazar@lpexteriors.com
            </a>
          </h3>
          <span>|</span>
          <a
            href="tel:+18324686980"
            className="text-sm sm:text-base hover:underline lg:text-lg"
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
      </div>
    </div>
  );
}
