import React, { useState } from "react";
import fakeData from "../../fakeData";
import Product from "../../components/Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";

const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [product, setProduct] = useState(first10);
    return (
        <div className="shop-main">
            <div className="product-container">
                {product.map((product) => (
                    <Product key={product.key} product={product}></Product>
                ))}
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Shop;
