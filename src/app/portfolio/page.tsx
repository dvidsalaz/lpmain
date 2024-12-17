import { MyForm } from "@/components/custom/MyForm";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="flex flex-col md:flex-row gap-8 p-6 sm:p-10 lg:p-20 bg-fixed bg-cover bg-center min-h-screen bg-slate-400"
      style={{ backgroundImage: "url('/images/IMG_7164.jpg')" }}
    >
      <div className="lg:p-20 items-center justify-center flex-1 flex w-full bg-none"></div>
      <div
        id="div1"
        className="items-center justify-center flex-1 gap-8 flex flex-col p-6 sm:p-8 lg:p-10 bg-white shadow"
      >
        <div>
          <h2 className="text-gray-300 text-center text-2xl sm:text-3xl lg:text-5xl">
            Build With Us
          </h2>
          <h1 className="text-2xl text-center text-WayneBlack sm:text-3xl lg:text-5xl">
            Uvalde Residential Estate
          </h1>
        </div>
        <MyForm />
      </div>
    </section>
  );
}
