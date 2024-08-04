import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filters/slice";
import { TextField } from "@mui/material";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.filter);

  return (
    <div className={css.searchcomponent}>
      <p className={css.searchDecription}>Find contacts by name or number</p>
      <TextField
        id="outlined-search"
        label="search"
        variant="outlined"
        type="text"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
