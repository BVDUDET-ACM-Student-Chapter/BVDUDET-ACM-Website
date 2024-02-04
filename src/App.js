import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/home/page";
import Team from "./pages/team/page";
import OpenSource from "./pages/opensource/page";
import Contribute from "./pages/contribute/page";
import Events from "./pages/events/page";
import Gallery from "./pages/gallery/page";
import About from "./pages/about/page";
import JoinUs from "./pages/join-us/page";
import NotFound from "./pages/NotFound";

import { firebaseConfig } from "./firebase";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

function App() {
  const app = initializeApp(firebaseConfig);
  getAnalytics(app);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="team" element={<Team />} />
        <Route path="opensource" element={<OpenSource />} />
        <Route path="contribute" element={<Contribute />} />
        <Route path="events" element={<Events />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="about" element={<About />} />
        <Route path="join-us" element={<JoinUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
