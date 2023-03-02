import { Item, Label, Quantity } from './statsItemStyles';
import PropTypes from 'prop-types';

const StatsItem = props => {
  return (
    <Item>
      <Label>{props.label}</Label>
      <Quantity>{props.quantity}</Quantity>
    </Item>
  );
};

StatsItem.propTypes = {
  label: PropTypes.string,
  quantity: PropTypes.number,
};
export default StatsItem;
