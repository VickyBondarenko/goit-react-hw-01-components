const TableRow = props => {
  return (
    <tr>
      <th>{props.type}</th>
      <th>{props.amount}</th>
      <th>{props.currency}</th>
    </tr>
  );
};
export default TableRow;
