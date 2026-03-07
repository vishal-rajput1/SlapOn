import React from "react";

function FeaturedProducts() {

const products = [
{
name:"Dj mixer",
price:"Rs. 29,999",
image:"https://plus.unsplash.com/premium_photo-1726754423208-48e352458725?q=80&w=1189&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
soldOut:true
},
{
name:"Dj Controller",
price:"Rs. 29,999",
image:"https://images.unsplash.com/photo-1600497900863-2dfbeedb06a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGolMjBjb250cm9sbGVyfGVufDB8fDB8fHww"
},
{
name:"Mic Setup",
price:"Rs. 9,299",
image:"https://plus.unsplash.com/premium_photo-1664195074882-a4913ee143cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM2fHx8ZW58MHx8fHx8"
},
{
name:"Amplifier",
price:"Rs. 2,499",
image:"https://plus.unsplash.com/premium_photo-1664699106027-470649013ee4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}
];

return (

<section className="products-section">

<div className="section-header">

<h1>GET NOTICED</h1>

<div className="tabs">
<span>Latest Drops</span>
<span className="active">Best Sellers</span>
<span>Just Restocked</span>
</div>

</div>

<div className="products-grid">

{products.map((item,index)=>(

<div className="product-card" key={index}>

<div className="product-image">

<img src={item.image} alt={item.name}/>

{item.soldOut && <span className="sold-badge">SOLD OUT</span>}

</div>

<h3>{item.name}</h3>

<p className="price">{item.price}</p>

{item.soldOut ?

<button className="sold-btn">SOLD OUT</button>

:

<button className="cart-btn">ADD TO CART</button>

}

</div>

))}

</div>

</section>

)

}

export default FeaturedProducts;