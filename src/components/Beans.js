import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BeansData } from '../data/BeansData';

const Wrapper = styled.section`
  width: 100%;
  height: 100%;
  padding: 4rem 0rem;
  overflow-x: hidden;
  display: flex;
  flex-wrap: nowrap;
  margin: 0;
`;

const Section = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: black;
  font-size: 4rem;
  font-weight: 800;
  transition: color 0.3;
  margin: 0;
  flex-direction: column;

  &.active {
    color: orange;
  }

  p {
    position: relative;
    display: flex;
    font-size: 1.5rem;
    width: 80%;
    padding: 1rem 0;
  }

  img {
    position: relative;
    display: flex;
    width: auto;
    height: 300px;
    object-fit: cover;
    margin: 20px 0;

    @media screen and (max-width: 500px) {
      width: 200px;
      height: 200px;
    }
  }
`;

const Beans = () => {
  gsap.registerPlugin(ScrollTrigger);

  const wrapperRef = useRef();
  const partOne = useRef();
  const partTwo = useRef();
  const partThree = useRef();
  const partFour = useRef();

  useEffect(() => {
    const sections = [partOne.current, partTwo.current, partThree.current, partFour.current];

    let maxWidth = 0;

    const getMaxWidth = () => {
      maxWidth = 0;
      sections.forEach((section) => {
        maxWidth += section.offsetWidth;
      });
    };

    getMaxWidth();

    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);

    gsap.to(sections, {
      x: () => `-${maxWidth - window.innerWidth}`,
      ease: "none",
      scrollTrigger: {
        trigger: wrapperRef.current,
        pin: true,
        scrub: true,
        end: () => `+=${maxWidth}`,
        invalidateOnRefresh: true
      }
    });

    sections.forEach((sct) => {
      ScrollTrigger.create({
        trigger: sct,
        start: () => 'top top-=' + (sct.offsetLeft - window.innerWidth / 2) * (maxWidth / (maxWidth - window.innerWidth)),
        end: () => '+=' + sct.offsetWidth * (maxWidth / (maxWidth - window.innerWidth)),
        toggleClass: { targets: sct, className: "active" }
      });
    });
  }, []);

  return (
    <div id="beans">
      <Wrapper ref={wrapperRef}>
        <Section ref={partOne}>
          {BeansData[0].title}
          <p>{BeansData[0].description}</p>
          <img src={BeansData[0].image} alt={BeansData[0].alt} />
        </Section>
        <Section ref={partTwo}>
          {BeansData[1].title}
          <p>{BeansData[1].description}</p>
          <img src={BeansData[1].image} alt={BeansData[1].alt} />
        </Section>
        <Section ref={partThree}>
          {BeansData[2].title}
          <p>{BeansData[2].description}</p>
          <img src={BeansData[2].image} alt={BeansData[2].alt} />
        </Section>
        <Section ref={partFour}>
          {BeansData[3].title}
          <p>{BeansData[3].description}</p>
          <img src={BeansData[3].image} alt={BeansData[3].alt} />
        </Section>
      </Wrapper>
    </div>
  )
}

export default Beans;
