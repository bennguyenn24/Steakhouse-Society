import "../styles/Navbar.css";
import { BsCart3 } from "react-icons/bs";
import companyLogo from "../assets/companyLogo.png";

const Navbar = () => {
	return (
		<nav className="Navbar">
			{/* Logo */}
			<section>
				<a href="/">
					<img className="company-logo" src={companyLogo} alt="" />
				</a>
			</section>

			{/* Links */}
			<ul className="nav-links">
				<li>
					<a href="/">Home</a>
				</li>
				<li>
					<a href="/">Steaks</a>
				</li>
				<li>
					<a href="/">Chicken & Pork</a>
				</li>
				<li>
					<a href="/">Seafood</a>
				</li>
			</ul>

			{/* Cart */}
			<section className="cart-container">
				<BsCart3 size={32} color="white" />
				<span className="cart-count">6</span>
			</section>
		</nav>
	);
};

export default Navbar;
