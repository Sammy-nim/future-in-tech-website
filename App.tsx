import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BusinessDirection from './components/BusinessDirection';
import Products from './components/Products';
import Organization from './components/Organization';
import Directions from './components/Directions';
import Careers from './components/Careers';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] text-[#333]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <BusinessDirection />
        <Organization />
        <Directions />
        <Products />
        <Careers />
      </main>
      <Footer />
    </div>
  );
};

export default App;