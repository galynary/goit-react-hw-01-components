import PropTypes from 'prop-types';

import {
  StatisticsList,
  Title,
  Stats,
  Item,
  Label,
  Percentage,
} from './Statistics.styted';
function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ title, stats }) {
  return (
    <StatisticsList>
      {title === 'Upload stats' ? <Title>{title}</Title> : null}
      <Stats>
        {stats.map(stat => (
          <Item key={stat.id} color={`${randomHexColor()}`}>
            <Label>{stat.label}</Label>
            <Percentage>{stat.percent}</Percentage>
          </Item>
        ))}
      </Stats>
    </StatisticsList>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
