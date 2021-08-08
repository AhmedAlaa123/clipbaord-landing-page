import React from 'react'
import './footer.css'
export default function Footer(props){

    return (
        <footer>
            <div className=''>
                <div className='row justify-content-between'>
                    <div className='row justify-content-between '>
                        <img  src='images/logo.svg' alt='Logo'/>
                        <div className='serv'>
                            <p><a className='link' href='#'>FAQs</a></p>
                            <p><a className='link' href='#'>Contact Us</a></p>
                        </div>
                        <div className='serv'>
                            <p><a className='link' href='#'>Privacy Policy</a></p>
                            <p><a className='link' href='#'>Press Kit</a></p>
                        </div>
                        <div className='serv'>
                            <p><a className='link' href='#'>Install Guide</a></p>
                        </div>
                    </div>
                    <div className='social-icons  ' >
                        <a href='https://www.facebook.com'>
                            <img src="images/icon-facebook.svg" alt="Facebook" />
                        </a>
                        <a href='https://www.twitter.com'>
                            <img src="images/icon-twitter.svg" alt="Twitter" />
                        </a>
                        <a href='https://www.instagram.com'>
                            <img src="images/icon-instagram.svg" alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}