import React from 'react';
import rose from '../../assets/roses-carton.jpg'
import './Footer.scss';
export default function Footer() {
    return(
        <footer>
            <div className="footer">
            <div className="container">
                <div className="row">
                <div className="section contact">
            <h3 className="section-title">Contact Us</h3>
            <ul>
                <li><i className="fas fa-map-marker-alt"></i> FIAMA Company</li>
                <li className="empty">Olaya, Riyadh</li>
                <li><i className="fas fa-headset"></i> +0123456789</li>
                <li><i className="fas fa-envelope-open"></i> LOREM@lorem.com</li>
            </ul>
            <h4 className="working">Working Hours</h4>
            <p><i className="far fa-calendar-alt"></i> Sunday - Thursday 08:00 - 17:00</p>
            </div>

            <div className="section our-company">
            <h3 className="section-title">Our Company</h3>
            <ul className="first-list">
                <li>Delivery</li>
                <li>Legal Notice</li>
                <li>Terms And Contidions</li>
                <li>About Us</li>
                <li>Secure Payment</li>
    
            </ul>
            <ul className="second-list">
                <li><i className="fab fa-twitter"></i></li>
                <li><i className="fab fa-facebook-f"></i></li>
                <li><i className="fab fa-whatsapp"></i></li>
                <li><i className="fab fa-instagram"></i></li>
            </ul>
            
            </div>

            <div className="section gallery">
            <h3 className="section-title">Latest Item</h3>
                <div className="img-box">
                <img src={rose} alt=""/>
                <div className="text">
                    <h4>Lorem ipsum dolor sit.</h4>
                <p>Lorem ipsum dolor Error facil expedita eaque sunt dolores.</p>
                </div>
                </div>
            
            </div>
                </div>
            </div>

            </div>
        <div className="copyright"> All Right Reserved. &copy; 2020 Made By <span>NOOR</span></div>
        </footer>
    );
}
