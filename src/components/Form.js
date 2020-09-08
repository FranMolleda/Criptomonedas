import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Error from "../components/Error";
import useCoin from "../hooks/useCoin";
import useCryptocurrency from "../hooks/useCryptocurrency";
import Axios from "axios";
import PropTypes from "prop-types";

const Button = styled.input`
  margin-top: 20 px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;
const Form = ({ setCoin, setCryptocurrency }) => {
  //State del listado de criptomonedas
  const [cryptolist, setCryptolist] = useState([]);
  const [error, setError] = useState(false);

  const COINS = [
    { code: "EUR", name: "Euro" },
    { code: "USD", name: "United States Dolar" },
    { code: "GBP", name: "Pound Sterling" },
    { code: "MXN", name: "Mexican Peso" },
  ];

  //Utilizamos useCoin
  const [coin, Select] = useCoin("Select coin", "", COINS);

  //Utilizamos useCryptoCurrency
  const [cryptoCurrency, SelectCrypto] = useCryptocurrency(
    "Select Cryptocurrency",
    "",
    cryptolist
  );

  useEffect(() => {
    const consultApi = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";
      const response = await Axios(url);
      setCryptolist(response.data.Data);
    };

    consultApi();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (cryptoCurrency === "" || coin === "") {
      setError(true);
      return;
    }
    setError(false);
    setCryptocurrency(cryptoCurrency);
    setCoin(coin);
  };

  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error message="Todos los campos son obligatorios" /> : null}
      <Select />

      <SelectCrypto />

      <Button type="submit" value="Calculate" />
    </form>
  );
};

Form.propTypes = {
  setCryptocurrency: PropTypes.func.isRequired,
  setCoin: PropTypes.func.isRequired,
};

export default Form;
