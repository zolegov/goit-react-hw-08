import { useDispatch, useSelector } from "react-redux";
import css from "./UserMenu.module.css";
import { selectUser } from "../../redux/auth/selectors";
import { logout } from "../../redux/auth/operations";

export default function UserMenu() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  return (
    <div className={css.wrapper}>
      <p className="css.username">Welcome, {user.name}</p>
      <button type="button" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
}
