import { Link } from 'react-router-dom';
import H1 from '../../components/UI/H1';

const Home = () => {
  return (
    <div>
      <H1>Home</H1>
      <ul>
        <li>
          <Link to={'/'}>Home</Link>
          <br />
          <Link to={'/brackets'}>Brackets</Link>
          <br />
          <Link to={'/palindrome'}>Palindrome</Link>
          <br />
          <Link to={'/calculator'}>Calculator</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
