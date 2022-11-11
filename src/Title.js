import Hobbies from './Hobbies';

const Title = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>I love coding</p>
      <Hobbies />
    </div>
  );
};
export default Title;
