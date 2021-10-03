import React, { useRef, useEffect } from 'react'
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 8rem;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;

  h1 {
    text-align: center;
  }
`;

const Container = styled.div`
  padding: 3rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled.div`
  margin: 12px;

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    margin-bottom: 10px;
  }

  p {
    margin-top: 10px;
  }

  .price {
    text-align: right;
    font-size: 17px;
  }
`;

const Menu = ({ menu_items }) => {
  gsap.registerPlugin(ScrollTrigger);
  const cardRefs = useRef([]);

  useEffect(() => {
    gsap.defaults({ ease: "power3" });
    gsap.set(cardRefs.current, { y: 100 });

    ScrollTrigger.batch(cardRefs.current, {
      onEnter: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: { each: 0.15, grid: [1, 3] }, overwrite: true }),
      onLeave: batch => gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: batch => gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: batch => gsap.set(batch, { opacity: 0, y: 100, overwrite: true })
    });

    ScrollTrigger.addEventListener("refreshInit", () => gsap.set(cardRefs.current, { y: 0 }));
  }, [menu_items.length, cardRefs]);

  return (
    <Section id="menu">
      <h1>MENU</h1>
      <Container>
        {menu_items.map((item, i) => {
          return (
            <Card key={i} ref={(el) => cardRefs.current.push(el)}>
              <img src={item.image} alt={item.alt} />
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <p className="price">{item.price}</p>
            </Card>
          )
        })}
      </Container>
    </Section>
  )
}

export default Menu
