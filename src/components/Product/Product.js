import React from "react";
import ReactDOM from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import "./Product.css";
import { Link } from "react-router-dom";

const Product = (props) => {
	// console.log(props);
	const { img, name, seller, price, stock, key } = props.product;
	return (
		<div className="product">
			<div>
				<img src={img} alt="" />
			</div>
			<div>
				<h2><Link to={"/product/"+key}>{name}</Link></h2>
				<br />
				<p>by: {seller}</p>
				<h4>Price: ${price}</h4>
				<p>
					<small>Only {stock} left - order soon</small>
				</p>
				{ props.showAddToCart == true && <button
					onClick={() => props.handleAddProduct(props.product)}
					className="add-to-cart"
				>
					<FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>Add to cart
				</button>}
			</div>
		</div>
	);
};

export default Product;
