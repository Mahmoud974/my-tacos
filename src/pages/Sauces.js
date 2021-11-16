import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

class Sauces extends Component {
  state = {
    mesSauces: [
      {
        id: uuidv4(),
        img: "./img/sauces/alge.png",
        type: "Algérienne"
      },
      {
        id: uuidv4(),
        img: "./img/sauces/barbecue.png",
        type: "Barbecue"
      },

      {
        id: uuidv4(),
        img: "./img/sauces/mayo.png",
        type: "Mayo"
      },
      {
        id: uuidv4(),
        img: "./img/sauces/samourai.png",
        type: "Samourai"
      },
      {
        id: uuidv4(),
        img: "./img/sauces/piment.png",
        type: "Piment"
      },

      {
        id: uuidv4(),
        img: "./img/sauces/curry.png",
        type: "Curry"
      }
    ]
  };
  render() {
    let { mesSauces } = this.state;
    let sauces = "ta sauces";
    return (
      <div className=" relative myFund container text-center flex-col rounded-xl  bg-white h-3/5 w-2/4 ">
        <h1 className="text-6xl uppercase font-bold mt-5">Compose {sauces}</h1>
        <h2 className="text-4xl uppercase font-bold mt-10  ">
          <span className="h-5 w-5 px-4 bg-red-500 text-white rounded-lg">
            3. Sauce
          </span>{" "}
        </h2>
        <div className="flex ">
          <ul className="flex justify-between mx-auto grid grid-cols-3  justify-items-center ">
            {mesSauces.map(sauce => (
              <li className="text-center " key={sauce.id}>
                <label htmlFor={sauce.type}>
                  <img src={sauce.img} className="center w-38 h-36" alt="ok" />
                  <h3 className="font-bold italic">{sauce.type} </h3>
                </label>
                <input type="checkbox" id={sauce.type} />
              </li>
            ))}
          </ul>
        </div>

        <NavLink to="/extras">
          <span className=" p-9 text-7xl">&#10093;</span>
        </NavLink>
      </div>
    );
  }
}

export default Sauces;
