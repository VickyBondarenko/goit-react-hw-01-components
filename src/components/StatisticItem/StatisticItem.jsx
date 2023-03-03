import { ItemStat, LabelStat, QuantityStat } from './statisticItemStyle';
import PropTypes from 'prop-types';

const StatisticItem = props => {
  return (
    <ItemStat id={props.id}>
      <LabelStat>{props.label}</LabelStat>
      <QuantityStat>{props.quantity}%</QuantityStat>
    </ItemStat>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string,
  quantity: PropTypes.number,
};
export default StatisticItem;
