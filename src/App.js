import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Hero from './components/Hero';
import { SliderData } from './data/SliderData';
import Dropdown from './components/Dropdown';
import InfoSection from './components/InfoSection';
import { InfoData } from './data/InfoData';
import Menu from './components/Menu';
import { MenuData } from './data/MenuData';
import Beans from './components/Beans';
import Baristas from './components/Baristas';
import Contact from './components/Contact';
import Footer from './components/Footer';
import TopButton from './components/TopButton';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides={SliderData} />
      <InfoSection {...InfoData} />
      <Beans />
      <Menu menu_items={MenuData} />
      <Baristas />
      <Contact />
      <TopButton />
      <Footer />
    </>
  );
}

export default App;
