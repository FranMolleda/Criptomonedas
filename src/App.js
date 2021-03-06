import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import image from "./cryptomonedas.png";
import styled from "@emotion/styled";
import Axios from "axios";
import Quotation from "./components/Quotation";
import Spinner from "./components/Spinner";

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
  color: #f70606;
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
  const [result, setResult] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ApiCalculate = async () => {
      //Evitamos la ejecución la primera vez
      console.log(coin);
      if (coin === "") return;
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${coin}`;
      const response = await Axios.get(url);
      //Mostrar el Spinner
      setLoading(true);

      //ocultar el spinner y mostrar el resultado
      setTimeout(() => {
        setLoading(false);
        setResult(response.data.DISPLAY[cryptocurrency][coin]);
      }, 3000);
    };
    ApiCalculate();
  }, [coin, cryptocurrency]);

  const component = loading ? <Spinner /> : <Quotation result={result} />;
  return (
    <Container>
      <div>
        <Image src={image} alt="crypto img" />
      </div>
      <div>
        <Heading>Quote currencies instantly</Heading>
        <Form setCryptocurrency={setCryptocurrency} setCoin={setCoin} />
        {component}
      </div>
    </Container>
  );
}

export default App;
