import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./productdetail.css"
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState } from 'react';
import Modal from '../components/Modal'
import { useMoralis } from "react-moralis";

function ProductDetail() {
    const [show, setShow] = useState(false);
    const { chainId } = useMoralis();
    return (
        <>
            <Navbar />
            <section className="details-section">
                <div className="slider">
                    <div className="img-slider">
                        <OwlCarousel items={1}
                            className="owl-theme"
                            loop
                            margin={8} >
                            <div className='item'><img src="https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                                alt="" /></div>
                            <div className='item'><img src="https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                                alt="" /></div>
                        </OwlCarousel>
                    </div>
                </div>
                <div className="detail-container">
                    <div className="general">
                        <p className="title">Lorem Ipsum Sit</p>
                        <div className="ratings">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z"
                                    fill="#FFD700" />
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z"
                                    fill="#FFD700" />
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z"
                                    fill="#FFD700" />
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z"
                                    fill="#FFD700" />
                            </svg>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10 0L13.09 6.58254L20 7.64458L15 12.7655L16.18 20L10 16.5825L3.82 20L5 12.7655L0 7.64458L6.91 6.58254L10 0Z"
                                    fill="#FFD700" />
                            </svg>
                        </div>
                        <p className="price">&#8377;559</p>
                        <p className="shipping">Includes Shipping Charges</p>
                    </div>
                    <div className="size-container">
                        <p className="title">Select Size</p>
                        <form action="#">
                            <input type="submit" value="M" />
                            <input type="submit" value="L" />
                            <input type="submit" value="XL" />
                        </form>
                    </div>
                    {/* <a href="/" className='buy-btn'> Buy Now</a> */}
                    {chainId === "0x13881" &&
                        <button className='buy-btn' onClick={() => setShow(true)}>Buy Now!</button>
                    }

                    <Modal title="Purchase Product" onClose={() => setShow(false)} show={show} />
                    <div className="product-details">
                        <p className="title">Product Details</p>
                        <p>Name: lorem ipsum sit</p>
                        <p>Fabric: Cotton</p>
                        <p>Sleeve Length: Long Sleeves</p>
                        <p>Sizes:</p>
                        <p>M (Chest Size: 38 In, Length Size: 28In)</p>
                        <p>L (Chest Size: 40 In, Length Size: 30In)</p>
                        <p>XL (Chest Size: 42 In, Length Size: 32In)</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan porta nunc, ullamcorper nunc
                            convallis
                            nullam volutpat rhoncus potenti. Iaculis at massa scelerisque in et vel risus cursus bibendum.
                            Potenti
                            in nec dignissim lorem ac.
                        </p>
                        <p>Country Of Origin: India</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ProductDetail