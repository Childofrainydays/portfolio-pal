import React, { Component } from "react";
import Navi from "./components/navi";
import About from "./components/about";
import Portfolio from "./components/portfolio";
import Resume from "./components/resume";
import Contact from "./components/contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="Homepage">  
      {/* seting this up was like thinking about routers but sideways my brain is turning into a pretzel */}
      <BrowserRouter>
        <Routes>
          <Route index element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
