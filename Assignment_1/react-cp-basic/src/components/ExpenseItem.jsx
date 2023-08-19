import PropTypes from 'prop-types';
import Date from './Date';
export default function ExpenseItem({ title, amount, date }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{amount}</p>
      <Date date={date} />
    </div>
  );
}

ExpenseItem.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
  date: PropTypes.any,
};
