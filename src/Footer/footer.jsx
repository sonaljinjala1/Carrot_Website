
import React from 'react'
import './footer.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiMailSendLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { RiFacebookLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
    return (
        <section className='footerCopyright'>
            <div className='container'>
                <div className="row">
                    <div className="footer row">
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="logo">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/logo/logo.png" alt="" />
                            </div>
                            <p>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
                            <ul>
                                <li> <i><HiOutlineLocationMarker /></i> 51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</li>
                                <li><a href="#"> <i><RiMailSendLine /></i>example@email.com</a></li>
                                <li><a href="#"> <i><IoCallOutline /></i> +91 123 4567890</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Delivery Information</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms & Conditions</a></li>
                                <li><a href="#">contact Us</a></li>
                                <li><a href="#">Support Center</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 mb-4">
                            <h4>Category</h4>
                            <ul>
                                <li><a href="#">Dairy & Bakery</a></li>
                                <li><a href="#">Fruits & Vegetable</a></li>
                                <li><a href="#">Snack & Spice</a></li>
                                <li><a href="#">Juice & Drinks</a></li>
                                <li><a href="#">Chicken & Meat</a></li>
                                <li><a href="#">Fast Food</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <h4>Subscribe Our Newsletter</h4>
                            <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <span><FaTelegramPlane /></span>
                            </form>
                            <div className="social-media">
                                <span>
                                    <a href="#"><i><RiFacebookLine /></i></a>
                                </span>
                                <span>
                                    <a href="#"><i><FaXTwitter /></i></a>
                                </span>
                                <span>
                                    <a href="#"><i><FaDribbble /></i></a>
                                </span>
                                <span>
                                    <a href="#"><i><IoLogoInstagram /></i></a>
                                </span>
                            </div>
                            <div className="images">
                                <a href="#"><img src='https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/1.jpg' className='mx-1 rounded'></img></a>
                                <a href="#"><img src='https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/2.jpg' className='mx-1 rounded'></img></a>
                                <a href="#"><img src='https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/3.jpg' className='mx-1 rounded'></img></a>
                                <a href="#"><img src='https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/4.jpg' className='mx-1 rounded'></img></a>
                                <a href="#"><img src='https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/insta/5.jpg' className='mx-1 rounded'></img></a>
                            </div>
                        </div>
                    </div>


                    <div className="copyright">
                        <p>© <span>2024</span><a href="index.html"> Carrot</a>, All rights reserved.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
