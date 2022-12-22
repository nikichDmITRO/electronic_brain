import React, { FC } from "react";
import Item from "./Item";

export type AnyArr = {
  id: number;
  body: string;
};

type BtnProps = { arr: AnyArr[]; delCl: (id: number) => void };

const ItemTodo: FC<BtnProps> = ({ arr, delCl }) => {
  return (
    <div>
      <div>
        {arr.map((item) => (
          <Item key={item.id} id={item.id} body={item.body} delCl={delCl} />
        ))}
      </div>
    </div>
  );
};

export default ItemTodo;
