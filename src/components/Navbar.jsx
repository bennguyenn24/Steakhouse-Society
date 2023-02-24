import "../styles/Navbar.css";
import { BsCart3 } from "react-icons/bs";
import companyLogo from "../assets/companyLogo.png"

const Navbar = () => {
	return (
		<nav className="Navbar">
			{/* Logo */}
			<section>
				<img className="company-logo" src={companyLogo} alt="" />
			</section>

			{/* Links */}
			<ul className="nav-links">
				<li>Steaks</li>
				<li>Meats</li>
				<li>Chicken & Pork</li>
				<li>Seafood</li>
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
