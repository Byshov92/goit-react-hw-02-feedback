import PropTypes from 'prop-types';
import style from "./FeedbackOptions.module.css"

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
    <div>
    {options.map((option) => (
        <button className={style.btn}
        
        key={option}
        onClick={() => onLeaveFeedback(option)}
        >
        {option}
        </button>
    ))}
    </div>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
};