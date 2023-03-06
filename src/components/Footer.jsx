import "../styles/Footer.css";
import navIcon1 from "../assets/navIcon1.svg";
import navIcon2 from "../assets/navIcon2.svg";
import navIcon3 from "../assets/navIcon3.svg";

const Footer = () => {
	return (
		<footer id="footer" className="footer">
			<div className="footer-container">
				<section>
					<h4>SEE MORE OF MY PROJECTS</h4>
					<div className="social-icon">
						<a href="">
							<img src={navIcon1} alt="" />
						</a>
						<a href="">
							<img src={navIcon2} alt="" />
						</a>
						<a href="">
							<img src={navIcon3} alt="" />
						</a>
					</div>
				</section>
				{/* Location */}
				<section className="find-location">
					<h4>FIND OUR RESTAURANTS</h4>
					<p>
						123 Addy Way, Notacity, 98765 <br /> (123) 456-7890
					</p>
				</section>
				{/* Hours */}
				<section className="hours">
					<h4>WORKING HOURS</h4>
					<p>
						MONDAY THROUGH FRIDAY 9:00 - 24:00 <br /> SATURDAY & SUNDAY 12:00 - 21:00
					</p>
				</section>
			</div>

			<p>Copyright 2022. All Right Reserved</p>
		</footer>
	);
};

export default Footer;
