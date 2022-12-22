import React from "react";
import ButtonTodo from "./buttonTodo/ButtonTodo";
import InputTodo from "./inputTodo/InputTodo";
import { useState } from "react";
import ItemTodo from "./itemTodo/ItemTodo";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { addTodo, delitTodo } from "../../store/slice/todoSlice";
import s from "./todo.module.css"


const Todo = () => {
  const [inp, setInp] = useState<string>("");
  const arr = useAppSelector((state) => state.todos.arrTodo);
  const dispatch=useAppDispatch()
  
  const addCl = () => {
    if (inp.trim().length) {
      dispatch(addTodo(inp));
      setInp("");
    }
  };

  const delCl = (id:number) => {
    dispatch(delitTodo(id));
    
 
  };
  return (
    <div>
      <InputTodo inp={inp} setInp={setInp} />
      <ButtonTodo addCl={addCl} />
      <ItemTodo arr={arr} delCl={delCl}/>
    </div>
  );
};

export default Todo;
