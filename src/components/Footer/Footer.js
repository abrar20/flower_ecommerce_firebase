import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {fetchFooterProductStart} from '../../redux/Products/products.actions';
import './Footer.scss';

const mapState = ({ productsData }) => ({
    footerProduct: productsData.footerProduct,
  });
export default function Footer() {
    const {footerProduct} = useSelector(mapState);

    const dispatch =useDispatch();

    useEffect(()=>{
        dispatch(fetchFooterProductStart(1));
    },[]);
    let limitProduct=null;
    
    if(Array.isArray(footerProduct)) limitProduct = footerProduct.map((product, pos) => {
        const { productThumbnail, productName, productDesc, documentID } = product;
        if (!productThumbnail || !productName  || !productDesc || !documentID ) return;

        return (
            <React.Fragment key={pos}>
            <Link to={`/product/${documentID}`}>
            <div className="img-box" >
                <img src={productThumbnail} alt=""/>
                <div className="text">
                <h4>{productName} </h4>
                <p>{productDesc}</p>
                </div>
                </div>
            </Link>
            </React.Fragment>
        );
        });
    

    return(
        <footer>
            <div className="footer">
            <div className="container">
                <div className="row">
                <div className="section contact-footer">
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
                        {limitProduct}
                </div>
                </div>
            </div>

            </div>
        <div className="copyright"> All Right Reserved. &copy; 2021 Made By <span>ABRAR</span></div>
        </footer>
    );
}
