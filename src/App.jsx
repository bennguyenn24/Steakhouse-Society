import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CartCard from "./components/CartCard";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Products from "./pages/Products";

function App() {
	const [cartItems, setCartItems] = useState([]);

	const handleAddProduct = (product, handleAddProduct) => {
		const ProductExist = cartItems.find((product) => item.id === product.id);
		if (ProductExist) {
			setCartItems(
				cartItems.map((item) =>
					item.id === product.id
						? { ...ProductExist, quantity: ProductExist.quantity + 1 }
						: item
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, quantity: 1 }]);
		}
	};

	return (
		<div className="App">
			<Navbar />
			<div className="pages-container">
				<Routes>
					<Route path="/" element={<Home />} />
					{/* <Route path="/steaks" element={<Steaks />} /> */}
					<Route path="/steaks" element={<Products productType="steaks"/>} />
					<Route path="/chicken" element={<Products productType="chicken"/>} />
					<Route path="/pork" element={<Products productType="pork"/>} />
					<Route path="/seafood" element={<Products productType="seafood"/>} />
					<Route
						path="/cart"
						element={
							<CartCard cartItems={cartItems} 
              handleAddProduct={handleAddProduct} />
						}
					/>
				</Routes>
			</div>
		</div>
	);
}

export default App;
