import React from "react";
import "./about.css"
import myImage from "../../images/background.png";
import {useNavigate} from "react-router-dom"


export const About = () =>{
    const navigate = useNavigate()
    return (
        <div className="about">
            <div className="mainimage">
                <img src={myImage} alt="description of image"/>
            </div>
            <div className="aboutus">
                <h1>About Us</h1>
                <p>Welcome to PoGo!, your trusted destination for buying and selling second-hand items! Our platform was born out of the idea that there's immense value in giving pre-loved items a new home, while also providing a convenient and sustainable way for people to declutter and find unique treasures.</p>
                <p>At PoGo!, our mission is to connect buyers and sellers in a seamless and secure environment. We believe in the power of reusing and reducing waste, contributing to a more eco-friendly lifestyle. Our platform empowers individuals to find gently used items at affordable prices, supporting a circular economy that benefits both our community and the environment.</p>
                <h1>Why Choose Us</h1>
                <ul>
                    <li>
                        <p><strong>Variety:</strong> Our platform boasts a diverse array of items, from fashion and accessories to electronics, home decor, and beyond. Whatever you're looking for, you're likely to find it here.</p>
                    </li>
                    <li>
                        <p><strong>Quality Assurance: </strong> We strive to maintain a high standard of quality for all items listed on our website. Our team carefully screens and moderates listings to ensure that each item meets our guidelines.</p>
                    </li>
                    <li>
                        <p><strong>Convenience: </strong>Buying and selling on our platform is easy and user-friendly. With our intuitive interface, you can list items for sale or find something you love with just a few clicks.</p>
                    </li>
                    <li>
                        <p><strong>Community:</strong> We're not just a marketplace; we're a community of like-minded individuals who value sustainability, affordability, and uniqueness. Join us in reducing our environmental footprint while discovering hidden gems.</p>
                    </li>
                    <li>
                        <p><strong>Secure Transactions:</strong> Our secure payment and communication systems provide a safe environment for both buyers and sellers. Your personal information and transactions are protected.</p>
                    </li>
                </ul>
                <button className="goToShop" onClick={()=>navigate("/shop")}>Go Shopping!</button>
                <br></br>
                <br></br>
            </div>
            <div className="joinUs">
                <div className="txtpart"></div>
                <h1>Join Us!</h1>
            </div>

        </div>
    
    );
}