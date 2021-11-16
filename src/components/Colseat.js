import React, { useState } from "react";

import Sizetacos from "./Sizetacos";

const Colseat = () => {
  const [imgNav, setImgNav] = useState(1);
  return (
    <div className="flex justify-content-between mx-auto ">
      <ul className="flex space-x-10  uppercase font-bold font-8xl">
        <Sizetacos />
      </ul>
    </div>
  );
};

export default Colseat;
