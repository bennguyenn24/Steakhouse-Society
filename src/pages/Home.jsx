import CarouselItem from "../components/CarouselItem";
import "../styles/Home.css";
import ProductCard from "../components/ProductCard";
import products from "../data/products"

const Home = () => {
	return (
		<div className="Home">
			<div className="home-header-container">
				<h2>Home of the Highest Quality Meats</h2>
				<CarouselItem />
			</div>
			<h3>Have some of our juiciest, leakin' Meat in your mouth</h3>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br/> Proin tristique mi eu augue maximus, in venenatis nibh venenatis. <br/>
			Praesent elit orci, porta sed arcu vel, pulvinar tempor dui.</p>
			<div className="product-list">
				{products.map((product) => (
					<ProductCard key={product.id} product={product}/>
				))}
			</div>		
		</div>
	);
};

export default Home;
