import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

class Extra extends Component {
  state = {
    mesExtra: [
      {
        id: uuidv4(),
        img: "./img/extra/oignons.png",
        type: "Oignons"
      },
      {
        id: uuidv4(),
        img: "./img/extra/emmental.png",
        type: "Emmental"
      },
      {
        id: uuidv4(),
        img: "./img/extra/kiri.png",
        type: "Kiri"
      },
      {
        id: uuidv4(),
        img: "./img/extra/moza.png",
        type: "Mozzarella"
      },
      {
        id: uuidv4(),
        img: "./img/extra/mushroom.png",
        type: "Champignons"
      },
      {
        id: uuidv4(),
        img: "./img/extra/poivrons.png",
        type: "Poivrons"
      }
    ],
    myExtra: ""
  };
  render() {
    let { mesExtra } = this.state;

    let extra = "ton extra";
    const suiteSend = document.querySelector(".suiteSend");
    console.log(suiteSend);

    return (
      <div className=" container relative myFund  text-center flex-col rounded-xl  bg-white h-3/5 w-2/4 ">
        <h1 className="text-6xl uppercase font-bold mt-5">Compose {extra}</h1>
        <h2 className="text-4xl uppercase font-bold mt-10  ">
          <span className="h-5 w-5 px-4 bg-green-800 text-white rounded-lg">
            4. EXTRA
          </span>{" "}
        </h2>

        <form className="">
          <ul className=" flex space-x-5 mt-6 items-center mx-auto grid grid-cols-3  justify-items-center ">
            {mesExtra.map(extra => (
              <li className="text-center" key={extra.id}>
                <label htmlFor={extra.type}>
                  <img src={extra.img} className="center w-36 h-38" alt="ok" />
                  <h3 className="font-bold italic">{extra.type} </h3>
                </label>
                <input type="checkbox" className="inputExtra" id={extra.type} />
              </li>
            ))}
          </ul>
        </form>

        <NavLink to="/sauces">
          <span className="suiteSend p-9 text-7xl">&#10092;</span>
        </NavLink>
      </div>
    );
  }
}

export default Extra;
