import React, { Component } from "react";
import Navi from "./Pages/navi";
import About from "./Pages/about";
import Portfolio from "./Pages/portfolio";
import Resume from "./Pages/resume";
import Contact from "./Pages/contact";
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
