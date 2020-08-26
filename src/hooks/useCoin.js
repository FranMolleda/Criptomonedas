import React from "react";
import { Fragment, useState } from "react";

const useCoin = () => {
  //State de nuestro custom hook
  const [state, setState] = useState("");

  const Select = () => (
    <Fragment>
      <label htmlFor="">Coin</label>
      <select>
        <option value="MXN">Peso Mexicano</option>
      </select>
    </Fragment>
  );
  //Retornar state
  return [state, Select, setState];
};

export default useCoin;
