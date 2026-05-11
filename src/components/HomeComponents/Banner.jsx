import { useEffect, useRef } from "react";
import banner02 from "../../assets/banner/today-deal-banner-02.svg";
import banner03 from "../../assets/banner/today-deal-banner-03.svg";
import banner04 from "../../assets/banner/today-deal-banner-04.svg";

// ─────────────────────────────────────────────
// BANNERS — ค่าคงที่ระดับ module (ไม่ใช่ state ไม่ใช่ ref)
// เขียน SCREAMING_SNAKE_CASE ตาม JS convention เพื่อบอกว่า "ค่านี้ fixed ตลอด"
// เก็บเป็น array ของ path รูปภาพ ใช้วนซ้ำสร้าง banner cards
// ─────────────────────────────────────────────
const BANNERS = [
  banner02,
  banner03,
  banner04,
];

// ─────────────────────────────────────────────
// BannerCard — presentational component (แค่รับ props แล้ว render)
// props.src  → กำหนดเอง (ส่งมาจาก parent ตอน map)
// ─────────────────────────────────────────────
function BannerCard({ src }) {
  return (
    // div ห่อรูป กำหนด width 85vw บน mobile, 600px บน md ขึ้นไป + shrink-0 เพื่อไม่ให้ flex บีบ
    <div className="w-[85vw] md:w-[600px] shrink-0 bg-white rounded-3xl shadow-xl overflow-hidden border-t-8">
      {/* src → กำหนดเอง มาจาก prop ที่รับเข้ามา */}
      <img src={src} className="w-full h-auto object-cover" alt="Deal banner" />
    </div>
  );
}

