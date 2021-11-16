import React, { useContext } from "react";
import { Context } from "./Mycontext";

const Compose = () => {
  const { index } = useContext(Context);
  return (
    <div>
      <h1 className="text-6xl uppercase font-bold mt-5">
        Compose{" "}
        {index === 1
          ? "ton tacos"
          : index === 2
          ? "ta viande"
          : index === 3
          ? "ta sauce"
          : index === 4
          ? "ton extra"
          : ""}
      </h1>
      <h2 className="text-4xl uppercase font-bold mt-10  ">
        <span
          className={
            index === 1
              ? "h-5 w-5 px-4 bg-yellow-300 text-white rounded-lg"
              : index === 2
              ? "h-5 w-5 px-4 bg-blue-500 text-white rounded-lg"
              : index === 3
              ? "h-5 w-5 px-4 bg-red-500 text-white rounded-lg"
              : index === 4
              ? "h-5 w-5 px-4 bg-green-800 text-white rounded-lg"
              : ""
          }
        >
          {index}
        </span>{" "}
        {index === 1
          ? "TAILLE"
          : index === 2
          ? "VIANDES"
          : index === 3
          ? "SAUCES"
          : index === 4
          ? "EXTRA"
          : ""}
      </h2>
    </div>
  );
};

export default Compose;
