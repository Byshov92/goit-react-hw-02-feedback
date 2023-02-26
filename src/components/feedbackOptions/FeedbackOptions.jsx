import PropTypes from 'prop-types';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
    return (
    <div>
    {options.map((option) => (
        <button
        
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