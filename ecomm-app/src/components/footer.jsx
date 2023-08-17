import React from "react";
import {Link} from "react-router-dom"
import {ShoppingCart} from "phosphor-react"
import "./footer.css";
import myImage from "../images/logo.png";


export const Footer = () =>{
    return (
        <div className="footer"> 
            <div className="infos">
                <img src={myImage} alt="Footer Icon"/>
                <ul>
                    <li>
                        <h1>CONTACT US</h1>
                    </li>
                    <li>
                        <a href="mailto:erinchen940428@gmail.com">email: erinchen940428@gmail.com</a>
                    </li>
                    <li>
                        <a>tel: +1(631) 681-2515</a>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h1>FOLLOW US</h1>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/yun.chen.5817/">@PoGo! Facebook</a>
                    </li>
                    <li>
                        <a href="https://instagram.com/yunchennn_?igshid=NTc4MTIwNjQ2YQ==">@PoGo! Instagram</a>
                    </li>
                    <li>
                        <a>@PoGo! Twitter</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}