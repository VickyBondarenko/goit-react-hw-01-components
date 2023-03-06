import { Item, Label, Quantity } from './statsItemStyles';
import PropTypes from 'prop-types';

const StatsItem = ({ label, quantity }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <Quantity>{quantity}</Quantity>
    </Item>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default StatsItem;
