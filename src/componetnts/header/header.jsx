import React from "react";
import './header.css'
export default function Header(props){
    return (
        <div className='header text-center'>
           <div className='container'>
                <img src="images/logo.svg" alt="logo"  />
                <h1>A history of everything you copy</h1>
                <p>
                    clipboard allows you to track and organize everything you copy. Instanly
                    access your clipboard on all your devices
                </p>
                <a className='btn btn-Cyan' href='#'>Download for ios</a>
                <a className='btn btn-light-blue' href='#'>Download for Mac</a>
           </div>
        </div>
    );
}