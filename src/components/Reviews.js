import React from "react";
import { FaStar } from "react-icons/fa";
import theme from "../theme/theme";

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Rahul Sharma",
      company: "Kings Printer",
      review:
        "Softcoders built an amazing e-commerce website for us. Their team delivered on time and the design is outstanding.",
      rating: 5,
    },
    {
      id: 2,
      name: "Anita Verma",
      company: "Bud & Tulips",
      review:
        "Excellent support and professional work. Our online flower store is now running smoothly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Singh",
      company: "HSF Foods",
      review:
        "The web application they built helped us manage orders and operations efficiently.",
      rating: 4,
    },
    {
      id: 4,
      name: "Ajay Rajput",
      company: "Shanmukha Agro",
      review:
        "Excellent support and professional work. Our online Products store is now running smoothly.",
      rating: 5,
    },
  ];

  return (
    <section
      className="py-10 px-4"
      style={{ background: theme.colors.secondary }}
    >
      <div className="max-w-[1200px] mx-auto">

        {/* TITLE */}
        <div className="text-center mb-8">
          <h2
            className="text-2xl font-bold"
            style={{ color: theme.colors.text }}
          >
            What Clients Are Saying About Us
          </h2>

          <p
            className="text-sm mt-2"
            style={{ color: theme.colors.textLight }}
          >
            We've served more than 350+ clients globally in the last 8+ years
            and retained 95% of them.
          </p>
        </div>

        {/* REVIEWS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="p-5 rounded-lg transition hover:-translate-y-1"
              style={{
                background: theme.colors.card,
                boxShadow: theme.shadow,
              }}
            >
              {/* QUOTE */}
              <div
                className="text-2xl mb-2"
                style={{ color: theme.colors.accent }}
              >
                ❝
              </div>

              {/* STARS */}
              <div className="flex gap-1 mb-2">
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 text-xs" />
                  ))}
              </div>

              {/* REVIEW TEXT */}
              <p
                className="text-xs leading-relaxed mb-4"
                style={{ color: theme.colors.textLight }}
              >
                {review.review}
              </p>

              {/* FOOTER */}
              
              <div className="border-t pt-2">
                 {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold"
                  style={{ background: theme.colors.accent }}
                >
                  {review.name.charAt(0)}
                </div>
                <h4
                
                  className="text-sm font-semibold"
                  style={{ color: theme.colors.text }}
                >
                  {review.name}
                </h4>

                <span
                  className="text-xs"
                  style={{ color: theme.colors.textLight }}
                >
                  {review.company}
                </span>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Reviews;