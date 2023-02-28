import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import homeimg1 from "../assets/homeimg1.jpg";
import homeimg2 from "../assets/homeimg2.jpg";
import homeimg3 from "../assets/homeimg3.jpg";
import homeimg4 from "../assets/homeimg4.jpg";
import homeimg5 from "../assets/homeimg5.png";

const CarouselItem = () => {
	return (
		<Carousel
			showArrows={true}
			infiniteLoop
			autoPlay
			interval={3000}
			centerMode={true}
			centerSlidePercentage={100}
		>
			<div>
				<img src={homeimg5} />
			</div>
			<div>
				<img src={homeimg2} />
			</div>
			<div>
				<img src={homeimg3} />
			</div>
			<div>
				<img src={homeimg4} />
			</div>
		</Carousel>
	);
};
export default CarouselItem;
