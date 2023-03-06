import { Statistica, Title, StatList } from './statisticStyle';
import StatItem from 'components/StatisticItem/StatisticItem';
import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
  return (
    <Statistica>
      {{ title } && <Title>{title}</Title>}

      <StatList>
        {stats.map(item => (
          <StatItem
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
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Statistics;
