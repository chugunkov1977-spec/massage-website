'use client';

import { useState } from 'react';

interface Review {
  name: string;
  role: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Yoga Instructor',
    rating: 5,
    text: 'The PulseForce has completely transformed my recovery routine. The intensity is perfect for post-yoga muscle tension relief, and the portability means I can use it anywhere. Highly recommended!',
  },
  {
    name: 'James Rodriguez',
    role: 'Professional Athlete',
    rating: 5,
    text: 'As an athlete, I\'ve tried many massage devices. This one stands out for its power and precision. The battery life is exceptional, and it\'s become an essential part of my training regimen.',
  },
  {
    name: 'Emily Chen',
    role: 'Physical Therapist',
    rating: 5,
    text: 'I recommend PulseForce to my patients regularly. The adjustable speed settings allow for customized therapy, and the quiet operation is perfect for a therapeutic environment.',
  },
  {
    name: 'Marcus Johnson',
    role: 'Fitness Coach',
    rating: 5,
    text: 'My clients love this device. The build quality is outstanding, and it delivers consistent results. The ultra-quiet motor is a game-changer compared to other massage guns.',
  },
  {
    name: 'Lisa Wong',
    role: 'Wellness Enthusiast',
    rating: 5,
    text: 'Worth every penny. After a long day at work, this helps me unwind and release tension. The design is sleek, the performance is reliable, and customer service was excellent.',
  },
];

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentReview = reviews[currentIndex];

  return (
    <section id="reviews" className="relative z-10 min-h-screen bg-white text-black flex flex-col shadow-[0_-20px_60px_rgba(0,0,0,0.3)]">
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-4xl w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
            Customer Reviews
          </h2>

          {/* Review Card */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12 mb-8 min-h-[320px] flex flex-col justify-between">
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">
                  ★
                </span>
              ))}
            </div>

            {/* Review Text */}
            <p className="text-center text-gray-700 text-lg mb-8 flex-grow flex items-center justify-center">
              "{currentReview.text}"
            </p>

            {/* Reviewer Info */}
            <div className="text-center">
              <p className="font-semibold text-lg mb-1">{currentReview.name}</p>
              <p className="text-gray-600">{currentReview.role}</p>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <button
              onClick={handlePrevious}
              aria-label="Previous review"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-200"
            >
              ‹
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to review ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === currentIndex ? 'bg-black' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next review"
              className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-200"
            >
              ›
            </button>
          </div>

          {/* Review Counter */}
          <p className="text-center text-gray-600">
            {currentIndex + 1} / {reviews.length}
          </p>
        </div>
      </div>
    </section>
  );
}
