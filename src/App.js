import React from 'react'
import Header from './componetnts/header/header'
import Snippet from './componetnts/snippets-section/snippets.jsx'
import AccessClipboard from './componetnts/access-clipboar-section/access-clipboard';
import Supercharge from './componetnts/supercharge-section/supercharge'
import Clients from './componetnts/clients/clinets';
import DownloadClipboard from './componetnts/download-clipboard/download-clipboard'
import Footer from './componetnts/footer/footer'
import Options from './componetnts/options/options';
function App() {
  return (
    <div className="App">
     <Header/>
     <Snippet/>
     <AccessClipboard/>
     <Supercharge/>
     <Clients/>
     <DownloadClipboard/>
     <Footer/>
     <Options/>
    </div>
  );
}

export default App;
