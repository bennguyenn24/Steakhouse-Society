import Footer from "../components/Footer";
import productsData from "../data/productsData";
import ProductCard from "../components/ProductCard";

const Seafood = () => {
	return (
		<div>
			<h1>Seafood</h1>
			<div className="product-list">
                {productsData.seafood.map(( product ) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
			<Footer />
		</div>
	);
};

export default Seafood;
