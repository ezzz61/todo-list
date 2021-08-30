import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.modlue.css";

export default function Navigation({ location }) {
  const isActiveParam = (params) => {
    if (location.pathname === params) {
      return "line";
    }
    return "";
  };
  return (
    <section className="border-gray-300 border-b-2">
      <ul className="flex justify-around text-center font-semibold">
        <li
          className={`${isActiveParam(
            "/"
          )} transition-all w-3/12 md:w-2/12 h-12 relative`}
        >
          <Link to="/">All</Link>
          {/* <div className={isActiveParam("/")}></div> */}
        </li>
        <li
          className={`${isActiveParam(
            "/active"
          )} w-3/12 md:w-2/12 h-12 relative transition-all`}
        >
          <Link to="/active">Active</Link>
          {/* <div className={isActiveParam("/active")}></div> */}
        </li>
        <li
          className={`${isActiveParam(
            "/completed"
          )} w-3/12 md:w-2/12 h-12 relative transition-all`}
        >
          <Link to="/completed">Completed</Link>
          {/* <div className={isActiveParam("/completed")}></div> */}
        </li>
      </ul>
    </section>
  );
}
