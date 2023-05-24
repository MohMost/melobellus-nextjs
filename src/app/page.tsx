"use client";
import "./globals.css";
import Header from "../components/Header";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";
import About from "../components/About";
import Contact from "../components/Contact";
import { Suspense } from "react";
function App() {
  return (
    <>
      <Header />

      <main id="main">
        <Gallery />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
