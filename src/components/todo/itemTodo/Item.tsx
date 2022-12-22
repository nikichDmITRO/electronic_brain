import { type } from "os";
import React, { FC } from "react";
import { AnyArr } from "./ItemTodo";
import s from "./item.module.css"
type ItemProps = {
  id: number;
  body: string;
  delCl: (id:number) => void;
};

const Item: FC<ItemProps> = ({ id, body, delCl }) => {
  return (
    <div key={id}>
      {id} {body}
      <button className={s.delitButton} onClick={()=>delCl(id)}>delet</button>
    </div>
  );
};

export default Item;
