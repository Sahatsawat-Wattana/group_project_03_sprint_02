import { Bookdata } from "../../mock-data/Book";

export default function BookCard({ img, name, price }) {
  return (
    <div className="flex flex-col w-64 p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-shadow cursor-pointer">
      <div className="w-full h-80 overflow-hidden rounded-md mb-4">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-gray-800 line-clamp-2">{name}</h3>
        <div className="text-yellow-500 text-sm">⭐⭐⭐⭐⭐</div>

        <p className="text-xl font-semibold text-black">
          {price} <span className="text-sm font-normal">THB</span>
        </p>
      </div>
    </div>
  );
}
