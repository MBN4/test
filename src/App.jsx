import React from 'react';
import './App.css';

import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Guarantee from './components/Guarantee/Guarantee';
import Features from './components/Features/Features';
import FAQ from './components/FAQ/FAQ';
import QuoteBanner from './components/QuoteBanner/QuoteBanner';

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Hero />
        <Guarantee />
        <Features />
        <FAQ />
        <QuoteBanner />
      </main>
      <Footer />
    </div>
  );
}

export default App;