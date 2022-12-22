import './App.css';
import { Link } from 'react-router-dom';
import DataFetching from './components/DataFetching';

function App() {
  return (
    <div className="App">
      
      <header>
      <Link className='logoSakura' to='/'>SAKURA TAROT</Link>
        <h2>Elige 3 cartas por su fortuna!</h2>
        <DataFetching/>
      </header>

      {/* <Link to='/fortune'>Go to your fortune</Link> */}
    </div>
  );
}

export default App;