import Footer from "../components/Footer";
import productsData from "../data/productsData";
import ProductCard from "../components/ProductCard";

const ChickenPork = () => {
    return (
        <div>
        <h1>Chicken & Pork</h1>
        <div className="product-list">
				{productsData.chickenpork.map((product) => (
					<ProductCard key={product.id} product={product}/>
				))}
			</div>	
        <Footer />
        </div>
    )
}

export default ChickenPork;