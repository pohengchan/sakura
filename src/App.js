import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>Home Page</h1>
      <Link to='/fortune'>Go to your fortune</Link>
    </>
  );
}

export default App;
