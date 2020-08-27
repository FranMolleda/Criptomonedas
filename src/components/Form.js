import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import useCoin from "../hooks/useCoin";
import useCryptocurrency from "../hooks/useCryptocurrency";
import Axios from "axios";

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
const Form = () => {
  //State del listado de criptomonedas
  const [cryptolist, setCryptolist] = useState([]);

  const COINS = [
    { code: "USD", name: "United States Dolar" },
    { code: "MXN", name: "Peso Mexicano" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Libra Esterlina " },
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

  return (
    <form>
      <Select />

      <SelectCrypto />

      <Button type="submit" value="Calculate" />
    </form>
  );
};

export default Form;
