import React from 'react'
import "../pages/index.css";
import { Link } from 'react-router-dom';

function Cards() {
    return (
        <>
            <Link to="/product-detail" className="card-links">
                <div className="cards">
                    <div className="image">
                        <img src="https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
                            alt="" />
                    </div>
                    <div className="card-content">
                        <p className="name">Lorem Ipsum Sit</p>
                        <p className="price">&#8377;559</p>
                        <p className="shipping">Includes Shipping Charges</p>
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
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Cards