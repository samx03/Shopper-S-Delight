import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Cards from '../components/Cards';
import "./productStyle.css"
import { Minus } from 'react-feather';

function Products() {
    return (
        <>
            <Navbar />

            <section className="flex">
                {/* Filter-Section */}
                <aside className="filter-section">
                    <p className="title">Filters</p>
                    <form>
                        <div className="filter">
                            <p className="filter-title"><Minus color='#1A1A1E' size="24" />Products</p>
                            <div className="checkbox-container">
                                <input type="checkbox" id="product1" name="product1" value="grains" />
                                <label htmlFor="product1">Grains</label><br />
                                <input type="checkbox" id="product2" name="product2" value="Clothes" />
                                <label htmlFor="product2">Clothes</label><br />
                            </div>
                        </div>
                        <div className="filter">
                            <p className="filter-title"><Minus color='#1A1A1E' size="24" />Category</p>
                            <div className="checkbox-container">
                                <input type="checkbox" id="category1" name="category1" value="tshirts" />
                                <label htmlFor="category1">T-Shirts</label><br />
                                <input type="checkbox" id="category2" name="category2" value="Shirts" />
                                <label htmlFor="category2">Shirts</label><br />
                            </div>
                        </div>
                        <div className="filter">
                            <p className="filter-title"><Minus color='#1A1A1E' size="24" />Price</p>
                            <div className="checkbox-container">
                                <input type="checkbox" id="price1" name="price1" value="below500" />
                                <label htmlFor="price1">Below Rs.500</label><br />
                                <input type="checkbox" id="price2" name="price2" value="500to1000" />
                                <label htmlFor="price2">Rs.500-Rs.1500</label><br />
                                <input type="checkbox" id="price4" name="price4" value="Above1500" />
                                <label htmlFor="price4">Above Rs.1501</label><br />
                            </div>
                        </div>
                        <div className="filter">
                            <p className="filter-title"><Minus color='#1A1A1E' size="24" />Brands</p>
                            <div className="checkbox-container">
                                <input type="checkbox" id="brand1" name="brand1" value="CalvinKleinJeans" />
                                <label htmlFor="brand1">Calvin Klein Jeans</label><br />
                                <input type="checkbox" id="brand2" name="brand2" value="Denizen" />
                                <label htmlFor="brand2">Denizen from levis</label><br />
                            </div>
                        </div>
                        <input type="submit" value="Apply Filters" />
                    </form>
                </aside>

                {/* Products-section */}
                <section className="product-section">
                    <div className="search-box">
                        <input type="text" placeholder="Search..." />
                    </div>
                    <div className="product-container">
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                        <Cards />
                    </div>
                </section>
            </section>


            <Footer />
        </>
    )
}

export default Products