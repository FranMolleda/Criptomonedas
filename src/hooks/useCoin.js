import React from "react";
import { Fragment, useState } from "react";

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
      <label htmlFor="">{label}</label>
      <select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">-- Select --</option>
        {options.map((option) => (
          <option key={option.code} value={option.code}>
            {option.name}
          </option>
        ))}
      </select>
    </Fragment>
  );
  //Retornar state
  return [state, Select, setState];
};

export default useCoin;
