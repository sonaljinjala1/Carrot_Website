
import React from 'react'
import './fresh.css'

const Card = () => {
  return (
    <section className='cards'  style={{marginBottom:"100px"}}>
        <div className='container'>
      <div className="row d-sm-flex justify-content-sm-center">
        <div className="col-lg-4 img  col-sm-12 col-md-6 mb-3 mb-lg-0">
           <div className="image-card card1">
                <h3>Fresh <br/> Snacks & Sweets</h3>
                <p><span className='percentage'>20%</span>off <span>on first order</span></p>
                <div className="shop">
                        <button className='rounded border-0'><a href="#">Shop Now</a></button>
                    </div>
           </div>
        </div>
        <div className="col-lg-4 img  col-sm-12 col-md-6 mb-3 mb-lg-0">
           <div className="image-card card2">
                <h3>Healthy  <br/>  Bakery Products</h3>
                <p><span className='percentage'>30%</span>off <span>on first order</span></p>
                <div className="shop">
                        <button className='rounded border-0'><a href="#">Shop Now</a></button>
                </div>
           </div>
        </div>
        <div className="col-lg-4 img  col-sm-12 col-md-6 mb-3 mb-lg-0 ">
           <div className="image-card card3">
                <h3>Fresh & healthy  <br/>  Organic Fruits</h3>
                <p><span className='percentage'>35%</span>off <span>on first order</span></p>
                <div className="shop">
                        <button className='rounded border-0'><a href="#">Shop Now</a></button>
                </div>
           </div>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Card;
