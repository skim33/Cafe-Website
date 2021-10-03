import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 10px;
  background-color: DarkSalmon;
  color: white;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>Copyright ©︎ 2021 All Rights Reserved by Shawn Kim</p>
    </FooterWrapper>
  )
}

export default Footer
