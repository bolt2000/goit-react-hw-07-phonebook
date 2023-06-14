import css from './FilterContact.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/filter';
// import { selectFilter } from 'redux/selectors';

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.filter);

  const filterContact = evt => {
    dispatch(getFilter(evt.currentTarget.value.trim()));
  };

  return (
    <label className={css.Label}>
      <span className={css.Span}>Find contacts by name</span>
      <input
        className={css.Input}
        type="text"
        value={value}
        onChange={filterContact}
        name="filter"
      />
    </label>
  );
};

export default Filter;
 