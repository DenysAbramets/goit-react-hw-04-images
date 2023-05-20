import { ButtonLoad } from './Button.styled';
import PropTypes from 'prop-types';

function Button(props) {
  return (
    <ButtonLoad type="button" onClick={props.PageChange}>
      Load More
    </ButtonLoad>
  );
}
export default Button;

Button.propTypes = {
  PageChange: PropTypes.func.isRequired,
};
