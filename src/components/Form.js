import React from "react";
import styled from "@emotion/styled";
import useCoin from "../hooks/useCoin";

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
  const COINS = [
    { code: "USD", name: "United States Dolar" },
    { code: "MXN", name: "Peso Mexicano" },
    { code: "EUR", name: "Euro" },
    { code: "GBP", name: "Libra Esterlina " },
  ];

  //Utilizamos useCoin
  const [coin, Select, setCoin] = useCoin("Select coin", "", COINS);

  return (
    <form>
      <Select />
      <Button type="submit" value="Calculate" />
    </form>
  );
};

export default Form;
