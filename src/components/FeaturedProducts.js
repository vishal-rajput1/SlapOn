import React from "react";

function FeaturedProducts() {

  const products = [
    {
      name: "DJ Mixer",
      price: "Rs. 29,999",
      image:
        "https://plus.unsplash.com/premium_photo-1726754423208-48e352458725?q=80&w=1189&auto=format&fit=crop",
      soldOut: true,
    },
    {
      name: "DJ Controller",
      price: "Rs. 29,999",
      image:
        "https://images.unsplash.com/photo-1600497900863-2dfbeedb06a0?w=600&auto=format&fit=crop&q=60",
    },
    {
      name: "Mic Setup",
      price: "Rs. 9,299",
      image:
        "https://plus.unsplash.com/premium_photo-1664195074882-a4913ee143cb?w=600&auto=format&fit=crop&q=60",
    },
    {
      name: "Amplifier",
      price: "Rs. 2,499",
      image:
        "https://plus.unsplash.com/premium_photo-1664699106027-470649013ee4?q=80&w=1170&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">

      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-6 mb-12">

        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            GET NOTICED
          </h1>

          {/* TABS */}
          <div className="flex gap-6 text-sm font-medium">
            <span className="cursor-pointer hover:text-blue-600">
              Latest Drops
            </span>
            <span className="cursor-pointer text-blue-600 border-b-2 border-blue-600 pb-1">
              Best Sellers
            </span>
            <span className="cursor-pointer hover:text-blue-600">
              Just Restocked
            </span>
          </div>

        </div>
      </div>

      {/* PRODUCTS */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((item, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden group"
          >

            {/* IMAGE */}
            <div className="relative overflow-hidden">

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-60 object-cover group-hover:scale-110 transition duration-500"
              />

              {item.soldOut && (
                <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                  SOLD OUT
                </span>
              )}

            </div>

            {/* CONTENT */}
            <div className="p-5 text-center">

              <h3 className="font-semibold text-lg text-gray-800">
                {item.name}
              </h3>

              <p className="text-gray-500 mt-1">{item.price}</p>

              {item.soldOut ? (
                <button className="mt-4 w-full bg-gray-300 text-gray-600 py-2 rounded-lg cursor-not-allowed">
                  Sold Out
                </button>
              ) : (
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  Add to Cart
                </button>
              )}

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;