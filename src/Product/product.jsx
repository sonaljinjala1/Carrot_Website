
import React from 'react'
import './product.css'
import { FaStar } from "react-icons/fa6";
import { CiStar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";



const Product = () => {
    return (
        <div>
            <section className='product'>
                <div className='container'>
                    <div className="row ">

                        <div className="title text-center mb-4">
                            <h2>Popular Products</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                        </div>


                        <div className=" d-flex   justify-content-between">
                            <div className='col-xl-3 col-lg-4 col-12 mb-24'>
                                <div className="col-lg-12 col-sm-6 col-6 cr-product-box mb-24" >
                                    <div className="product-table" style={{ marginRight: "20px", marginTop: "15px" }}>
                                        <ul>
                                            <li><button> All  <i><FaArrowRight /></i></button></li>
                                            <li><button>Snack <i><FaArrowRight /></i></button></li>
                                            <li><button>Vegetable <i><FaArrowRight /></i> </button></li>
                                            <li><button>Fruit  <i><FaArrowRight /></i> </button></li>
                                            <li><button>Bakery  <i><FaArrowRight /></i> </button></li>

                                        </ul>
                                    </div>
                                </div>



                                <div className='col-lg-12 col-sm-6 col-6 cr-product-box banner-480 mb-24'>
                                    <div className="cubes">
                                        <img src="src/img/product-banner.jpg" alt="" width={"306px"} height={"460px"} />


                                        <div class="cr-ice-cubes-contain">
                                    <h4 class="title">Juicy </h4>
                                    <h5 class="sub-title">Fruits</h5>
                                    <span>100% Natural</span>
                                    <a href="shop-left-sidebar.html" class="cr-button">Shop Now</a>
                                </div>
                                    </div>
                                </div>

                            </div>

                            <div className=" main-box row  col-9  d-flex ">

                                <div className="col-sm-6 col-lg-3 p-2">
                                    <div className="box-1">
                                        <div className="img-box">
                                            <a href="#"><img src="src/img/1.jpg" width={"100%"} /></a>
                                        </div>
                                        <div className="text-box">
                                            <a href="#">
                                                <span>Vegetables</span><br />
                                                <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" />
                                                <span>(4.5)</span>
                                                <h3>Fresh organic villa farm lomon 500gm pack</h3>
                                                <p>$120<span>$123.25</span></p>
                                            </a>
                                            <div className="icon1">
                                                <a href="#">
                                                    <p><i className="fa-regular fa-eye" /></p>
                                                    <i className="fa-regular fa-heart" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3 p-2">
                                    <div className="box-1">
                                        <div className="img-box">
                                            <a href="#"><img src="src/img/9.jpg" width={"100%"} /></a>
                                        </div>
                                        <div className="text-box">
                                            <a href="#">
                                                <span>Snacks</span><br />
                                                <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                                <span>(5.0)</span>
                                                <h3>Best snakes with hazel nut pack 200gm</h3>
                                                <p>$145<span>$150</span></p>
                                            </a>
                                            <div className="icon1">
                                                <a href="#">
                                                    <p><i className="fa-regular fa-eye" /></p>
                                                    <i className="fa-regular fa-heart" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3 p-2">
                                    <div className="box-1">
                                        <div className="img-box">
                                            <a href="#"><img src="src/img/2.jpg" width={"100%"} /></a>
                                        </div>
                                        <div className="text-box">
                                            <a href="#">
                                                <span>Fruits</span><br />
                                                <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" />
                                                <span>(4.5)</span>
                                                <h3>Fresh organic apple 1kg simla marming</h3>
                                                <p>$120.25<span>$123.25</span></p>
                                            </a>
                                            <div className="icon1">
                                                <a href="#">
                                                    <p><i className="fa-regular fa-eye" /></p>
                                                    <i className="fa-regular fa-heart" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3 p-2">
                                    <div className="box-1">
                                        <div className="img-box">
                                            <a href="#"><img src="src/img/17.jpg" width={"100%"} /></a>
                                        </div>
                                        <div className="text-box">
                                            <a href="#">
                                                <span>Bakery</span><br />
                                                <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                                <span>(5.0)</span>
                                                <h3>Delicious white baked fresh bread and toast</h3>
                                                <p>$20<span>$22.10</span></p>
                                            </a>
                                            <div className="icon1">
                                                <a href="#">
                                                    <p><i className="fa-regular fa-eye" /></p>
                                                    <i className="fa-regular fa-heart" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3 p-2">
                                    <div className="box-1">
                                        <div className="img-box">
                                            <a href="#"><img src="src/img/11.jpg" width={"100%"} /></a>
                                        </div>
                                        <div className="text-box">
                                            <a href="#">
                                                <span>Snacks</span><br />
                                                <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                                <span>(5.0)</span>
                                                <h3>Sweet crunchy nut mix 250gm pack</h3>
                                                <p>$120.25<span>$123.25</span></p>
                                            </a>
                                            <div className="icon1">
                                                <a href="#">
                                                    <p><i className="fa-regular fa-eye" /></p>
                                                    <i className="fa-regular fa-heart" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3 p-2">
                                    <div className="box-1">
                                        <div className="img-box">
                                            <a href="#"><img src="src/img/3 (1).jpg" width={"100%"} /></a>
                                        </div>
                                        <div className="text-box">
                                            <a href="#">
                                                <span>Fruits</span><br />
                                                <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-regular fa-star" /><i className="fa-regular fa-star" />
                                                <span>(3.5)</span>
                                                <h3>Organic fresh venila farm watermelon 5kg</h3>
                                                <p>$50.30<span>$72.60</span></p>
                                            </a>
                                            <div className="icon1">
                                                <a href="#">
                                                    <p><i className="fa-regular fa-eye" /></p>
                                                    <i className="fa-regular fa-heart" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3 p-2">
                                    <div className="box-1">
                                        <div className="img-box">
                                            <a href="#"><img src="src/img/10.jpg" width={"100%"} /></a>
                                        </div>
                                        <div className="text-box">
                                            <a href="#">
                                                <span>Snacks</span><br />
                                                <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                                <span>(5.0)</span>
                                                <h3>Sweet crunchy nut mix 250gm pack</h3>
                                                <p>$120.25<span>$123.25</span></p>
                                            </a>
                                            <div className="icon1">
                                                <a href="#">
                                                    <p><i className="fa-regular fa-eye" /></p>
                                                    <i className="fa-regular fa-heart" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6 col-lg-3 p-2">
                                    <div className="box-1">
                                        <div className="img-box">
                                            <a href="#"><img src="src/img/17.jpg" width={"100%"} /></a>
                                        </div>
                                        <div className="text-box">
                                            <a href="#">
                                                <span>Fruits</span><br />
                                                <i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" /><i className="fa-solid fa-star" />
                                                <span>(5.0)</span>
                                                <h3>Organic fresh venila farm Apricot 1kg</h3>
                                                <p>$99<span>$120.90</span></p>
                                            </a>
                                            <div className="icon1">
                                                <a href="#">
                                                    <p><i className="fa-regular fa-eye" /></p>
                                                    <i className="fa-regular fa-heart" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>


                    </div>
                </div>
            </section >
        </div>
    )
}

export default Product;
