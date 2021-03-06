import React from 'react';
import * as Styled from './styles';

import ETHIcon from "assets/svg/eth.inline.svg";
import SPCLIcon from "assets/svg/spcl.inline.svg";
import FooterIcon from "assets/svg/footer.inline.svg";
import FooterMobileIcon from "assets/svg/footerMobile.inline.svg";
import tw from 'twin.macro';


const Footer: React.FC = () => (
  <Styled.Footer>
    <FooterIcon css={tw`hidden lg:block min-h-screen md:h-auto lg:-ml-40`}/>
    <Styled.TextContainer> 
      <Styled.Title css={tw`px-4 md:px-10 lg:px-4`}>We are researchers and students from SPCL @ ETH Zurich</Styled.Title>
      <Styled.Text css={tw`pt-5 px-4 md:px-10 lg:px-4`}>GraphMineSuite and the associated projects are actively developed. As subject of research it will likely include more features in the future. If you are interested in our work contact us via SPCL.</Styled.Text>
      <Styled.CenteredTextContainer>
        <Styled.LogoLinkSection css={tw`flex items-end pt-7 px-2 md:px-0`}>
              <ETHIcon/>
              <SPCLIcon/>
        </Styled.LogoLinkSection>
        <Styled.FooterLinkContainer>
              <Styled.Link href="/LICENSE.txt" rel="noopener">LICENSE</Styled.Link>
              <Styled.Dot/>
              <Styled.Link href="https://github.com/spcl/gms" rel="noopener">CODE</Styled.Link>
              <Styled.Dot/>
              <Styled.Link href="https://ethz.ch/" rel="noopener">ETHZ</Styled.Link>
              <Styled.Dot/>
              <Styled.Link href="https://spcl.inf.ethz.ch/" rel="noopener">SPCL</Styled.Link>
        </Styled.FooterLinkContainer>
        <FooterMobileIcon css={tw`w-screen pt-5 px-2 lg:hidden`}/>
        <Styled.CopyrightText>© Copyright 2021. All rights reserved</Styled.CopyrightText>
      </Styled.CenteredTextContainer>
    </Styled.TextContainer>
  </Styled.Footer>
);

export default Footer;
