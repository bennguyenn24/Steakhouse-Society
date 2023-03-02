import { Col, Container, Row } from "react-bootstrap";
import '../styles/Footer.css'
import navIcon1 from '../assets/navIcon1.svg'
import navIcon2 from '../assets/navIcon2.svg'
import navIcon3 from '../assets/navIcon3.svg'

const Footer = () => {
    return (
        <footer className="footer">
            <h4>See more of my projects</h4>
            <Container>
                <Row className="align-item-center">
                    <Col sm={6}>
                        <img src={''} alt="" />
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                            <a href=""><img src={navIcon1} alt="" /></a>
                            <a href=""><img src={navIcon2} alt="" /></a>
                            <a href=""><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>CopyRight 2022. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;