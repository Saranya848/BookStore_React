import React from "react";
import "./book-list.css";
import ItemCard1 from "../item-card/item-1";
import ItemCard2 from "../item-card/item-2";
import ItemCard3 from "../item-card/item-3";
import ItemCard4 from "../item-card/item-4";
import ItemCard5 from "../item-card/item-5";
import ItemCard6 from "../item-card/item-6";
import ItemCard7 from "../item-card/item-7";
import ItemCard8 from "../item-card/item-8";
import ItemCard9 from "../item-card/item-9";
import ItemCard10 from "../item-card/item-10";
import ItemCard11 from "../item-card/item-11";
import ItemCard12 from "../item-card/item-12";

export default function BookList(){
    return(
        <div className="main-content">
            <div className="body-header">
                <div className="title-text">
                    <div className="page-title">Books</div>
                    <div className="items-count">(12 Items)</div>
                </div>
                <div className="sort-container">
                    <select className="sort-options" name="city" id="city" value="summa" >
                        <option hidden defaultValue="Sort by relevance">Sort by relevance</option>
                        <option value="Price : Low to High">Price : Low to High</option>
                        <option value="Price : High to Low">Price : High to Low</option>
                        <option value="Newest Arrival">Newest Arrival</option>
                    </select>
                </div>
            </div>
            <div className="body-list">
                <ItemCard1 />
                <ItemCard2/>
                <ItemCard3/>
                <ItemCard4/>
                <ItemCard5/>
                <ItemCard6/>
                <ItemCard7/>
                <ItemCard8/>
                <ItemCard9/>
                <ItemCard10/>
                <ItemCard11/>
                <ItemCard12/>
            </div>
        </div>
    );
}