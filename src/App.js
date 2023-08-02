import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import { useState, useEffect } from 'react';
import axios from 'axios';

const startUp = (url) => {

}

function App() {
  const startUp = (url) => {
    axios({
        url: url,
        method: "GET"
    })
  
      // Handle the response from backend here
      .then((res) => { })
  
      // Catch errors if any
      .catch((err) => { });
    } 

  startUp("https://life-saver.herokuapp.com/start-up/");
  startUp("https://multi-sms-application.herokuapp.com/start-up/");
  startUp("https://tutor-center.herokuapp.com/start-up/");

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
