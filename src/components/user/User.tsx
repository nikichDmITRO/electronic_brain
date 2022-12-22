import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hook/hook";
import { getUsers } from "../../store/slice/userSlice";

const User = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);
  const data = useAppSelector((state) => state.user.arrTodo);

  return (
    <div>
      {data.map((e) => (
        <div key={e.id}>
          {e.id} {e.name}
        </div>
      ))}
    </div>
  );
};

export default User;
