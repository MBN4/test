import React from 'react';
import './App.css';

import Hero from './components/Hero/Hero';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Hero />
        {/* We will add Guarantee and FAQ sections here next */}
      </main>
      <Footer />
    </div>
  );
}

export default App;