import { Statistica, Title, StatList } from './statisticStyle';
import StatItem from 'components/StatisticItem/StatisticItem';
import PropTypes from 'prop-types';

const Statistics = props => {
  const data = props.stats;

  return (
    <Statistica>
      <Title>{props.title}</Title>

      <StatList>
        {data.map(item => (
          <StatItem
            id={item.id}
            key={item.id}
            label={item.label}
            quantity={item.percentage}
          />
        ))}
      </StatList>
    </Statistica>
  );
};
Statistics.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.object),
};
export default Statistics;
