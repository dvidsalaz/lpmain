import Image from "next/image";

export default function Home() {
  return (
    <body className="min-h-screen">
      <main className="">
        <section className="flex flex-col gap-20 p-6 sm:p-10 lg:p-20 bg-slate-400">
          <nav className=" sticky top-0 z-50 flex">
            <Image
              src="/images/lp_logo.svg"
              alt="LP Construction Logo"
              width={144}
              height={144}
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
        <section className="flex flex-col gap-8 p-6 sm:p-10 lg:p-20 items-center">
          <h2 className="text-6xl text-red-600">Our Mission</h2>
          <p>
            LP Construction operates with intention. We strive to deliver the
            highest standard of service while fostering a positive influence
            that will resonate for years to come.
          </p>
        </section>
      </main>
    </body>
  );
}
