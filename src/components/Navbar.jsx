import "../styles/Navbar.css";
import { BsCart3 } from "react-icons/bs";
import companyLogo from "../assets/companyLogo.png";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const Navbar = () => {
	return (
		<nav className="Navbar">
			{/* Logo */}
			<section>
				<Link to="/">
					<img className="company-logo" src={companyLogo} alt="" />
				</Link>
			</section>

			{/* Links */}
			<ul className="nav-links">
				<CustomLink to="/">Home</CustomLink>
				<CustomLink to="/steaks">Steaks</CustomLink>
				<CustomLink to="/chicken">Chicken</CustomLink>
				<CustomLink to="/pork">Pork</CustomLink>
				<CustomLink to="/seafood">Seafood</CustomLink>
			</ul>

			{/* Cart */}
			<section className="cart-container">
				<Link to="cart">
					<BsCart3 size={32} color="white" />
				</Link>
				<span className="cart-count">0</span>
			</section>
		</nav>
	);
};

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });
	return (
		<li className={isActive ? "active" : ""}>
			<Link to={to} {...props}>
				{children}
			</Link>
		</li>
	);
}
export default Navbar;
