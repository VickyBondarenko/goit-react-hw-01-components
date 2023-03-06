import css from './TableRow.module.css';
import PropTypes from 'prop-types';

const TableRow = ({ type, amount, currency }) => {
  return (
    <tr className={css.row}>
      <th className={css.tableCell}>{type}</th>
      <th className={css.tableCell}>{amount}</th>
      <th className={css.tableCell}>{currency}</th>
    </tr>
  );
};

TableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TableRow;
