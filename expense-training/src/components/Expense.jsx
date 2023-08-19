import Card from './Card';
import ExpenseItem from './ExpenseItem';
import PropTypes from 'prop-types';
export default function Expense({ data }) {
  return (
    <Card classNames='expense_container'>
      {data.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            price={item.amount}
            date={item.date}
          />
        );
      })}
    </Card>
  );
}
Expense.propTypes = {
  data: PropTypes.array.isRequired,
};
