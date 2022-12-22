import React from "react";
import Todo from "./components/todo/Todo";
import s from "./app.module.css";
import Navbar from "./components/navbar/Navbar";
import Start from "./components/start/Start";
import { Routes, Route } from "react-router-dom";
import User from "./components/user/User";
function App() {
  return (
    <div className={s.main}>
     <Navbar/>
      <Routes>
      <Route path="/" element={<Start />} />
        <Route path="todo" element={<Todo />} />
        <Route path="user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
