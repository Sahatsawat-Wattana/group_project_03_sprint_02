import { useState } from "react";
import { Star } from "lucide-react";

export default function WriteReviewForm({ onClose }) {
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = [
    "Great Content",
    "Very Enjoyable",
    "Highly Recommended",
    "Worth Reading",
  ];

  const toggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );
  };

  const handleSubmit = () => {
    // TODO: Handle review submission
    console.log({ rating, reviewText, selectedTags });
    onClose();
  };

  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-6 border border-gray-200">
      {/* Rating Stars */}
      <div className="flex justify-center gap-2 mb-6">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            onClick={() => setRating(star)}
            onMouseEnter={() => setHoveredRating(star)}
            onMouseLeave={() => setHoveredRating(0)}
            className="transition-transform hover:scale-110"
          >
            <Star
              size={40}
              className={
                star <= (hoveredRating || rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }
            />
          </button>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedTags.includes(tag)
                ? "bg-[#A66858] text-white"
                : "bg-[#F5E6D3] text-[#A66858] hover:bg-[#E8D5C4]"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Review Text Area */}
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Write your review..."
        className="w-full h-32 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#A66858] resize-none mb-4"
      />

      {/* Action Buttons */}
      <div className="flex justify-center gap-3">
        <button
          onClick={handleSubmit}
          className="px-8 py-3 bg-[#A66858] text-white rounded-full hover:bg-[#8B5647] transition-colors font-medium"
        >
          Submit Review
        </button>
      </div>

      {/* Close Link */}
      <div className="text-right mt-4">
        <button
          onClick={onClose}
          className="text-[#A66858] hover:text-[#8B5647] text-sm font-medium"
        >
          Cancel &gt;
        </button>
      </div>
    </div>
  );
}
