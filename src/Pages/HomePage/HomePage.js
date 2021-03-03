import React from 'react'
import {Link} from 'react-router-dom';
import banner from '../../assets/banner.jpg';
import camella from '../../assets/camella.png';
import BERGAMOT from '../../assets/ber.png';
import BOTTLEBRUSH from '../../assets/bottl.png';
import selling from '../../assets/selling.png';
import hurry from '../../assets/harry.png'

import './Home.scss';

export default function HomePage() {
    return (
        <div className="home">
            
            <main>
                <div className="banner" style={{backgroundImage: `url(${banner})`}}>
                    <div className="container">
                    <div className="banner-content">
                        <h3>Fresh Flowers</h3>
                        <h1>For All Occasions!</h1>
                        <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, magni.</h5>
                        <Link to="/products">shop Now</Link>
                    </div>
                    </div>
                </div>
                <div className="banner-area">
                    <div className="container">
                        <div className="banner-wrap">
                            <div className="row">
                                <div className="banner-sqr">
                                    <div className="single-banner img-zoom">
                                        <a href="#">
                                            <img src={camella}/>
                                        </a>
                                        <div className="banner-sq-content">
                                            <h4>Camella</h4>
                                            <Link to="/products">shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-sqr">
                                    <div className="single-banner img-zoom">
                                        <a href="#">
                                            <img src={BERGAMOT}/>
                                        </a>
                                        <div className="banner-sq-content">
                                        <h4>BERGAMOT</h4>
                                        <Link to="/products">shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="banner-sqr">
                                    <div className="single-banner img-zoom">
                                        <a href="#">
                                            <img src={BOTTLEBRUSH}/>
                                        </a>
                                        <div className="banner-sq-content">
                                            <h4>BOTTLEBRUSH</h4>
                                            <Link to="/products">shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="best-selling">
                    <div className="container">
                        <div className="best-selling-content">
                            
                            <div className="selling-img">
                                <img src={selling} alt="best-selling"/>
                            </div>
                            <div className="selling-content">
                                <img src={hurry}/>
                                <h2>Hot Deal ! Sale Up To
                                    <span> 20% Off</span>
                                </h2>
                                <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, repudiandae provident ipsam illo velit cupiditate minima cumque fugiat corporis impedit ipsa quasi cum fuga.
                                </p>
                                <Link to="/products">shop Now</Link>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </main>
            
            
        </div>
    )
}
