import React from "react";

const CartContext = React.createContext(null);

const CartProvider = ({ children }) => {
    const [cart, setCart] = React.useState([]);

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {children}
        </CartContext.Provider>
    );
};

const useCart = () => {
    const [cart, setCart] = React.useContext(CartContext);

    const handleCart = (cart) => {
        setCart(cart);
    };

    return { value: cart, onChange: handleCart };
};

export { CartProvider, useCart };
