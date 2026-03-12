import React from "react";

function MediaGallery() {
  const productImages = [
    "https://th.bing.com/th/id/OIP.dn8amDf_AyQyysl_O5PqQQHaE8?w=276&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
    "https://i.ytimg.com/vi/OkNcofpl_kY/maxresdefault.jpg",
    "https://images.unsplash.com/photo-1576149369018-cde95948fdcc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGRqJTIwY29udHJvbGxlcnN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1600497900863-2dfbeedb06a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://plus.unsplash.com/premium_photo-1664195074882-a4913ee143cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0",
    "https://th.bing.com/th/id/OIP.nPqhaQ1i_o59oE71icyZQwHaEO?w=264&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Media Gallery
          </h2>
          <p className="text-gray-500 mt-2">
            Explore our latest DJ equipment and studio visuals
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {productImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-md group cursor-pointer"
            >
              <img
                src={img}
                alt={`gallery-${index}`}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default MediaGallery;