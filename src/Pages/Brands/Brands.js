import React from 'react'
import bannerBrands from '../../assets/brands.jpg';
import klue from '../../assets/Klue.jpg';
import zija from '../../assets/zija.jpg';
import sahara from '../../assets/sahara.jpg';
import theFlowerShop from '../../assets/theFlowerShop.jpg';
import sincerely from '../../assets/sincerely.jpg';
import {Link} from 'react-router-dom';
import './brands.scss';
export default function Brands() {
    return (
        <div className="brands">
            <div className="brands-banner" style={{backgroundImage: `url(${bannerBrands})`}}>
                <div className="container">
                    <h2>Brands</h2>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="brand-sqr">
                        <div className="brand-img">
                            <img src={sahara} />
                        </div>
                        <div className="brand-content">
                            <h4>sahara flowers</h4>
                            <div className="brand-action">
                                <Link><i className="fab fa-facebook-f"></i></Link>
                                <Link><i className="fab fa-twitter"></i></Link>
                                <Link><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>

                    <div className="brand-sqr">
                        <div className="brand-img">
                            <img src={zija} />
                        </div>
                        <div className="brand-content">
                            <h4>zija flowers</h4>
                            <div className="brand-action">
                                <Link><i className="fab fa-facebook-f"></i></Link>
                                <Link><i className="fab fa-twitter"></i></Link>
                                <Link><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="brand-sqr">
                        <div className="brand-img">
                            <img src={theFlowerShop} />
                        </div>
                        <div className="brand-content">
                            <h4>the flower shop</h4>
                            <div className="brand-action">
                                <Link><i className="fab fa-facebook-f"></i></Link>
                                <Link><i className="fab fa-twitter"></i></Link>
                                <Link><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="brand-sqr">
                        <div className="brand-img">
                            <img src={klue} />
                        </div>
                        <div className="brand-content">
                            <h4>Klue gifts</h4>
                            <div className="brand-action">
                                <Link><i className="fab fa-facebook-f"></i></Link>
                                <Link><i className="fab fa-twitter"></i></Link>
                                <Link><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="brand-sqr">
                        <div className="brand-img">
                            <img src={sincerely} />
                        </div>
                        <div className="brand-content">
                            <h4>sincerely florist</h4>
                            <div className="brand-action">
                                <Link><i className="fab fa-facebook-f"></i></Link>
                                <Link><i className="fab fa-twitter"></i></Link>
                                <Link><i className="fab fa-instagram"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
