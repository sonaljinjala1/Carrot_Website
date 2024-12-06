
import React from 'react';
import './popular.css';
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";


const Popular = () => {
    return (
        <section className='organic'>
            <div className='container'>
                <div className="row">
                    <div className="product-content organic row d-flex justify-content-between">
                        <div className="col-lg-2 col-sm-12 col-md-6 mb-3 mb-lg-0">
                            <div className="card">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h6>Vegetables</h6>
                                    <i><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></i>
                                    <p>Fresh organic villa farm lomon 500gm pack</p>
                                    <span className='price'>$120.25 <span className='oldPrice'>$123.25</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-12 col-md-6 mb-3 mb-lg-0">
                            <div className="card">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/9.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h6>Vegetables</h6>
                                    <i><FaStar /><FaStar /><FaStar /><FaStar /><CiStar /></i>
                                    <p>Best snakes with hazel nut mix pack 200gm</p>
                                    <span className='price'>$100.00 <span className='oldPrice'>$123.25</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-sm-12 col-md-6 mb-3 mb-lg-0">
                            <div className="card">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg" className="card-img-top" alt="..." />
                                <div className="card-body text-center">
                                    <h6>Vegetables</h6>
                                    <i><FaStar /><FaStar /><FaStar /><FaStar /><FaStar/></i>
                                    <p>Sweet snakes crunchy nut mix 250gm pack</p>
                                    <span className='price'>$100.25 <span className='oldPrice'>$123.25</span></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 col-sm-12 col-md-6 mb-3 mb-lg-0">
                            <div className="vegitables d-flex justify-content-end"  >
                                <div className="col-lg-6 veg-text">
                                    <h4>Organic & Healthy <br />  Vegetables</h4>
                                    <h6><span>25%</span>OFF</h6>
                                    <div className="shop">
                                        <button className='rounded border-0'><a href="#">Shop Now</a></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Popular;
