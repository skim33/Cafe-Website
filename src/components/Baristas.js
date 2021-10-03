import React from 'react'
import styled from 'styled-components';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import { BaristasData } from '../data/BaristasData';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding-top: 8rem;
  padding-left: 0;
  padding-right: 0;
  padding-bottom: 0;
  margin: 0;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    text-align: center;
    padding-bottom: 2rem;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  padding: 4rem 0rem;
  margin: 0;
`;

const Barista = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 5.5rem;

  img {
    height: 300px;
    width: 300px;
    object-fit: cover;

    &:hover {
      transform: scale(1.02);
    }
  }

  h3 {
    width: 300px;
    border-right: 2px solid gray;
    border-left: 2px solid gray;
    margin-top: -4px;
    padding: 10px
  }

  h5 {
    width: 300px;
    border: 2px solid gray;
    border-top: none;
    padding: 10px;
  }
`;

const Baristas = () => {

  const responsive = {
    0: { items: 1 },
    768: {items: 2},
    1024: { items: 3 },
  };

  const handleDragStart = (e) => e.preventDefault();

  const items = BaristasData.map((item, i) => (
    <Barista key={i} onDragStart={handleDragStart}>
      <img src={item.image} alt={item.alt} />
      <h3>{item.name}</h3>
      <h5>{item.description}</h5>
    </Barista>
  ));

  return (
    <Section id="baristas">
      <h1>Our Baristas</h1>
      <Wrapper>
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          infinite="true"
          paddingLeft={110}
        />
      </Wrapper>
    </Section>
  )
}

export default Baristas
