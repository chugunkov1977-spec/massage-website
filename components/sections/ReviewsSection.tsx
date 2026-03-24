'use client';

interface Review {
  name: string;
  role: string;
  text: string;
  image: string;
}

const reviews: Review[] = [
  {
    name: 'Sarah Mitchell',
    role: 'Yoga Instructor',
    text: 'The PulseForce has completely transformed my recovery routine. The intensity is perfect for post-yoga muscle tension relief, and the portability means I can use it anywhere.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'James Chen',
    role: 'Marathon Runner',
    text: 'As a marathon runner, I love how quiet the motor is during my recovery sessions. The battery life is exceptional, lasting through multiple long runs.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Physical Therapist',
    text: 'I recommend PulseForce to my patients regularly. The adjustable speed settings allow for customized therapy, and the quiet operation is perfect for a therapeutic environment.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    name: 'Michael Brooks',
    role: 'CrossFit Athlete',
    text: 'The 4 speed settings are perfect for my training intensity. Whether I need deep tissue work or light recovery, PulseForce delivers every time.',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    name: 'Anna Kowalski',
    role: 'Office Professional',
    text: 'After sitting at my desk all day, PulseForce helps relieve the built-up tension in my neck and shoulders. It\'s become an essential part of my daily routine.',
    image: 'https://randomuser.me/api/portraits/women/5.jpg',
  },
  {
    name: 'David Park',
    role: 'Personal Trainer',
    text: 'This is an essential tool for my clients. The power and precision help them recover faster between training sessions, improving their overall performance.',
    image: 'https://randomuser.me/api/portraits/men/6.jpg',
  },
  {
    name: 'Lisa Thompson',
    role: 'Pilates Instructor',
    text: 'The lightweight design makes it easy to incorporate into my classes. Despite its small size, it delivers powerful results that my students love.',
    image: 'https://randomuser.me/api/portraits/women/7.jpg',
  },
  {
    name: 'Robert Kim',
    role: 'Basketball Coach',
    text: 'My team\'s recovery has improved dramatically since we started using PulseForce. The consistent performance and reliability make it a coach\'s dream.',
    image: 'https://randomuser.me/api/portraits/men/8.jpg',
  },
  {
    name: 'Maria Santos',
    role: 'Chiropractor',
    text: 'PulseForce complements my treatments perfectly. The precision and power help my patients maintain their adjustments between visits.',
    image: 'https://randomuser.me/api/portraits/women/9.jpg',
  },
];

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="rounded-2xl border border-gray-800 p-6 bg-gray-900/50 backdrop-blur-sm">
    <p className="text-gray-300 mb-4 leading-relaxed">"{review.text}"</p>
    <div className="flex items-center gap-3 mt-4">
      <img src={review.image} alt={review.name} width={40} height={40} className="w-10 h-10 rounded-full object-cover flex-shrink-0" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <div>
        <div className="font-medium">{review.name}</div>
        <div className="text-sm text-gray-400">{review.role}</div>
      </div>
    </div>
  </div>
);

export default function ReviewsSection() {
  // Create three columns with 3 reviews each
  const column1 = [reviews[0], reviews[1], reviews[2]];
  const column2 = [reviews[3], reviews[4], reviews[5]];
  const column3 = [reviews[6], reviews[7], reviews[8]];

  return (
    <section id="reviews" className="relative z-10 min-h-screen bg-black text-white flex flex-col">
      <div className="flex-1 flex items-center justify-center px-6 py-16">
        <div className="max-w-7xl w-full">
          {/* Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4">Customer Reviews</h2>
            <p className="text-xl text-gray-400">What our customers say</p>
          </div>

          {/* Reviews Container */}
          <div className="relative max-h-[740px] overflow-hidden">
            {/* Gradient Masks */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />

            {/* Columns */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Column 1 */}
              <div className="space-y-6 animate-scrollUp1">
                {[...column1, ...column1].map((review, index) => (
                  <ReviewCard key={`col1-${index}`} review={review} />
                ))}
              </div>

              {/* Column 2 - Hidden on mobile, visible on md+ */}
              <div className="hidden md:block space-y-6 animate-scrollUp2">
                {[...column2, ...column2].map((review, index) => (
                  <ReviewCard key={`col2-${index}`} review={review} />
                ))}
              </div>

              {/* Column 3 - Hidden until lg */}
              <div className="hidden lg:block space-y-6 animate-scrollUp3">
                {[...column3, ...column3].map((review, index) => (
                  <ReviewCard key={`col3-${index}`} review={review} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scrollUp1 {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scrollUp2 {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        @keyframes scrollUp3 {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scrollUp1 {
          animation: scrollUp1 15s linear infinite;
        }

        .animate-scrollUp2 {
          animation: scrollUp2 19s linear infinite;
        }

        .animate-scrollUp3 {
          animation: scrollUp3 17s linear infinite;
        }
      `}</style>
    </section>
  );
}
