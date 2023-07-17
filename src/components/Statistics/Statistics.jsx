import { getColor } from "helpers/get-color"
import { Item } from "./Statistics.styled"
import PropTypes from 'prop-types';

export const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return <ul>
  <Item color={getColor('good')}><p>Good: <span>{good}</span></p></Item>
  <Item color={getColor('neutral')}><p>Neutral: <span>{neutral}</span></p></Item>
  <Item color={getColor('bad')}><p>Bad: <span>{bad}</span></p></Item>
  <Item><p>Total: <span>{total}</span></p></Item>
  <Item><p>Positive feedback: <span>{positivePercentage}%</span></p></Item>
</ul>
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired
}