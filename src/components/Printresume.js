import Resume from './Resume';
import Connect from './Connect';
import '.././print_resume.scss';
const Printresume = (props) => {
  return (
    <>
      <Resume />
      {props.title}
      <Connect />
    </>
  );
};

export default Printresume;
