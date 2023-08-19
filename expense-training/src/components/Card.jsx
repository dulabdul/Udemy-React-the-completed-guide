import PropTypes from 'prop-types';

export default function Card({ children, classNames }) {
  return <div className={`card ${classNames}`}>{children}</div>;
}
Card.propTypes = {
  children: PropTypes.any.isRequired,
  classNames: PropTypes.string,
};
