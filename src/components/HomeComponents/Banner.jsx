import { useEffect, useRef } from "react";

// convention ใน JS คือตัวแปรที่เป็น constant ที่ไม่มีวันเปลี่ยนค่าตลอด lifetime ของโปรแกรม นิยมเขียน SCREAMING_SNAKE_CASE เพื่อบอกคนอ่านว่า "ค่านี้ fixed ไม่ต้องตามหาว่ามันเปลี่ยนที่ไหน
// ประกาศโดยไม่ใช้ `useRef` เพราะมันไม่เคยเปลี่ยนค่าเลย แค่ const ธรรมดาพอ 
const BANNERS = [
  "/today-deal-image/today-deal-banner-02.svg",
  "/today-deal-image/today-deal-banner-03.svg",
  "/today-deal-image/today-deal-banner-04.svg",
];

function BannerCard({ src }) {
  return (
    <div className="w-[600px] shrink-0 bg-white rounded-3xl shadow-xl overflow-hidden border-t-8">
      <img src={src} className="w-full h-auto object-cover" alt="Deal banner" />
    </div>
  );
}

export default function Banner() {
  const trackRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const SPEED = 1; // px per frame

    const step = () => {
      if (!isPausedRef.current) {
        posRef.current += SPEED;

        // reset เมื่อเลื่อนครบครึ่ง (ชุดที่ 1 หาย = loop ไม่สิ้นสุด)
        const halfWidth = track.scrollWidth / 2;
        if (posRef.current >= halfWidth) {
          posRef.current = 0;
        }

        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  return (
    <section className="box-border h-auto bg-white flex flex-col gap-2">
      <div
        className="relative w-full overflow-hidden bg-[#ECEAE9] py-10"
        onMouseEnter={() => (isPausedRef.current = true)}
        onMouseLeave={() => (isPausedRef.current = false)}
      >
        <div ref={trackRef} className="flex w-[max]">
          <div className="flex gap-6 px-3">
            {BANNERS.map((src, i) => (
              <BannerCard key={`a-${i}`} src={src} />
            ))}
          </div>
          <div className="flex gap-6 px-3" aria-hidden="true">
            {BANNERS.map((src, i) => (
              <BannerCard key={`b-${i}`} src={src} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}