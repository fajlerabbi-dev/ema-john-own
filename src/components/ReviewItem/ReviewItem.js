import React from "react";

const ReviewItem = (props) => {
	console.log(props);
	const { name, quantity } = props.product;
	return (
		<div className="product">
			<div className="review-item">
				<h2>{name}</h2>
				<p>Quantity: {quantity}</p>
                <button className="add-to-cart">Remove</button>
			</div>
		</div>
	);
};

export default ReviewItem;
