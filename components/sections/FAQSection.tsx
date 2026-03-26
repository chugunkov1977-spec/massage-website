'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What makes PulseForce PRO different from other massage guns?',
    answer:
      'PulseForce PRO features a powerful 3200 RPM brushless motor, ultra-quiet 45dB operation, and weighs only 350g. Unlike competitors, we combine professional-grade percussion therapy with a premium lightweight design that you can take anywhere.',
  },
  {
    question: 'How long does the battery last?',
    answer:
      'The 2500mAh lithium battery provides up to 6 hours of continuous use on a single charge. With typical daily use of 15-20 minutes, you can go weeks without needing to recharge.',
  },
  {
    question: 'Is PulseForce PRO suitable for professional use?',
    answer:
      'Absolutely. PulseForce PRO is trusted by physiotherapists, sports trainers, and chiropractors worldwide. The 4 adjustable speed settings allow precise control for both gentle recovery and deep tissue therapy.',
  },
  {
    question: 'What is included in the box?',
    answer:
      'Every PulseForce PRO comes with the massage gun, 4 interchangeable attachment heads (round, flat, fork, and bullet), a USB-C charging cable, a premium carrying case, and a user manual.',
  },
  {
    question: 'Do you offer a warranty?',
    answer:
      'Yes, every PulseForce PRO comes with a 2-year manufacturer warranty covering defects in materials and workmanship. We also offer a 30-day money-back guarantee if you are not completely satisfied.',
  },
  {
    question: 'How do I choose the right speed setting?',
    answer:
      'Start with Level 1 for warm-up and sensitive areas. Level 2 is great for daily recovery. Level 3 targets deep muscle tension. Level 4 is for intense therapy on large muscle groups. Listen to your body and adjust as needed.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-6 pt-10 pb-28">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center">Frequently Asked Questions</h2>
        <p className="text-center text-gray-400 mt-4">Everything you need to know about PulseForce PRO</p>

        <div className="mt-10 space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <button
                key={index}
                onClick={() => toggleItem(index)}
                className="w-full text-left border-b border-gray-800 py-5"
                aria-expanded={isOpen}
              >
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <span
                    className={`transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  >
                    +
                  </span>
                </div>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 mt-3' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}