import ProductCard from "../components/ProductCard";
import products from "../data/products"

const Steaks = () => {
    return (
        <div>
        <h1>Steaks</h1>
        <div className="product-list">
				{products.map((product) => (
					<ProductCard key={product.id} product={product}/>
				))}
			</div>	
            </div>	
    )
}

export default Steaks;