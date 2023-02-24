import "../styles/Navbar.css"

const Navbar = () => {
	return (
		<nav className="Navbar">
			{/* Logo */}
			<section>
				<h1>LOGO</h1>
			</section>
			{/* Links */}
			<ul className="nav-links">
				<li>Steaks</li>
				<li>Meats</li>
				<li>Chicken & Pork</li>
				<li>Seafood</li>
			</ul>
			{/* Cart */}
      <section>
        <span>CART</span>
      </section>
		</nav>
	);
};

export default Navbar;
