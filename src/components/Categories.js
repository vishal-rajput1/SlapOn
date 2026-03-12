import React from "react";
import theme from "../theme/theme";

function Categories() {
  const categories = [
    {
      name: "DJ Mixer",
      image:
        "https://static.vecteezy.com/system/resources/previews/036/393/156/large_2x/ai-generated-electronic-dance-music-edm-background-electro-sound-poster-techno-dance-banner-abstract-dj-music-cover-free-photo.jpeg",
    },
    {
      name: "DJ Controller",
      image:
        "https://thumbs.dreamstime.com/z/close-up-djs-controller-black-background-photo-generative-ai-close-up-djs-controller-black-background-photo-generative-284485373.jpg?w=992",
    },
    {
      name: "DJ Turntable",
      image:
        "https://th.bing.com/th/id/OIP.AG9ci3OCnZeSnHhL4CTtogHaEK?w=275&h=180&c=7&r=0&o=7",
    },
    {
      name: "DJ Players",
      image:
        "https://th.bing.com/th/id/OIP.dn8amDf_AyQyysl_O5PqQQHaE8?w=256&h=180&c=7&r=0&o=7",
    },
    {
      name: "Lighting Controllers",
      image: "https://m.media-amazon.com/images/I/817JXR6RWmS.jpg",
    },
  ];

  return (
    <section
      className="py-20 px-6"
      style={{ background: theme.colors.secondary }}
    >
      {/* HEADER */}
      <div className="max-w-[1200px] mx-auto text-center mb-14">
        <h2
          className="text-3xl md:text-4xl font-bold mb-3"
          style={{ color: theme.colors.text }}
        >
          Explore DJ Categories
        </h2>

        <p
          className="text-sm md:text-base"
          style={{ color: theme.colors.textLight }}
        >
          Discover premium DJ gear for professionals and beginners
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {categories.map((item, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group cursor-pointer"
            style={{ boxShadow: theme.shadow }}
          >

            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[180px] object-cover group-hover:scale-110 transition duration-500"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

            {/* CATEGORY NAME */}
            <div className="absolute bottom-4 left-0 right-0 text-center">
              <span
                className="px-4 py-2 text-sm font-semibold rounded-full"
                style={{
                  background: theme.colors.card,
                  color: theme.colors.text,
                }}
              >
                {item.name}
              </span>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Categories;