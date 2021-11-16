import React, { useContext, useState } from "react";
// import Barredown from "./components/Barredown";

import { Context } from "../components/Mycontext";
import { NavLink } from "react-router-dom";

const MyTacos = () => {
  const { tacos, checkedMyRadio } = useContext(Context);

  console.log(tacos);

  const prevent = e => e.preventDefault();

  return (
    <>
      <form
        className=" relative myFund container text-center flex-col rounded-xl  bg-white h-3/5 w-2/4 "
        onSubmit={prevent}
      >
        <h1 className="text-6xl uppercase font-bold mt-5">Compose ton tacos</h1>
        <h2 className="text-4xl uppercase font-bold mt-10  ">
          <span className="h-5 w-5 px-4 bg-yellow-300 text-white rounded-lg">
            1. Taille
          </span>{" "}
        </h2>
        {/* TACOS XXL */}

        <div className="flex w-auto  mt-2 justify-evenly items-center">
          <div className="mt-5 ">
            <div className="flex text-center">
              <label htmlFor="xxl">
                <img
                  src="./img/sizeTacos/sizeTacos.png"
                  className="w-60 h-60"
                  alt="ok"
                />
                <h2 className="text-red-500 text-4xl font-bold">XXL</h2>
                <p className="uppercase ">4 Viandes</p>
              </label>
              <input
                onChange={checkedMyRadio}
                type="radio"
                name="tacos"
                id="xxl"
                value="xxl"
              />
            </div>
          </div>
          {/* TACOS XL */}
          <div className="mt-8">
            <div className="flex text-center">
              <label htmlFor="xl">
                <img
                  src="./img/sizeTacos/sizeTacos.png"
                  className="w-56 h-56"
                  alt="ok"
                />
                <h2 className="text-yellow-400 text-4xl font-bold">XL</h2>
                <p className="uppercase">3 Viandes</p>
              </label>
              <input
                type="radio"
                name="tacos"
                id="xl"
                onChange={checkedMyRadio}
                value="xl"
              />
            </div>
          </div>

          {/* TACOS L */}
          <div className="flex justify-center">
            <div className="mt-5 ">
              <div className="flex text-center">
                <label htmlFor="l">
                  <img
                    src="./img/sizeTacos/sizeTacos.png"
                    className="w-52 h-52"
                    alt="ok"
                  />
                  <h2 className="text-blue-500 text-4xl font-bold">L</h2>
                  <p className="uppercase">2 Viandes</p>
                </label>
                <input
                  type="radio"
                  name="tacos"
                  id="l"
                  onChange={checkedMyRadio}
                  value="L"
                />
              </div>
            </div>
            {/* TACOS M */}
            <div className="mt-8">
              <div className="flex text-center">
                <label htmlFor="m">
                  <img
                    src="./img/sizeTacos/sizeTacos.png"
                    className="w-48 h-48"
                    alt="ok"
                  />
                  <h2 className="text-green-600 text-4xl font-bold">M</h2>
                  <p className="uppercase">1 Viande</p>
                </label>
                <input
                  type="radio"
                  name="tacos"
                  id="m"
                  onChange={checkedMyRadio}
                  value="M"
                />
              </div>
            </div>
          </div>
        </div>
        <NavLink to="/viandes">
          <span className=" text-6xl">&#10093;</span>
        </NavLink>

        {/* <Barredown /> */}
      </form>
    </>
  );
};

export default MyTacos;
