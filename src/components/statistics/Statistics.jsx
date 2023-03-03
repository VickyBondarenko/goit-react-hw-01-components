import { Statistica, Title, StatList } from './statisticStyle';
import StatItem from 'components/StatisticItem/StatisticItem';

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
        {/* <li class="item">
          <span class="label">.docx</span>
          <span class="percentage">4%</span>
        </li>
        <li class="item">
          <span class="label">.mp3</span>
          <span class="percentage">14%</span>
        </li>
        <li class="item">
          <span class="label">.pdf</span>
          <span class="percentage">41%</span>
        </li>
        <li class="item">
          <span class="label">.mp4</span>
          <span class="percentage">12%</span>
        </li> */}
      </StatList>
    </Statistica>
  );
};

export default Statistics;
