import * as React from "react";

export default function Hero() {
  return (
    <section className="h-[500px] pl-[100px] py-[40px] bg-[#ECE0DC] font-['Cormorant_Garamond'] flex flex-row">
      {/* LEFT TEXT */}
      <div className="w-[240px] mr-[48px] [text-wrap:pretty]">
        <h1 className="font-extrabold text-6xl">
          Trending <br /> Books
        </h1>
        <p className="mt-2 text-2xl font-semibold">
          Let's discover your new favorite books !
        </p>
      </div>

      {/* SCROLL AREA */}
      <div className="relative w-full max-w-full justify-center pl-[48px] pr-[32px] pb-[32px] pt-[48px] bg-[#faf4ef] rounded-[90px] overflow-x-auto scroll-smooth no-scrollbar">
        {/* LEFT BUTTON */}
        <button className="absolute left-10 top-1/2 -translate-y-1/2 z-10 text-7xl font-extrabold transform scale-y-200 text-[#878584] hover:text-black transition">
          &lt;
        </button>

        {/* RIGHT BUTTON */}
        <button className="absolute right-10 top-1/2 -translate-y-1/2 z-10 text-7xl font-extrabold transform scale-y-200 text-[#878584] hover:text-black transition">
          &gt;
        </button>

        {/* BOOK LIST */}
        <div className="flex flex-row gap-[72px] justify-center">
          {/* BOOK 1 */}
          <div className="w-[160px] h-[240px] m-[8px]">
            <img
              className="object-cover w-full h-full transition duration-300 hover:-translate-y-4 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:scale-105"
              src="./hero-section-image/hero-book-01.jpg"
              alt="Project Hail Mary"
            />
            <div className="my-[16px] h-[100px] w-[300px]">
              <a
                href="#"
                className="font-extrabold text-2xl py-[8px] hover:underline"
              >
                Project Hail Mary
              </a>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-xl">4.7</p>
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img
                  className="w-4 h-4"
                  src="./hero-section-image/half-star.png"
                />
              </div>
              <p className="font-bold text-2xl">434.15 THB</p>
            </div>
          </div>

          {/* BOOK 2 */}
          <div className="w-[160px] h-[240px] m-[8px]">
            <img
              className="object-cover w-full h-full transition duration-300 hover:-translate-y-4 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:scale-105"
              src="./hero-section-image/hero-book-02.jpg"
              alt="The Nightingale"
            />
            <div className="my-[16px] h-[100px] w-[300px]">
              <a href="#" className="font-extrabold text-2xl hover:underline">
                The Nightingale
              </a>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-xl">4.8</p>
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img
                  className="w-4 h-4"
                  src="./hero-section-image/half-star.png"
                />
              </div>
              <p className="font-bold text-2xl">391.98 THB</p>
            </div>
          </div>

          {/* BOOK 3 */}
          <div className="w-[160px] h-[240px] m-[8px]">
            <img
              className="object-cover w-full h-full transition duration-300 hover:-translate-y-4 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:scale-105"
              src="./hero-section-image/hero-book-03.jpg"
              alt="The Housemaid"
            />
            <div className="my-[16px] h-[100px] w-[300px]">
              <a href="#" className="font-extrabold text-2xl hover:underline">
                The Housemaid
              </a>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-xl">4.5</p>
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img
                  className="w-4 h-4"
                  src="./hero-section-image/half-star.png"
                />
              </div>
              <p className="font-bold text-2xl">391.98 THB</p>
            </div>
          </div>
        </div>
      </div>

      {/* FILTER BUTTON
      <button className="transition hover:scale-105 px-[32px] pb-[400px] cursor-pointer">
        <img
          className="w-10"
          src="./hero-section-image/filter.png"
          alt="filter"
        />
      </button> */}
    </section>
  );
}
