import React, { useState } from "react";
import fakeData from "../../fakeData";
import Product from "../../components/Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";
import { addToDatabaseCart } from "../../utilities/databaseManager";

const Shop = () => {
	const first10 = fakeData.slice(0, 10);
	const [product, setProduct] = useState(first10);
	const [cart, setCart] = useState([]);
	const handleAddProduct = (product) => {
		// console.log("product added", product);
		const newCart = [...cart, product];
		setCart(newCart);
		const count = newCart.filter((pd) => pd.key === product.key);
		addToDatabaseCart(product.key, count.length);
	};
	return (
		<div className="shop-main">
			<div className="product-container">
				{product.map((product) => (
					<Product
						showAddToCart={true}
						handleAddProduct={handleAddProduct}
						key={product.key}
						product={product}
					></Product>
				))}
			</div>
			<div className="cart-container">
				<Cart cart={cart}></Cart>
			</div>
		</div>
	);
};

export default Shop;
