import { useState } from "react";
import CategoryFilter from "../CategoryFilter";
import SlideBooks from "../CardComponents/SlideBooks";

export default function CategorySample() {
  const categories = [
    "Romance",
    "Science Fiction & Fantasy",
    "Self-Help",
    "History",
    "Children's Books",
  ];
  const [activeCategory, setActiveCategory] = useState("Romance");

  return (
    <div className="p-10 bg-[#EEE1DB] h-">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-black">Popular Category</h2>
        <button className="text-black hover:underline">See more &gt;</button>
      </div>

      {/* เรียกใช้ Component ที่เอมสร้าง */}
      <CategoryFilter
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      {/* ส่วนแสดง BookCard ที่เอมทำไว้ (ใส่ Filter ตามหมวดหมู่ได้เลยค่ะ) */}
      <div className="flex  items-center gap-6 overflow-x-auto py-4 bg-[#F9EEE9] rounded-3xl">
        <SlideBooks />
      </div>
    </div>
  );
}
