import React, { useRef } from "react";
import { Helmet } from "react-helmet";

import { Rerousel } from "rerousel";

import styled from "styled-components";

import {
  Navbar,
  Footer,
  Landing,
  About,
  Skills,
  Testimonials,
  Blog,
  Education,
  Experience,
  Contacts,
  Projects,
  Services,
  Achievement,
} from "../../components";
import { headerData } from "../../data/headerData";

function Main() {
  const ref = useRef(null);

  const Item = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(50% / 2);
    height: 400px;
    font-family: Signika;
    font-weight: bold;
    font-size: 1.5em;
    border: solid 1px black;
    background-color: #61dafb;

    @media (max-width: 1150px) {
      width: 100%;
    }
  `;

  const ImgStyled = styled.img`
    width: 100%;
    height: 100%;
  `;

  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Porfolio</title>
      </Helmet>

      <Navbar />
      <Landing />
      <About />
      <Skills />

      <div className="skillsHeader">
        <h2 style={{ color: "#545fc4", margin: 50 }}>Projects</h2>
      </div>
      <Rerousel itemRef={ref}>
        <Item ref={ref}>
          <ImgStyled src="https://picsum.photos/1200/800" />
        </Item>
        <Item>
          <ImgStyled src="https://picsum.photos/300/300" />
        </Item>
        <Item>
        <ImgStyled src="https://picsum.photos/720/720"/>
        </Item>
        <Item>
        <ImgStyled src="https://picsum.photos/1920/1080"/>
        </Item>
        <Item>
        <ImgStyled src="https://picsum.photos/480/360"/>
        </Item>
      </Rerousel>

      <Services />
      <Testimonials />
      <Contacts />
      <Footer />
    </div>
  );
}

export default Main;
