import TableRow from 'components/tableRow/TableRow';

const TransactionHistory = props => {
  const data = props.items;
  console.log(data);
  return (
    <table className="transaction-history">
      <thead>
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

export default TransactionHistory;
