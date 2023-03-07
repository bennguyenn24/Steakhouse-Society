import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import steakProducts from "../data/steakProducts"

const Steaks = () => {
    return (
        <div>
        <h1>Steaks</h1>
        <div className="product-list">
				{steakProducts.map((product) => (
					<ProductCard key={product.id} product={product}/>
				))}
			</div>	
            <Footer />
            </div>	
    )
}

export default Steaks;