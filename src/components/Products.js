import React, { useState } from "react";
// import "./Products.css";
import { FaHeart, FaEye } from "react-icons/fa";

function Products() {

const [popup,setPopup] = useState(null)

const products = [
{
name:"DJ Controller Pro",
price:"Rs. 29,999",
image1:"https://picsum.photos/300/300?1",
image2:"https://picsum.photos/300/300?11"
},
{
name:"Studio Headphones",
price:"Rs. 4,999",
image1:"https://picsum.photos/300/300?2",
image2:"https://picsum.photos/300/300?22"
},
{
name:"DJ Mixer",
price:"Rs. 12,999",
image1:"https://picsum.photos/300/300?3",
image2:"https://picsum.photos/300/300?33"
},
{
name:"DJ Speakers",
price:"Rs. 18,999",
image1:"https://picsum.photos/300/300?4",
image2:"https://picsum.photos/300/300?44"
}
];

return (

<section className="products-section">

<h2>BEST SELLERS</h2>

{/* HORIZONTAL SCROLL */}

<div className="product-slider">

{products.map((item,index)=>(

<div className="product-card" key={index}>

<div className="image-box">

<img src={item.image1} className="img1"/>
<img src={item.image2} className="img2"/>

{/* ICONS */}

<div className="card-icons">

<FaHeart className="wishlist"/>

<FaEye
className="quickview"
onClick={()=>setPopup(item)}
/>

</div>

</div>

<h3>{item.name}</h3>

<p>{item.price}</p>

<button className="cart-btn">ADD TO CART</button>

</div>

))}

</div>

{/* QUICK VIEW POPUP */}

{popup && (

<div className="popup">

<div className="popup-content">

<img src={popup.image1}/>

<h2>{popup.name}</h2>

<p>{popup.price}</p>

<button className="cart-btn">Add to Cart</button>

<button
className="close-btn"
onClick={()=>setPopup(null)}
>
Close
</button>

</div>

</div>

)}

</section>

)

}

export default Products