import React, { useState } from "react";
import { useCart } from "../contexts/CartContext";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
    const { onChange: setCart } = useCart();

    const [quantity, setQuantity] = useState(0);

    // console.log({...product, quantity: 100})

    const handleAddProduct = () => {
        // Push new item into the cart array
        setCart((currentCart) => [...currentCart, product]);
        // If there is a quantity, include it.
        // {
        // 	id: 1,
        // 	product: "Ribeye",
        // 	quantity: 2
        // }
    };

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

                {/* User Actions */}
                <div className="product-price-btn">
                    <span> ${product.price}</span>
                    <button onClick={() => handleAddProduct()}>
                        Add to cart
                    </button>
                    <div className="quantity-container">
                        <label htmlFor="quantity">Quantity</label>
                        <div className="quantity-input">
                            <button
                                className="quantity-button"
                                onClick={() => {
                                    if (quantity > 0) {
                                        setQuantity((quantity) => quantity - 1);
                                    }
                                }}
                            >
                                -
                            </button>
                            <span>{quantity}</span>
                            <button
                                className="quantity-button"
                                onClick={() =>
                                    setQuantity((quantity) => quantity + 1)
                                }
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
