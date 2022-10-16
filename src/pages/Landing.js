import React from 'react'
import Logo from '../images/Logo.svg';
import Pattern from '../images/Pattern.svg';
import HeroImg from '../images/hero-img.svg';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import './index.css'
import Navbar from '../components/Navbar';


function Landing() {
    let btns = document.querySelectorAll(".btn");
    btns.forEach(element => {
        element.addEventListener("click", function (e) {
            e.preventDefault();
            btns.forEach(element => element.classList.remove("activate"));
            this.classList.add("activate");
        })
    });
    return (
        <>
            <Navbar />
            {/* Hero Section  */}
            <section className="hero">
                <div className="left-container">
                    <div className="container">
                        <img src={Logo} alt="Logo" />
                        <p>Shop from variety of products</p>
                        <Link to="/products">Shop Now!</Link>
                    </div>
                    <div className="marketing">
                        <p><span>10% off</span>On all our new arrivals</p>
                        <div>
                            <p>Explore Now</p>
                            <img src={Pattern} alt="" />
                        </div>
                    </div>
                </div>
                <div className="right-container">
                    <img src={HeroImg} alt=""/>
                    <div className="statistics">
                        <div className="content">
                            <span>100+</span>Customers
                        </div>
                        <div className="content">
                            <span>10+</span>Brands
                        </div>
                        <div className="content">
                            <span>500+</span>Sales
                        </div>
                    </div>
                </div>
            </section>

            {/* Categories  */}
            <section className="categories">
                <div className="highlight">Choose The Best!</div>
                <div className="grand-child">Grains</div>
                <div className="parent">
                    <div className="children-1">Formals</div>
                    <div className="children-2">Casuals</div>
                </div>
            </section>

            {/* Products */}
            <section className="products">
                <div className="btn-container">
                    <a href="#" className="btn activate">All Products</a>
                    <a href='#' className="btn">Clothing</a>
                    <a href='#' className="btn">Grains</a>
                </div>
                <div className="product-container">
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                    <Cards />
                </div>
            </section>

            <Footer />
        </>
    )
}

export default Landing
