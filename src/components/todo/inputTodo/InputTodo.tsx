import React, { FC } from "react";

type inpTodoProps = {
  inp: string;
  setInp: (str: string) => void;
};

const InputTodo: FC<inpTodoProps> = ({ inp, setInp }) => {
  return (
    <div>
      <input type="text" value={inp} onChange={(e) => setInp(e.target.value)} />
    </div>
  );
};

export default InputTodo;
