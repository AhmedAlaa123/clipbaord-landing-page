import React from "react";
import MAIN_LINK from "../../utlities";
import './clinets.css'
export default function Clients(props)
{
    return (
        <section className ='clients text-center'>
            <div className='container'>
                <div className='row justify-content-between'>
                    <div className='col-md-2 col-sm-6 mb-40'>
                        <img className='responsive-img' src={MAIN_LINK+"images/logo-google.png"} alt="googel" />
                    </div>
                    <div className='col-md-2 col-sm-6 mb-40'>

                        <img className='responsive-img' src={MAIN_LINK+"images/logo-ibm.png"} alt="googel" />

                    </div>

                    <div className='col-md-2 col-sm-6 mb-40'>

                        <img className='responsive-img' src={MAIN_LINK+"images/logo-microsoft.png"} alt="googel" />

                    </div>

                    <div className='col-md-2 col-sm-6 mb-40'>

                         <img className='responsive-img' src={MAIN_LINK+"images/logo-hp.png"} alt="googel" />

                    </div>

                    <div className='col-md-2 col-sm-6 mb-40'>

                        <img className='responsive-img' src={MAIN_LINK+"images/logo-vector-graphics.png"} alt="googel" />

                    </div>
                    
                
                </div>
            </div>
        </section>
    );
}