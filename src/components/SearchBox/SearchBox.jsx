import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.filter);

  return (
    <div className={css.searchcomponent}>
      <p className={css.searchDecription}>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
