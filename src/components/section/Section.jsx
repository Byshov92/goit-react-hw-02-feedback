import PropTypes from 'prop-types';
import style from "./Section.module.css";

export const Section = ({ title, children }) => {
    return (
        <div className={style.containerHeading}>
            <h2 className={style.heading}>{title}</h2>
            {children}
        </div>
    );
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};