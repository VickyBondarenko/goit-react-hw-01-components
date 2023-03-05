import css from './TableRow.module.css';
import PropTypes from 'prop-types';

const TableRow = props => {
  return (
    <tr className={css.row}>
      <th className={css.tableCell}>{props.type}</th>
      <th className={css.tableCell}>{props.amount}</th>
      <th className={css.tableCell}>{props.currency}</th>
    </tr>
  );
};

TableRow.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
export default TableRow;
