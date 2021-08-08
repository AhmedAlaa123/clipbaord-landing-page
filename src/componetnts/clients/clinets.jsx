import React from "react";
import './clinets.css'
export default function Clients(props)
{
    return (
        <section className ='clients text-center'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-md-2 col-sm-6 mb-40'>
                        <img className='responsive-img' src="images/logo-google.png" alt="googel" />
                    </div>
                    <div className='col-md-2 col-sm-6 mb-40'>

                        <img className='responsive-img' src="images/logo-ibm.png" alt="googel" />

                    </div>

                    <div className='col-md-2 col-sm-6 mb-40'>

                        <img className='responsive-img' src="images/logo-microsoft.png" alt="googel" />

                    </div>

                    <div className='col-md-2 col-sm-6 mb-40'>

                         <img className='responsive-img' src="images/logo-hp.png" alt="googel" />

                    </div>

                    <div className='col-md-2 col-sm-6 mb-40'>

                        <img className='responsive-img' src="images/logo-vector-graphics.png" alt="googel" />

                    </div>
                    
                
                </div>
            </div>
        </section>
    );
}