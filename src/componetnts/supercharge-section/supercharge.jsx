import React  from "react";
import './supercharge.css'
export default function SuperCharge(props){
    return (
        <section className='supercharge text-center'>
            <div className='container'>
                <h2 className='h1'>
                    Supercharge you workflow
                </h2>
                <p>
                We've got the tools to boost your  productivity
                </p>
                
                <div className='row'>
                    <div className='col-md-4'>
                        <img src='images/icon-blacklist.svg' alt='blacklits icon' />
                        <h3>Create blacklists</h3>
                        <p>Ensure sensitive information never makes its way to your clibboard by excluding certain sources.</p>
                    </div>                
                    <div className='col-md-4'>
                        <img src='images/icon-text.svg' alt='blacklits icon' />
                        <h3>Plain text snippets</h3>
                        <p>
                            Remove unwanted formatting from copied text for a consistent look.
                        </p>
                    </div>                
                    <div className='col-md-4'>
                        <img src='images/icon-preview.svg' alt='blacklits icon' />
                        <h3>Sneak preview</h3>
                        <p>
                            Quicl preview of all snippets on your Clipboard for easy access.
                        </p>
                    </div>                
                            
                </div>
            </div>    
        </section>
    );
}