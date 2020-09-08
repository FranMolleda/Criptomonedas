import React, { Fragment, useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "bebas neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Selection = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  --webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

//A la función useCoin le pasamos como parametros (y otros nombres) lo que estamos pasando en Form:
// const COINS = [
//     { code: "USD", name: "United States Dolar" },
//     { code: "MXN", name: "Peso Mexicano" },
//     { code: "EUR", name: "Euro" },
//     { code: "GBP", name: "Libra Esterlina " },
//   ];
// const [coin, Select] = useCoin("Select coin", "", COINS);

const useCoin = (label, stateInitial, options) => {
  //State de nuestro custom hook
  const [state, setState] = useState(stateInitial);

  const Select = () => (
    <Fragment>
      <Label htmlFor="">{label}</Label>
      <Selection onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">-- Select --</option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </Selection>
    </Fragment>
  );
  //Retornar state
  return [state, Select, setState];
};

export default useCoin;
