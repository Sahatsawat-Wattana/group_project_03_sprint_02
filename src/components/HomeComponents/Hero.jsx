import * as React from "react";
import { useRef } from "react";

export default function Hero() {
  const scrollRef = useRef(null);
  return (
    <section className="px-10 sm:px-10 lg:px-[100px] py-8 bg-[#ECE0DC] font-['Cormorant_Garamond'] flex flex-col sm:flex-row gap-5">
      <div className="[text-wrap:pretty]">
        <h1 className="font-extrabold text-2xl sm:text-3xl">Trending Books</h1>
        <p className="mt-2 text-lg sm:text-xl font-semibold ">
          Let's discover your new favorite books !
        </p>
      </div>

      {/* SCROLL AREA */}
      <div
        className="relative w-full bg-[#faf4ef] rounded-[50px] px-6 sm:px-8 py-6"
        item-center
      >
        <button
          onClick={() => {
            const cardWidth = scrollRef.current?.firstChild?.clientWidth || 0;

            scrollRef.current?.scrollBy({
              left: -cardWidth - 16,
              behavior: "smooth",
            });
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-3xl font-bold text-[#878584] hover:text-black transition"
        >
          &lt;
        </button>

        {/* RIGHT BUTTON */}
        <button
          onClick={() => {
            const cardWidth = scrollRef.current?.firstChild?.clientWidth || 0;

            scrollRef.current?.scrollBy({
              left: cardWidth + 16,
              behavior: "smooth",
            });
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-3xl font-bold text-[#878584] hover:text-black transition"
        >
          &gt;
        </button>

        {/* BOOK LIST */}
        <div
          ref={scrollRef}
          className="flex gap-4 lg:gap-8 px-2 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory items-start lg:justify-center"
        >
          {/* BOOK 1 */}
          <div className="flex-none min-w-[85%] sm:min-w-[46%] lg:min-w-[27%] snap-start">
            <img
              className="object-cover w-full aspect-[3/4] transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:scale-105"
              src="./hero-section-image/hero-book-01.jpg"
              alt="Project Hail Mary"
            />
            <div className="mt-4 w-full">
              <a
                href="#"
                className="font-extrabold text-lg sm:text-xl lg:text-2xl py-[8px] hover:underline [text-wrap:pretty]"
              >
                Project Hail Mary
              </a>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-base sm:text-lg lg:text-xl">4.7</p>
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img
                  className="w-4 h-4"
                  src="./hero-section-image/half-star.png"
                />
              </div>
              <p className="font-bold text-lg sm:text-xl lg:text-2xl">
                434.15 THB
              </p>
            </div>
          </div>

          {/* BOOK 2 */}
          <div className="flex-none min-w-[85%] sm:min-w-[46%] lg:min-w-[27%] snap-start">
            <img
              className="object-cover w-full aspect-[3/4] transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:scale-105"
              src="./hero-section-image/hero-book-02.jpg"
              alt="The Nightingale"
            />
            <div className="mt-4 w-full">
              <a
                href="#"
                className="font-extrabold text-lg sm:text-xl lg:text-2xl py-[8px] hover:underline [text-wrap:pretty]"
              >
                The Nightingale
              </a>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-base sm:text-lg lg:text-xl">4.8</p>
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img
                  className="w-4 h-4"
                  src="./hero-section-image/half-star.png"
                />
              </div>
              <p className="font-bold text-lg sm:text-xl lg:text-2xl">
                391.98 THB
              </p>
            </div>
          </div>

          {/* BOOK 3 */}
          <div className="flex-none min-w-[85%] sm:min-w-[46%] lg:min-w-[27%] snap-start">
            <img
              className="object-cover w-full aspect-[3/4] transition duration-300 hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.5)] hover:scale-105"
              src="./hero-section-image/hero-book-03.jpg"
              alt="The Housemaid"
            />
            <div className="mt-4 w-full">
              <a
                href="#"
                className="font-extrabold text-lg sm:text-xl lg:text-2xl py-[8px] hover:underline [text-wrap:pretty]"
              >
                The Housemaid
              </a>
              <div className="flex flex-row gap-2 items-center">
                <p className="text-base sm:text-lg lg:text-xl">4.5</p>
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img className="w-4 h-4" src="./hero-section-image/star.png" />
                <img
                  className="w-4 h-4"
                  src="./hero-section-image/half-star.png"
                />
              </div>
              <p className="font-bold text-lg sm:text-xl lg:text-2xl">
                391.98 THB
              </p>
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
