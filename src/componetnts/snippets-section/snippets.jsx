import React from 'react'
import './snippets.css'

export default function Snippet(props)
{
    return (
        <section className='snippet-section'>
            <div className='container text-center'>
                <h2 className='h1 '>
                    Keep track of your snippets
                </h2>
                <p>
                    Clipboard instantly stores any item you coopy in the cloud,
                    meaning you can access your snippets immediately on all your devices. Our Mac and ios apps will help you organize everything.
                </p>
            </div>
            <div className='row'>
                <div className='image col-md-7'>
                    <img className='responsive-img' src='images/image-computer.png' alt='Computer'/>
                </div>
                <div className='snipptes-list col-md-5'>
                    <div className='snippte'>
                        <h3>Quick Search</h3>
                        <p>
                            Easily search your snippets by content,
                            category, web address, application and more.
                        </p>
                    </div>
                    <div className='snippte'>
                        <h3>iCloud Sync</h3>
                        <p>
                            Instantly saves and syncs snippets  across all your devices.
                        </p>
                    </div>
                    <div className='snippte'>
                        <h3>Complete History</h3>
                        <p>
                        Retirve any snippets from the first moment you started using the app.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}