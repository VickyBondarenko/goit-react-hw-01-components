import { ItemStat, LabelStat, QuantityStat } from './statisticItemStyle';
import PropTypes from 'prop-types';

const StatisticItem = ({ label, quantity }) => {
  return (
    <ItemStat>
      <LabelStat>{label}</LabelStat>
      <QuantityStat>{quantity}%</QuantityStat>
    </ItemStat>
  );
};

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};

export default StatisticItem;
