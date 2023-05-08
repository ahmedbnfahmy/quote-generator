import './App.css';
import React, {useState} from 'react';
import { FacebookIcon, TwitterIcon, WhatsappIcon, WhatsappShareButton } from 'react-share';
// import { Link } from "react-router-dom";

const App = () => {
  const url = "https://api.quotable.io/random";
  let quoteData = {
    content: "Let time be your only competitor.",
    author: "Ahmed Saber"
  }
  const [quote, setQuote] = useState(quoteData)

  const generateQuote = () => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setQuote(data)
      });
  }

  const copy = () => {
    navigator.clipboard.writeText(quote.author + " once said: " + quote.content)
    alert('copied')
  }
  const shareItOnTwitter = () => {
    window.open("https://twitter.com/intent/tweet?text=" + quote.author + " once said: " + quote.content)
  }
  const shareItOnFacebook =()=>{
    window.open("https://www.facebook.com/sharer/sharer.php?u=" + quote.author + "&t=" + quote.content)
  }
  const shareItOnWhatsapp=()=>{
    window.open("https://api.whatsapp.com/send?text=" + quote.author + " once said: " + quote.content)
  }
  const shareAsStatus=()=>{
    window.open("https://api.whatsapp.com/status?text=" + quote.author + " once said: " + quote.content)
  }

  return (
    <>
      <h1>Quote Generator React App</h1>
      <div className="container">
        <p>{quote.content}</p>
        <span>{quote.author}</span>
        <div className="btns container">
          <button onClick={copy} className="btn">Copy</button>
          <button onClick={generateQuote}>Generate Another Quote</button>
        </div>
  
        <div className="share">
          <button onClick={shareItOnTwitter} className="btn btn-primary"><TwitterIcon /></button>
          <button onClick={shareItOnFacebook} className="btn btn-primary"><FacebookIcon /></button>
          <button onClick={shareAsStatus} className="btn btn-success " ><WhatsappIcon/></button>
          <button onClick={shareItOnWhatsapp} className="btn" >send as whatsapp message</button>
          {/* <button onClick={shareAsStatus} className="btn btn-primary"><WhatsappShareButton /></button> */}
          
      </div>
      </div>
    </>
  )
}


export default App;
