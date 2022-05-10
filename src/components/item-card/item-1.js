import React from "react";
import "./item-card.css";
// import itemImage7 from "../../assets/images/Image 7.png";
// import itemImage8 from "../../assets/images/Image 8.png";
// import itemImage10 from "../../assets/images/Image 10.png";
import itemImage11 from "../../assets/images/Image 11.png";
// import itemImage12 from "../../assets/images/Image 12.png";
// import itemImage13 from "../../assets/images/Image 13.png";
// import itemImage14 from "../../assets/images/Image 14.png";
// import itemImage18 from "../../assets/images/Image 18.png";
// import itemImage20 from "../../assets/images/Image 20.png";
// import itemImage36 from "../../assets/images/Image 36.png";
export default function ItemCard1() {
    return (
        <div className="item-card">
            <div className="item-image-container">
                <img className="item-image" src={itemImage11} alt="item" />
            </div>
            <div className="item-details">
                <div className="item-title">
                    Don't Make Me Think
                </div>
                <div className="item-author">
                    by Steve Krug
                </div>
                <div className="item-price">
                    Rs. 1500
                </div>
                <div className="card-buttons">
                    <button className="add-cart-btn">ADD TO CART</button>
                    <button className="wishlist-btn">WISHLIST</button>
                </div>
            </div>
            
        </div>
        
    )
}