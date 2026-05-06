export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onCategoryChange(cat)}
          className={`px-4 py-1 rounded-full font-medium transition-all duration-300 ${
            activeCategory === cat
              ? "bg-[#A66858] text-white " // สีแดงเข้มตามรูปของเอม
              : "bg-white text-[#A66858]  hover:bg-[#A66858] hover:text-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
