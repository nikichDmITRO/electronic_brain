import React, { FC } from "react";
interface btnProps {
  addCl: () => void;
}

const ButtonTodo: FC<btnProps> = ({ addCl }) => {
  return (
    <div>
      <button onClick={addCl}>add</button>
    </div>
  );
};

export default ButtonTodo;
