import React from "react";
import fakeData from "../../fakeData";
import { useState } from "react";
import { useEffect } from "react";
import { getDatabaseCart } from "../../utilities/databaseManager";
import ReviewItem from "../ReviewItem/ReviewItem";

const Review = () => {
	const [cart, setCart] = useState([]);
	useEffect(() => {
		const savedCart = getDatabaseCart();
		const productKey = Object.keys(savedCart);
		const cartProduct = productKey.map((key) => {
			const product = fakeData.find((pd) => pd.key == key);
			product.quantity = savedCart[key];
			return product;
		});
		setCart(cartProduct);
	}, []);

	return (
		<div>
			<h1>Order items review</h1>
			{cart.map((pd) => (
				<ReviewItem key={pd.key} product={pd}></ReviewItem>
			))}
		</div>
	);
};

export default Review;