export default function Banner() {
  // ─────────────────────────────────────────────
  // useRef — built-in React Hook
  // คืนค่า object รูปแบบ { current: <initialValue> }
  // พิเศษกว่า useState ตรงที่: การเปลี่ยน .current ไม่ trigger re-render
  // เหมาะกับค่าที่ต้องการ "จำ" ข้าม render แต่ไม่อยากให้ component วาดใหม่
  // ─────────────────────────────────────────────

  // trackRef.current → DOM node ของ div แถวภาพ (ใช้ขยับด้วย transform)
  // initial = null เพราะ DOM ยังไม่มีตอน declare
  const trackRef = useRef(null);        // กำหนดเอง: ชื่อ trackRef

  // posRef.current → ตำแหน่ง scroll ปัจจุบัน (หน่วย px) สะสมทุก frame
  // เลือก ref แทน state เพราะอัปเดตทุก frame (60fps) — ถ้าเป็น state จะ re-render ตลอด
  const posRef = useRef(0);             // กำหนดเอง: ชื่อ posRef, initial = 0

  // rafRef.current → เก็บ requestAnimationFrame ID ที่ return มา
  // ใช้ตอน cleanup เพื่อ cancelAnimationFrame ให้ถูก ID
  const rafRef = useRef(null);          // กำหนดเอง: ชื่อ rafRef

  // isPausedRef.current → flag บอกว่า animation หยุดอยู่ไหม (hover pause)
  // เลือก ref แทน state เหมือนกัน เพราะไม่ต้องการ re-render เมื่อ hover
  const isPausedRef = useRef(false);    // กำหนดเอง: ชื่อ isPausedRef, initial = false

  // ─────────────────────────────────────────────
  // useEffect — built-in React Hook
  // [] dependency array ว่าง → รันครั้งเดียวหลัง component mount
  // คืน cleanup function → รันตอน component unmount
  // ─────────────────────────────────────────────
  useEffect(() => {
    // trackRef.current → built-in property ของ useRef object
    // หลัง mount React จะ inject DOM node จริงๆ เข้ามาที่ .current อัตโนมัติ
    const track = trackRef.current;
    if (!track) return; // guard: ถ้า DOM ยังไม่พร้อมก็ออกก่อน

    const SPEED = 0.4; // กำหนดเอง: ความเร็ว animation (px ต่อ frame, ~60fps = 60px/วินาที)

    // step — กำหนดเอง: ฟังก์ชัน animation loop หลัก
    // requestAnimationFrame จะเรียก step() ซ้ำๆ ทุกครั้งที่ browser พร้อม paint
    const step = () => {
      if (!isPausedRef.current) {       // เช็ค flag hover pause ก่อนทุกครั้ง
        posRef.current += SPEED;        // เลื่อนตำแหน่งไปทางซ้าย +1px ต่อ frame

        // track.scrollWidth — built-in DOM property
        // คืนค่าความกว้างรวมทั้งหมดของ element (รวมส่วนที่ overflow ออกไป)
        // หาร 2 เพราะเราวาง banner 2 ชุด (ชุด a + ชุด b) เพื่อทำ infinite loop
        // เมื่อเลื่อนจนครบครึ่ง = ชุด a หายออกไป ให้ reset กลับ 0 (ชุด b ต่อเนื่องกัน)
        const halfWidth = track.scrollWidth / 2; // กำหนดเอง: ชื่อ halfWidth

        if (posRef.current >= halfWidth) {
          posRef.current = 0; // reset position → ทำให้ loop ดูไร้รอยต่อ
        }

        // track.style.transform — built-in DOM property
        // translateX(-Npx) เลื่อน element ไปทางซ้าย N px
        // ใช้ transform แทน scrollLeft เพราะ GPU-accelerated (smooth กว่า)
        track.style.transform = `translateX(-${posRef.current}px)`;
      }

      // requestAnimationFrame — built-in Browser API (ไม่ใช่ React)
      // บอก browser ว่า "เรียก step() อีกทีก่อน paint frame หน้า"
      // คืนค่า ID (number) ที่ใช้ cancel ได้ภายหลัง
      rafRef.current = requestAnimationFrame(step); // วน loop ต่อเนื่อง
    };

    // เริ่ม loop ครั้งแรก
    rafRef.current = requestAnimationFrame(step);

    // cleanup function — built-in React mechanism (return จาก useEffect)
    // React เรียกอัตโนมัติตอน component unmount หรือก่อน effect รันซ้ำ
    return () => cancelAnimationFrame(rafRef.current);
    // cancelAnimationFrame — built-in Browser API
    // รับ ID จาก rafRef.current แล้วยกเลิก frame ที่ค้างอยู่ → ป้องกัน memory leak
  }, []); // [] → dependency array ว่าง = รันแค่ครั้งเดียวตอน mount

  return (
    <section className="box-border h-auto bg-white flex flex-col gap-2">
      <div
        className="relative w-full max-w-full overflow-hidden bg-[#ECEAE9] py-10"
        // onMouseEnter / onMouseLeave — built-in React synthetic events
        // set isPausedRef.current โดยตรง (ไม่ setState) → ไม่ trigger re-render
        onMouseEnter={() => (isPausedRef.current = true)}  // hover เข้า → หยุด
        onMouseLeave={() => (isPausedRef.current = false)} // hover ออก → เล่นต่อ
      >
        {/* ref={trackRef} — built-in React prop
            บอก React ให้ inject DOM node ของ div นี้เข้า trackRef.current
            หลังจาก mount เสร็จ ทำให้เราจัดการ DOM โดยตรงได้ใน useEffect */}
        <div ref={trackRef} className="flex w-max">

          {/* ชุด A — banner จริง (visible) */}
          <div className="flex gap-6 px-3">
            {/* BANNERS.map — built-in Array method
                i → index, ใช้สร้าง key ที่ unique ภายในชุด */}
            {BANNERS.map((src, i) => (
              <BannerCard key={`a-${i}`} src={src} /> // key prefix "a-" → กำหนดเอง
            ))}
          </div>

          {/* ชุด B — clone ของชุด A เพื่อทำ seamless infinite scroll
              aria-hidden="true" — built-in HTML attribute
              บอก screen reader ว่า "ข้ามส่วนนี้ไป เป็นแค่ visual duplicate" */}
          <div className="flex gap-6 px-3" aria-hidden="true">
            {BANNERS.map((src, i) => (
              <BannerCard key={`b-${i}`} src={src} /> // key prefix "b-" → กำหนดเอง
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}