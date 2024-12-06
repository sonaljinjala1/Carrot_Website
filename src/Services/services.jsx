
import React from 'react'
import './services.css'
import { RiRedPacketLine } from "react-icons/ri";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { RiMoneyDollarBoxLine } from "react-icons/ri";

const Services = () => {
  return (
    <section className='services'>
        <div className='container'>
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12 mb-3 mb-lg-0">
                    <div className="service-card text-center">
                        <div className="icon">
                            <i><RiRedPacketLine /></i>
                        </div>
                        <h5>Product Packing</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-3 mb-lg-0">
                    <div className="service-card text-center">
                        <div className="icon">
                            <i><TfiHeadphoneAlt /></i>
                        </div>
                        <h5>24X7 Support</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-3 mb-lg-0">
                    <div className="service-card text-center">
                        <div className="icon">
                            <i><TbTruckDelivery /></i>
                        </div>
                        <h5>Delivery in 5 Days</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 mb-3 mb-lg-0">
                    <div className="service-card text-center">
                        <div className="icon">
                            <i><RiMoneyDollarBoxLine /></i>
                        </div>
                        <h5>Payment Secure</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
