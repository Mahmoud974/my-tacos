import React, { Component } from "react";
import Compose from "../components/Compose";
import { NavLink } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

class Viandes extends Component {
  state = {
    mesViandes: [
      {
        id: uuidv4(),
        img: "./img/viandes/escalope.png",
        type: "Escalope\nde poulet"
      },
      {
        id: uuidv4(),
        img: "./img/viandes/merguez.png",
        type: "Merguez"
      },
      {
        id: uuidv4(),
        img: "./img/viandes/nuggets.png",
        type: "Nuggets"
      },
      {
        id: uuidv4(),
        img: "./img/viandes/steak.png",
        type: "Steak"
      },
      {
        id: uuidv4(),
        img: "./img/viandes/kebab.png",
        type: "Kebab"
      },
      {
        id: uuidv4(),
        img: "./img/viandes/tenders.png",
        type: "Tenders"
      }
    ]
  };
  render() {
    let { mesViandes } = this.state;
    let viande = "viande";
    return (
      <form className="  mx-auto relative myFund container text-center flex-col rounded-xl  bg-white h-3/5 w-2/4 ">
        <h1 className="text-6xl uppercase font-bold mt-5">
          Compose ta {viande}
        </h1>
        <h2 className="text-4xl uppercase font-bold mt-10  ">
          <span className="h-5 w-5 px-4 bg-blue-600 text-white rounded-lg">
            2. Viande
          </span>{" "}
        </h2>

        <div>
          <ul className="flex justify-between mx-auto grid grid-cols-3  justify-items-center ">
            {mesViandes.map(viande => (
              <li className="text-center" key={viande.id}>
                <label htmlFor={viande.type}>
                  <img src={viande.img} className="center w-38 h-36" alt="ok" />
                  <h3 className="font-bold italic">{viande.type} </h3>
                </label>
                <input type="checkbox" id={viande.type} />
              </li>
            ))}
          </ul>
        </div>

        <NavLink to="/">
          <span className=" p-9 text-7xl">&#10092;</span>
        </NavLink>

        <NavLink to="/sauces">
          <span className=" p-1 text-7xl">&#10093;</span>
        </NavLink>
      </form>
    );
  }
}

export default Viandes;
