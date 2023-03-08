import React from "react";
import "../styles/ProductCard.css"

const ProductCard = ({ product }) => {
	return (
		<div className="wrapper">
			<div className="product-img">
				<img src={product.img} alt="" />
			</div>
			<div className="product-info">
				<div className="product-text">
					<h2>{product.name}</h2>
					<p>{product.description}</p>
				</div>
				<div className="product-price-btn">
					${product.price}
					<button>Add to cart</button>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
