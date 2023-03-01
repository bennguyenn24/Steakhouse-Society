import React from "react";

const ProductCard = ({ product }) => {
	return (
		<div className="product-card">
			<img src={""} alt="" />
			<h2>{product.name}</h2>
			<p>{product.description}</p>
			<div className="product-price">{product.price}</div>
			<button>Add to cart</button>
		</div>
	);
};

export default ProductCard;
