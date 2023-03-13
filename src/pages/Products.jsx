import productsData from "../data/productsData"
import ProductCard from "../components/ProductCard"
import Footer from "../components/Footer"

const ProductsPage = ({productType}) => {
    return (
        <div>
        <h1>{productType.toUpperCase()}</h1>
        <div className="product-list">
				{productsData[productType].map((product) => (
					<ProductCard key={product.id} product={product}/>
				))}
			</div>	
            <Footer />
            </div>	
    )
}

export default ProductsPage