import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { animateScroll as scroll } from 'react-scroll';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';

const Button = styled.button`
  position: fixed;
  bottom: 50px;
  right: 2%;
  transform: translate(-50%, 0);
  z-index: 99;
  font-size: 18px;
  border: none;
  outline: none;
  background-color: #F8F8F8;
  color: black;
  cursor: pointer;
  border-radius: 50px;
  padding-right: 2px;
  padding-left: 2px;
  transition: all .25s ease-in-out;

  &:hover {
    background-color: #E8E8E8;
    color: black;
  }
`;

const TopButton = () => {
  const [isActive, setIsActive] = useState(false);

  const scrollCheck = () => {
    if (window.scrollY >= 745) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollCheck);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop({ duration: 700 });
  }

  return (
    <Button onClick={toggleHome} style={isActive ? { display: 'block' } : { display: 'none' }}>
      <ArrowDropUpIcon fontSize="large" />
    </Button>
  )
}

export default TopButton
