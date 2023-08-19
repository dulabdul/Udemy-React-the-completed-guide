import Card from './Card';
import ExpenseDate from './ExpenseDate';
import PropTypes from 'prop-types';
export default function ExpenseItem({ title, price, date }) {
  return (
    <Card classNames={'expense_item'}>
      <ExpenseDate date={date} />
      <div className='expense_item-title'>
        <h2>{title}</h2>
      </div>
      <div className='expense_item-cost'>
        <p>{price}</p>
      </div>
    </Card>
  );
}

ExpenseItem.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  date: PropTypes.object.isRequired,
};
