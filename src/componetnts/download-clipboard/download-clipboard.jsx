import React from "react";
import './download-clipboard.css'
export default function DownloadClipboard(props){

    return (
            <section className='download text-center'>
                <div className='container'>
                    <h2 className='h1'>
                        Clipboard for ios and Mac OS
                    </h2>
                    <p className='mb-40'>
                        Available for free on App Store. Download for Mac or iOS, sync with iCloud and you're to start adding to your clipboard.
                    </p>
                    <a className='btn btn-Cyan' href='#'>Download for Mac</a>
                    <a className='btn btn-light-blue' href='#'>Download for iOS</a>
                 </div>
        </section>
    );
}