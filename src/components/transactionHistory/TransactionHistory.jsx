import TableRow from 'components/tableRow/TableRow';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

const TransactionHistory = props => {
  const data = props.items;
  return (
    <table className={css.transactionHistory}>
      <thead className={css.headRow}>
        <TableRow type={'TYPE'} amount={'AMOUNT'} currency={'CURRENCY'} />
      </thead>
      <tbody>
        {data.map(item => (
          <TableRow
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
};
export default TransactionHistory;
