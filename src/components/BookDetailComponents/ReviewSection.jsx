import { Star } from "lucide-react";

export default function ReviewSection({ reviews, totalReviews }) {
  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="bg-[#F5F5F5] rounded-lg p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-4">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-full bg-[#E8D5C4] flex items-center justify-center text-[#A66858] font-semibold flex-shrink-0">
              {review.avatar}
            </div>

            {/* Review Content */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {review.customerName}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {review.verified && "Verified Purchase · "}
                    {review.date}
                  </p>
                </div>

                {/* Rating Stars */}
                <div className="flex mt-2 sm:mt-0">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                </div>
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed">{review.review}</p>
            </div>
          </div>
        </div>
      ))}

      {/* See All Reviews Link */}
      <div className="text-center pt-4">
        <button className="text-[#A66858] hover:text-[#8B5647] font-medium">
          See all {totalReviews.toLocaleString()} reviews ›
        </button>
      </div>
    </div>
  );
}
