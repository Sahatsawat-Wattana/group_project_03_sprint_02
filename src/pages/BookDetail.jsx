import { useState } from "react";
import { Heart, Star } from "lucide-react";
import NavBar from "../components/HomeComponents/NavBar";
import Footer from "../components/HomeComponents/Footer";
import ReviewSection from "../components/BookDetailComponents/ReviewSection";
import WriteReviewForm from "../components/BookDetailComponents/WriteReviewForm";

export default function BookDetail() {
  const [isWritingReview, setIsWritingReview] = useState(false);

  // Mock data - ในอนาคตจะดึงจาก props หรือ API
  const book = {
    id: 1,
    title: "The Night We Met",
    author: "Abby Jimenez",
    rating: 4.7,
    totalRatings: 2814,
    description:
      "A heartwarming and hilarious love story about two people who meet in the most unexpected of places. When Alexis meets Daniel while waiting for a ferry, she never imagines the night will change her life forever.",
    price: 434.15,
    originalPrice: 542.0,
    discount: 20,
    pages: 320,
    language: "English",
    publisher: "Forever",
    format: "Paperback",
    categories: ["Romance", "Contemporary"],
    coverImage: "", // placeholder
  };

  const reviews = [
    {
      id: 1,
      customerName: "Sarah K.",
      avatar: "S",
      verified: true,
      date: "12 Apr 2026",
      rating: 5,
      review:
        "Absolutely loved this book! The chemistry between the characters was amazing and I couldn't put it down. Abby Jimenez never disappoints — this might be her best yet.",
    },
    {
      id: 2,
      customerName: "Mike L.",
      avatar: "M",
      verified: true,
      date: "5 Apr 2026",
      rating: 4,
      review:
        "Great read for a rainy day. The humor is spot on and the emotional moments hit hard. Only knocked one star because the ending felt a little rushed.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <span className="hover:text-[#A66858] cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="hover:text-[#A66858] cursor-pointer">Romance</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{book.title}</span>
        </nav>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Book Cover */}
            <div className="flex flex-col items-center md:items-start">
              <div className="w-full max-w-[280px] aspect-[2/3] bg-gradient-to-br from-purple-600 to-purple-900 rounded-lg shadow-lg mb-4 flex items-center justify-center text-white p-6">
                <div className="text-center">
                  <p className="text-sm mb-2">{book.author.toUpperCase()}</p>
                  <h3 className="text-2xl font-bold leading-tight">
                    {book.title}
                  </h3>
                </div>
              </div>
              <button className="flex items-center gap-2 px-6 py-2 border-2 border-gray-300 rounded-full text-gray-700 hover:border-[#A66858] hover:text-[#A66858] transition-colors">
                <Heart size={20} />
                <span>Like</span>
              </button>
            </div>

            {/* Book Info */}
            <div className="md:col-span-2">
              {/* Categories */}
              <div className="flex gap-2 mb-3">
                {book.categories.map((category, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#F5E6D3] text-[#A66858] text-sm rounded-full"
                  >
                    {category}
                  </span>
                ))}
              </div>

              {/* Title & Author */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {book.title}
              </h1>
              <p className="text-gray-600 mb-4">by {book.author}</p>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={
                        i < Math.floor(book.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">
                  {book.rating}
                </span>
                <span className="text-gray-500">
                  ({book.totalRatings.toLocaleString()} ratings)
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-700 leading-relaxed mb-6">
                {book.description}
              </p>

              {/* Price & Actions */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">
                    {book.price.toFixed(2)} THB
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    {book.originalPrice.toFixed(2)} THB
                  </span>
                  <span className="px-2 py-1 bg-red-500 text-white text-sm rounded">
                    -{book.discount}%
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mb-6">
                <button className="w-full sm:w-auto px-8 py-3 bg-[#A66858] text-white rounded-lg hover:bg-[#8B5647] transition-colors font-medium">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/* Book Details Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-gray-200">
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-1">Pages</p>
              <p className="font-semibold text-gray-900">{book.pages}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-1">Language</p>
              <p className="font-semibold text-gray-900">{book.language}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-1">Publisher</p>
              <p className="font-semibold text-gray-900">{book.publisher}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-500 text-sm mb-1">Format</p>
              <p className="font-semibold text-gray-900">{book.format}</p>
            </div>
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Customer Reviews
            </h2>
            <button
              onClick={() => setIsWritingReview(true)}
              className="px-4 py-2 bg-[#A66858] text-white rounded-lg hover:bg-[#8B5647] transition-colors"
            >
              Write a Review
            </button>
          </div>

          {/* Write Review Form */}
          {isWritingReview && (
            <WriteReviewForm onClose={() => setIsWritingReview(false)} />
          )}

          {/* Reviews List */}
          <ReviewSection reviews={reviews} totalReviews={book.totalRatings} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
