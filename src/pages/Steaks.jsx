import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import productsData from "../data/productsData"

const Steaks = () => {
    return (
        <div>
        <h1>Steaks</h1>
        <div className="product-list">
				{productsData.steaks.map((product) => (
					<ProductCard key={product.id} product={product}/>
				))}
			</div>	
            <Footer />
            </div>	
    )
}

export default Steaks;