import PropTypes from 'prop-types';

import {
  StatisticsList,
  Title,
  Stats,
  Item,
  Label,
  Percentage,
} from './Statistics.styled';

function randomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default function Statistics({ title, stats }) {
  return (
    <StatisticsList>
      {title && <Title>{title}</Title>}
      <Stats>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} color={`${randomHexColor()}`}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
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
