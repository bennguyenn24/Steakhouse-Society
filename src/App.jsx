import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartCard from "./components/CartCard";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Products from "./pages/Products";
import { CartProvider } from "./contexts/CartContext";

function App() {
    return (
        <div className="App">
            <CartProvider>
                <Navbar />
                <div className="pages-container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        {/* <Route path="/steaks" element={<Steaks />} /> */}
                        <Route
                            path="/steaks"
                            element={<Products productType="steaks" />}
                        />
                        <Route
                            path="/chicken"
                            element={<Products productType="chicken" />}
                        />
                        <Route
                            path="/pork"
                            element={<Products productType="pork" />}
                        />
                        <Route
                            path="/seafood"
                            element={<Products productType="seafood" />}
                        />
                        <Route
                            path="/cart"
                            element={
                                <CartCard
                                    // cartItems={cartItems}
                                    // handleAddProduct={handleAddProduct}
                                />
                            }
                        />
                    </Routes>
                </div>
            </CartProvider>
        </div>
    );
}

export default App;
