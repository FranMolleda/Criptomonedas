import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import image from "./cryptomonedas.png";
import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [coin, setCoin] = useState("");
  const [cryptocurrency, setCryptocurrency] = useState("");

  useEffect(() => {
    //Evitamos la ejecución la primera vez
    if (coin === "") return;
  }, [coin, cryptocurrency]);
  return (
    <Container>
      <div>
        <Image src={image} alt="crypto img" />
      </div>
      <div>
        <Heading>Quote currencies instantly</Heading>
        <Form setCryptocurrency={setCryptocurrency} setCoin={setCoin} />
      </div>
    </Container>
  );
}

export default App;
