import React from 'react';
import './banner.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


const Banner = () => {
    return (
        <div>
            {/* <section className='section1'>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner">
                                <h5><span>100%</span> Organic Fruits</h5>
                                <h1>Explore fresh & <br></br>juicy fruits.</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                    beatae consequuntur.</p>
                                <div class="button">
                                    <a href="#" class="cr-button">
                                        shop now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="img">
                    <img src="src/img/2.png" alt="" width={"50px"} height={"50px"} />
                </div>
                <div className="img1">
                    <img src="src/img/4.png" alt="" width={"60px"} height={"60px"} />
                </div>
                <div className="img2">
                    <img src="src/img/5.png" alt="" width={"100px"} height={"100px"} />
                </div>
                <div className="img3">
                    <img src="src/img/3.png" alt="" width={"100px"} height={"100px"} />
                </div>
            </section> */}

            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={2000}>
                        <section className='section1'>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="banner">
                                            <h5><span>100%</span> Organic Fruits</h5>
                                            <h1>Explore fresh & <br></br>juicy fruits.</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                                beatae consequuntur.</p>
                                            <div class="button">
                                                <a href="#" class="cr-button">
                                                    shop now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="img">
                                <img src="src/img/2.png" alt="" width={"50px"} height={"50px"} />
                            </div>
                            <div className="img1">
                                <img src="src/img/4.png" alt="" width={"60px"} height={"60px"} />
                            </div>
                            <div className="img2">
                                <img src="src/img/5.png" alt="" width={"100px"} height={"100px"} />
                            </div>
                            <div className="img3">
                                <img src="src/img/3.png" alt="" width={"100px"} height={"100px"} />
                            </div>
                        </section>
                    </div>
                    <div className="carousel-item" data-bs-interval={2000}>
                        <section className='section1' style={{
                            background: "url(../src/img/banner.jpg", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center"
                        }}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="banner">
                                            <h5><span>100%</span>  Organic Vegetables</h5>
                                            <h1>The best way to <br></br>stuff your wallet.</h1>
                                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis
                                                beatae consequuntur.</p>
                                            <div class="button">
                                                <a href="#" class="cr-button">
                                                    shop now
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="img">
                                <img src="src/img/2.png" alt="" width={"50px"} height={"50px"} />
                            </div>
                            <div className="img1">
                                <img src="src/img/4.png" alt="" width={"60px"} height={"60px"} />
                            </div>
                            <div className="img2">
                                <img src="src/img/5.png" alt="" width={"100px"} height={"100px"} />
                            </div>
                            <div className="img3">
                                <img src="src/img/3.png" alt="" width={"100px"} height={"100px"} />
                            </div>
                        </section>
                    </div>

                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" style={{ marginRight: "30px" }} />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div >
    )
}

export default Banner;


