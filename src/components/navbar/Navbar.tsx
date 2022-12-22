import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <NavLink to={"/"}>В начало</NavLink>
      <NavLink to={"/todo"}>Тодо лист</NavLink>
      <NavLink to={"/calulate"}>Калькулятор расходов</NavLink>
      <NavLink to={"/user"}>Пользователи</NavLink>
    </div>
  );
};

export default Navbar;
