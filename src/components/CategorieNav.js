import React, { useState } from "react";
import theme from "../theme/theme";

function CategoryNav() {
  const categories = {
  "DJ Mixer": [
    { name: "2 Channel Mixer", img: "https://images.unsplash.com/photo-1576149369018-cde95948fdcc?w=300" },
    { name: "4 Channel Mixer", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300" },
    { name: "Scratch Mixer", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
    { name: "Digital DJ Mixer", img: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=300" },
    // { name: "Club DJ Mixer", img: "https://images.unsplash.com/photo-1520174691701-bc555a3404c6?w=300" },
    { name: "Battle Mixer", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300" },
  ],

  "DJ Controller": [
    { name: "Beginner Controller", img: "https://images.unsplash.com/photo-1600497900863-2dfbeedb06a0?w=300" },
    { name: "Pro DJ Controller", img: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300" },
    { name: "Serato Controller", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300" },
    { name: "Rekordbox Controller", img: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=300" },
    // { name: "4 Deck Controller", img: "https://images.unsplash.com/photo-1520174691701-bc555a3404c6?w=300" },
    { name: "Performance Controller", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300" },
  ],

  "DJ Players": [
    { name: "CDJ Players", img: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300" },
    { name: "Media Players", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
    { name: "Standalone Players", img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=300" },
    { name: "Professional CDJ", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300" },
  ],

  "Microphones": [
    { name: "Wireless Mic", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=400" },
    { name: "Studio Mic", img: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=300" },
    { name: "Dynamic Mic", img: "https://images.unsplash.com/photo-1589903308904-1010c2294adc?w=300" },
    { name: "Podcast Mic", img: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300" },
  ],

  "Speakers": [
    { name: "DJ Subwoofer", img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300" },
    { name: "PA Speakers", img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300" },
    { name: "Studio Monitors", img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300" },
    { name: "Portable Speakers", img: "https://images.unsplash.com/photo-1580894908361-967195033215?w=300" },
  ],

  "DJ Accessories": [
    // { name: "Headphones", img: "https://images.unsplash.com/photo-1518441902112-45d7d2c3f4f5?w=300" },
    { name: "Deck Guards", img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300" },
    { name: "DJ Skins", img: "https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?w=300" },
    { name: "Laptop Stands", img: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=300" },
  ],
};
  const [active, setActive] = useState(null);

  return (
    <div className="relative">

      {/* CATEGORY BAR */}
      <div
        className="flex justify-center gap-10 py-3 text-sm font-medium"
        style={{ background: theme.colors.secondary }}
      >
        {Object.keys(categories).map((cat) => (
          <button
            key={cat}
            onMouseEnter={() => setActive(cat)}
            className="relative pb-2"
            style={{ color: theme.colors.text }}
          >
            {cat}

            {/* underline animation */}
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full transition ${
                active === cat ? "opacity-100" : "opacity-0"
              }`}
              style={{ background: theme.colors.accent }}
            />
          </button>
        ))}
      </div>

      {/* MEGA PANEL */}
      {active && (
        <div
          onMouseLeave={() => setActive(null)}
          className="absolute left-0 w-full py-8"
          style={{
            background: theme.colors.card,
            boxShadow: theme.shadow,
          }}
        >
          <div className="max-w-[1200px] mx-auto flex gap-8 justify-center">

            {categories[active].map((item, i) => (
              <div
                key={i}
                className="w-[180px] cursor-pointer group"
              >
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-[120px] w-full object-cover group-hover:scale-110 transition"
                  />
                </div>

                <p
                  className="text-sm mt-2 text-center"
                  style={{ color: theme.colors.text }}
                >
                  {item.name}
                </p>
              </div>
            ))}

          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryNav;