import React, { useState } from 'react'
import './header.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { FaSearch } from "react-icons/fa";
import { getDatabase, ref, set } from "Firebase/database";
import { app, auth, googleAuthProvider } from '../Firestore';
import './header.css';
import { IoIosContact } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';


const handleclick = async () => {
    try {
        let user = await signInWithPopup(auth, googleAuthProvider);
    } catch (err) {
        console.log(err);
        return false;
    }
};

const Header = () => {
    const [name, setName] = useState("");
    const [phone_Number, setPhone_Number] = useState("");
    const [email_Address, setEmail_Address] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const db = getDatabase(app)
        let id = Math.floor(Math.random() * 100000);
        set(ref(db, `users/${id}`), {
            Name: name,
            Phone_Number: phone_Number,
            Email_Address: email_Address,
            Message: message
        })

        alert("Record Added Successfully...........");
        setName("");
        setPhone_Number("");
        setEmail_Address("");
        setMessage("");
        document.getElementById("closeModal").click();
    }

    return (
        <header>
            <div className="container">
                <div className="row ">
                    <div className="col-lg-12">
                        <div className="top-header">
                            <img src="src/img/logo.png" alt="" />

                            <form className="cr-search">
                                <input className='search-input' type="text" placeholder='Search for items...' />
                                <select className='form-select'>
                                    <option selected>All Categories</option>
                                    <option value="1">Mens</option>
                                    <option value="2">Womens</option>
                                    <option value="3">Electronics</option>
                                </select>
                                <button type="button" className='search-btn'>
                                    <p> <FaSearch /></p>
                                </button>
                            </form>


                            <div className="right-bar">
                                <ul className="navbar-nav">
                                    <li className='nav-item'>
                                        <a className=" cr-right-bar-item">
                                            <i class="fa-regular fa-user"></i>
                                            <span>Account</span>

                                            <ul className='dropdown-menu-top'>
                                                <li>
                                                    <a class="dropdown-item" href="#">Register</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item" href="#">checkout</a>
                                                </li>
                                                <li>
                                                    <a class="dropdown-item"    onClick={() => handleclick()}  href="#">Login</a>
                                                </li>
                                            </ul>
                                        </a>

                                        <a href="#" className='cr-right-bar-item'>
                                            <i class="fa-regular fa-heart"></i>
                                            <span>Wishlist</span>
                                        </a>
                                        <a href="#" className='cr-right-bar-item'>
                                            <i class="fa-solid fa-cart-shopping"></i>
                                            <span>Cart</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className=" bottom-header  d-flex  justify-content-between">
                            <div className="icon">
                                <img src="src/img/menus.png" alt="" width={'30px'} height={'30px'} />
                            </div>
                            <div className="menu-list  justify-content-center  ms-4">
                                <ul className='d-flex'>
                                    <li>
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Category <i class="fa-solid fa-chevron-down"></i></a>
                                        <div className="droup-down-menu">
                                            <ul>
                                                <li>
                                                    <a href="#">Shop Left  sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Shop  Rightsidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#">Full Width</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Products <i class="fa-solid fa-chevron-down"></i></a>
                                        <div className="droup-down-menu">
                                            <ul style={{ width: "200px" }}>
                                                <li>
                                                    <a href="#">Product Left  sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Product Rightsidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Product Full Width</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Pages <i class="fa-solid fa-chevron-down"></i></a>
                                        <div className="droup-down-menu">
                                            <ul style={{ width: "120px" }}>
                                                <li>
                                                    <a href="#">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Contact Us</a>
                                                </li>
                                                <li>
                                                    <a href="#">Cart</a>
                                                </li>
                                                <li>
                                                    <a href="#">Checkout</a>
                                                </li>
                                                <li>
                                                    <a href="#">Track Order</a>
                                                </li>
                                                <li>
                                                    <a href="#">Wishlist</a>
                                                </li>
                                                <li>
                                                    <a href="#">Faq</a>
                                                </li>
                                                <li>
                                                    <a href="#">Login</a>
                                                </li>
                                                <li>
                                                    <a href="#">Register</a>
                                                </li>
                                                <li>
                                                    <a href="#">Policy</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Blog <i class="fa-solid fa-chevron-down"></i></a>
                                        <div className="droup-down-menu">
                                            <ul style={{ width: "230px" }}>
                                                <li>
                                                    <a href="#">Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Right Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#">Full Width</a>
                                                </li>
                                                <li>
                                                    <a href="#">Detail Left Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#">Detail Right Sidebar</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Detail Full Width</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="#">Elements <i class="fa-solid fa-chevron-down"></i></a>
                                        <div className="droup-down-menu">
                                            <ul>
                                                <li>
                                                    <a href="#">Products</a>
                                                </li>
                                                <li>
                                                    <a href="#"> Typography</a>
                                                </li>
                                                <li>
                                                    <a href="#">Buttons</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                </ul>
                            </div>


                            {/* <div className='justify-content-end   p-0   m-0' >
                                <button type="button" onClick={() => handleclick()} className='btn btn-primary  p-0' style={{ backgroundColor: "transparent", border: "none", color: "black", fontSize: "17px", lineHeight: "10px", fontWeight: "500" }}><FcGoogle style={{ fontSize: "22px" }} /> Sign in</button>
                            </div> */}

                            {/* Firebase-realtime-database start */}
                            <div className="col-3 col-xl-3 d-xl-flex d-sm-none  justify-content-end  m-0">
                                <div className="contact">
                                    <ul className='d-flex justify-content-end'>
                                        <li>
                                            <button type="button" className="btn  p-0  pe-2" style={{
                                                paddingRight: "0px !important", backgroundColor: "transparent"
                                                , border: "none", color: "black", fontSize: "17px", lineHeight: "10px", fontWeight: "500"
                                            }} data-bs-toggle="modal" data-bs-target="#exampleModal   "> <IoIosContact style={{ fontSize: "25px", alignItems: "center", paddingTop: "0px !important" }} /> Contact
                                            </button>
                                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" >
                                                <div className="modal-dialog">
                                                    <div className="modal-content">
                                                        <div className="modal-header">
                                                            <h1 className="modal-title fs-5 p-2  fw-bold" id="exampleModalLabel">Add New Contact</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                                                        </div>
                                                        <form onSubmit={handleSubmit}>
                                                            <div className="modal-body  p-4  ">
                                                                <div className="mb-3">
                                                                    <label htmlFor="recipient-name" className="col-form-label">Name :</label>
                                                                    <input type="text" className="form-control" id="recipient-name" value={name} onChange={(e) => setName(e.target.value)} required />
                                                                </div>

                                                                <div className="mb-3">
                                                                    <label htmlFor="recipient-email" className="col-form-label">Email Address :</label>
                                                                    <input type="email" className="form-control" id="recipient-email" value={email_Address} onChange={(e) => setEmail_Address(e.target.value)} required />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="recipient-phone" className="col-form-label">Phone Number :</label>
                                                                    <input type="text" className="form-control" id="recipient-phone" value={phone_Number} onChange={(e) => setPhone_Number(e.target.value)} required />
                                                                </div>
                                                                <div className="mb-3">
                                                                    <label htmlFor="message-text" className="col-form-label">Message :</label>
                                                                    <textarea className="form-control" id="message-text" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                                                                </div>
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button type="button" className="btn btn-secondary" id="closeModal" data-bs-dismiss="modal">Close</button>
                                                                <button type="submit" className="btn btn-primary">Submit</button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* Firebase-realtime-database end*/}

                            <div className="calling  justify-content-end">
                                <i class="fa-solid fa-phone"></i>
                                <a href="#"> +123 ( 456 ) ( 7890 )</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header;
