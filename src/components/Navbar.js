import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/macro';
import { NavMenuData } from '../data/NavMenuData';
import { Button } from './Button';
import { FaBars } from 'react-icons/fa'
import { ThemeProvider } from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';

const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  z-index: 999;
  position: fixed;
  width: 100%;
  background-color: ${props => props.theme.main};
`;

const theme = {
  main: "none"
};

const scrolledTheme = {
  main: "#000d1a"
}

const NavLink = css`
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;

  &.active {
    border-bottom: 5px solid orange;
  }
`;

const Logo = styled(Link)`
  ${NavLink}
  font-style: italic;
`;

const MenuBars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    height: 40px;
    width: 40px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-50%, 25%);
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavMenuLinks = styled(Link)`
  ${NavLink}
  height: 59px;
`;

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Navbar = ({ toggle }) => {
  const [colorChange, setColorChange] = useState(false);
  const [isActive, setIsActive] = useState(true)

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorChange(true);
    } else {
      setColorChange(false);
    }
  };

  const changeIsActive = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => { changeNavbarColor(); changeIsActive(); });
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop({ duration: 700 });
  }

  const toggleContact = () => {
    scroll.scrollToBottom({ duration: 700 });
  }

  return (
    <ThemeProvider theme={colorChange ? scrolledTheme : theme}>
      <Nav>
        <Logo to="home" onClick={toggleHome}>Espresso</Logo>
        <MenuBars onClick={toggle} />
        <NavMenu>
          {NavMenuData.map((item, index) => (
            <NavMenuLinks
              to={item.link}
              key={index}
              smooth={true}
              duration={700}
              spy={true}
              exact='true'
              activeClass={isActive ? 'active' : 'deactive'}
            >
              {item.title}
            </NavMenuLinks>
          ))}
        </NavMenu>
        <NavBtn>
          <Button to='contact' primary='true' onClick={toggleContact}>Contact Us</Button>
        </NavBtn>
      </Nav >
    </ThemeProvider>
  )
}

export default Navbar
