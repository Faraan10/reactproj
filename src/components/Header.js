import React from "react"
import {NavLink} from "react-router-dom"

export default function Header(){
    return(
        <>
            <nav class="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <img src="/images/adidaslogo.jpg" className="navimg"/>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink to="/" class="nav">
                                    <button type="button" class="btn btn-outline-dark">Home</button>
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink to="/employees" class="nav">
                                    <button type="button" class="btn btn-outline-dark">Employees</button>
                                </NavLink>
                            </li>
                        
                            <li class="nav-item">
                                <NavLink to="/products" class="nav">
                                    <button type="button" class="btn btn-outline-dark">Products</button>
                                </NavLink>
                            </li>
                            
                            <li class="nav-item">
                                <NavLink to="/cart" class="nav">
                                    <button class="cartbutton"><i class="fa-sharp fa-solid fa-cart-shopping fa-2xl"></i>: 2</button>
                                    
                                    
                                </NavLink>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <hr/>

        </>
    )
}