import React from "react";
import {Link} from "react-router-dom"
import {ShoppingCart} from "phosphor-react"
import "./navbar.css";
import myImage from "../images/logo2.png"
import {NewGoods, Bundles, OurDesign, Others} from "./menu";


export const Navbar = () =>{

    return (
        <div className="navbar">
            
            <div className="topBar">
                
                <div className="dropdown">
                    <div className="logo">
                        <Link to='/'>
                            <img className="image" src={myImage} alt="Footer Icon"/>
                        </Link>
                    </div>
                    <div className="dropitems">New Goods
                    <NewGoods />
                    </div>

                    <div className="dropitems">Bundles
                    <Bundles />
                    </div>

                    <div className="dropitems">Our Design
                    <OurDesign />
                    </div>

                    <div className="dropitems">Others
                    <Others />
                    </div>
                </div>
                
            </div>
            
            
            <div className="links" >
            
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to='/cart'>
                    <ShoppingCart size={32}/>
                </Link>

            </div>
        </div>
    );
}