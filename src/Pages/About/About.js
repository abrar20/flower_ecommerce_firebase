import React from 'react'
import { Link } from 'react-router-dom';
import aboutImg from '../../assets/about-img.jpg';
import './about.scss';

export default function About() {
    return (
        <div className="about">
            <div className="container">
                <div className="row">
                    <div className="description">
                        <div className="des-content">
                        <h2>Welcome To <span>FIAMA</span> Store !</h2>
                        <p className="st-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque expedita reiciendis neque doloremque, ad id nostrum, odit deserunt vero labore dolorum qui numquam. Ipsam Vel eaque, neque doloremque, ad id nostrum.</p>
                        <p className="end-p">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eaque expedita reiciendis neque doloremque, ad id nostrum, odit deserunt vero labore dolorum qui numquam. Ipsam Vel eaque.
                        </p>
                        <Link to='/products'>Shop now</Link>
                        </div>
                    </div>
                    <div className="img-about">
                        <div className="img-contnet">
                            <img src= {aboutImg} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="statistic">
                <div className="container">
                    <div className="row">
                        <div className="stat">
                            <div className="stat-icon">
                                <span className="far fa-smile-beam"></span>
                            </div>
                            <div className="stat-title">
                                <h2>480
                                <span>Happy Clients</span>
                                </h2>
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-icon">
                                <span className="fas fa-shipping-fast"></span>
                            </div>
                            <div className="stat-title">
                                <h2>600
                                <span>Done Shipping</span>
                                </h2>
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-icon">
                                <span className="far fa-lightbulb"></span>
                            </div>
                            <div className="stat-title">
                                <h2>10
                                <span>Brands</span>
                                </h2>
                            </div>
                        </div>

                        <div className="stat">
                            <div className="stat-icon">
                                <span className="fas fa-certificate"></span>
                            </div>
                            <div className="stat-title">
                                <h2>150
                                <span>kind of Flower</span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
