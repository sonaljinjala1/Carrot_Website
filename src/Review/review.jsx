
import React from 'react'
import './review.css'
import { MdOutlineStar } from "react-icons/md";
import { MdOutlineStarBorder } from "react-icons/md";

const Review = () => {
    return (
        <section className='review'>
            <div className='container'>
                <div className="row">
                    <div className="title text-center d-flex justify-content-center px-5">
                        <div className="col-lg-6">
                            <h2>Great Words From People</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.</p>
                        </div>
                    </div>

                    
                    <div className="review-content row d-flex justify-content-center">
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5 mb-lg-0 px-0">
                        <div className="review-card mx-3">
                            <span>Co Founder</span>
                            <h5>Stephen Smith</h5>
                            <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                            <i><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></i>
                            <div className="pro-pic">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5 mb-lg-0 px-0">
                        <div className="review-card mx-3">
                            <span>Manager</span>
                            <h5>Lorem Robinson</h5>
                            <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                            <i><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStarBorder /></i>
                            <div className="pro-pic">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 mb-5 mt-lg-0 px-0">
                        <div className="review-card mx-3">
                            <span>Team Leader</span>
                            <h5>Saddika Alard</h5>
                            <p>“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”</p>
                            <i><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /><MdOutlineStar /></i>
                            <div className="pro-pic">
                                <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/testimonial/3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Review
