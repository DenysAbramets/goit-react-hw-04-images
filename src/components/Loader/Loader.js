/* eslint-disable no-unused-vars */
import { ProgressBar } from 'react-loader-spinner';
const css = {
  marginLeft: 'auto',
  marginRight: 'auto',
};

function Spinner() {
  return (
    <ProgressBar
      height="80"
      width="80"
      ariaLabel="progress-bar-loading"
      wrapperStyle={css}
      wrapperClass="progress-bar-wrapper"
      borderColor="#F4442E"
      barColor="#51E5FF"
    />
  );
}
export default Spinner;
