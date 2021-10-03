import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import RedditIcon from '@material-ui/icons/Reddit';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InfoIcon from '@material-ui/icons/Info';
import { Tooltip } from '@material-ui/core';
import Grow from '@material-ui/core/Grow';
import { useForm } from 'react-hook-form';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding-bottom: 4rem;
  color: #fff;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  position: relative;
  max-height: 100%;
  max-width: 100%;
  width: 100%;
  background-color: gray;
  margin: 0 2rem;
  border-radius: 12px;
  padding: 5rem 0;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  h3 {
    margin-top: 0.5rem;
    margin-bottom: 2rem;
  }
`;

const Button = styled.button`
  margin-bottom: 2rem;
  background: #000d1a;
  white-space: nowrap;
  outline: none;
  border: none;
  min-width: 100px;
  max-width: 200px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s;
  display: flex;
  align-items: center;
  padding: 14px 24px;
  color: #fff;
  font-size: 14px;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 10px 5px 5px #fff;
  }
`;

const ToggleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MapContainer = styled.div` 
  position: relative;
  height: 500px;
  width: 500px;
  padding-top: 2.5rem;
  justify-self: center;

  @media screen and (max-width: 600px) {
    height: 350px;
    width: 350px;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  h3 {
    margin-top: 2rem;
  }

  @media screen and (min-width: 768px) {
    margin-left: 3rem;
  }
`;

const DetailsRow = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1rem;

  span {
    padding-top: 6px;
    padding-left: 2rem;
    text-align: start;
    font-size: 20px;
  }

  @media screen and (max-width: 600px) {
    width: 350px;
  }
`;

const IconWrapper = styled.div`
  padding-left: 2rem;

  .facebook, .instagram, .twitter, .pinterest, .reddit, .youtube  {
    transition: 0.3s;

    &:hover {
      transform: translateY(-5px);
      color: crimson;
    }
  }
`;

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  input {
    width: 400px;
    height: 30px;
    margin: 5px 0;
    font-size: 18px;
    padding: 4px;
    border-radius: 4px;
    border: 1px solid #ccc;

    @media screen and (max-width: 468px) {
      width: 280px
    }
  }

  textarea {
    width: 22.25em;
    height: 10em;
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 18px;
    padding: 4px;
    border-radius: 4px;
    border: 1px solid #ccc;

    @media screen and (max-width: 468px) {
      width: 280px
    }
  }

  button {
    width: 150px;
    height: 30px;
    background-color: crimson;
    border: 1px solid #fff;
    color: #fff;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      background-color: #fff;
      color: crimson;
      border: 1px solid crimson;
    }
  }

  @media screen and(max - width: 600px) {
    input {
    width: 300px;
    height: 25px;
    font-size: 15px;
  }

    textarea {
    width: 20em;
    height: 8em;
    font-size: 15px;
  }
}
`;


const Contact = () => {
  const [toggle, setToggle] = useState(null);
  const [isToggled, setIsToggled] = useState(false);
  const { handleSubmit, register, formState: { errors } } = useForm();
  const onSubmit = () => { alert("Thank you for the inquiry in further detail!"); document.getElementById("form").reset(); };

  const location = {
    address: '111, Something-ro, Sometthing-gu, Seoul',
    lat: 37.566536,
    lng: 126.977966
  }

  const LocationPin = ({ text }) => (
    <>
      <Tooltip title={text} placement="right">
        <LocationOnIcon style={{ color: 'crimson', fontSize: '40px' }} fontSize="large" />
      </Tooltip>
    </>
  );

  useEffect(() => {
    if (!isToggled) {
      setTimeout(function () {
        setToggle(<></>);
      }, 500);
    }
  }, [isToggled]);

  const showMap = () => (
    !isToggled ? setToggle(
      <Grow in={!isToggled} timeout={500}>
        <ToggleContainer>
          <MapContainer>
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
              defaultCenter={location}
              defaultZoom={17}
            >
              <LocationPin
                lat={location.lat}
                lng={location.lng}
                text={location.address}
              />
            </GoogleMapReact>
          </MapContainer>

          <Details>
            <h3>ESPRESSO</h3>
            <DetailsRow>
              <LocationOnIcon style={{ color: 'crimson' }} fontSize="large" />
              <span>{location.address}</span>
            </DetailsRow>
            <DetailsRow>
              <PhoneIcon style={{ color: 'crimson' }} fontSize="large" />
              <span>010-1111-2222</span>
            </DetailsRow>

            <DetailsRow>
              <InfoIcon style={{ color: 'crimson' }} fontSize="large" />
              <IconWrapper>
                <a href="https://www.facebook.com/" style={{ color: 'inherit' }} target="_blank" rel="noreferrer"><FacebookIcon className="facebook" style={{ marginRight: '5px', fontSize: '40px' }} /></a>
                <a href="https://www.instagram.com/" style={{ color: 'inherit' }} target="_blank" rel="noreferrer"><InstagramIcon className="instagram" style={{ marginRight: '6px', fontSize: '40px' }} /></a>
                <a href="https://twitter.com/?lang=en" style={{ color: 'inherit' }} target="_blank" rel="noreferrer"><TwitterIcon className="twitter" style={{ marginRight: '6px', fontSize: '40px' }} /></a>
                <a href="https://www.pinterest.com/" style={{ color: 'inherit' }} target="_blank" rel="noreferrer"><PinterestIcon className="pinterest" style={{ marginRight: '6px', fontSize: '40px' }} /></a>
                <a href="https://www.reddit.com/" style={{ color: 'inherit' }} target="_blank" rel="noreferrer"><RedditIcon className="reddit" style={{ marginRight: '6px', fontSize: '40px' }} /></a>
                <a href="https://www.youtube.com/" style={{ color: 'inherit' }} target="_blank" rel="noreferrer"><YouTubeIcon className="youtube" style={{ marginRight: '6px', fontSize: '40px' }} /></a>
              </IconWrapper>
            </DetailsRow >

            <h3>Any Inquiries?</h3>
            <FormContainer onSubmit={handleSubmit(onSubmit)} id="form">
              <input
                type="email"
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "invalid email address"
                  }
                })}
                placeholder="Email Address"
              />
              {errors.email && errors.email.message}

              <input {...register("fullName")} placeholder="Full Name" />
              {errors.fullName && errors.fullName.message}

              <textarea {...register("description")} placeholder="Description..." />
              {errors.description && errors.description.message}

              <button type="submit">Send</button>
            </FormContainer>
          </Details >
        </ToggleContainer >
      </Grow >
    ) : (
      setToggle(<Grow in={!isToggled} timeout={500}>{toggle}</Grow>)
    )
  );

  return (
    <Container id="contact">
      <Wrapper>
        <p>Coffee time, anytime.</p>
        <h3>Let us make your day!</h3>
        <Button onClick={() => { showMap(); setIsToggled(!isToggled) }}>Contact Us</Button>
        {toggle}
      </Wrapper>
    </Container>
  )
}

export default Contact