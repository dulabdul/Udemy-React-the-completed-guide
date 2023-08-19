import PropTypes from 'prop-types';
export default function ExpenseDate({ date }) {
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.toLocaleString('en-US', { month: '2-digit' });
  const year = date.getFullYear();
  return (
    <div className='expense_item-date'>
      <p className='expense_item-date-month'>{month}</p>
      <p className='expense_item-date-year'>{year}</p>
      <p className='expense_item-date-day'>{day}</p>
    </div>
  );
}

ExpenseDate.propTypes = {
  date: PropTypes.any.isRequired,
};
