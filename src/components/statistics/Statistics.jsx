import { PropTypes } from 'prop-types';
import style from "./Statistics.module.css"

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
    <div>
        <h2>Statistics</h2>
        <ul>
            <li className={style.good}>Good: {good}</li>
            <li className={style.neutral}>Neutral: {neutral}</li>
            <li className={style.bad}>Bad: {bad}</li>
            <li className={style.total}>Total: {total}</li>
            <li className={style.positivePercentage}>Positive feedback: {positivePercentage}%</li>
        </ul>
    </div>
    );
};
Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};