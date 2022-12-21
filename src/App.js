import './App.css';
//import { Link } from 'react-router-dom';
import DataFetching from './components/DataFetching';

function App() {

  return (
    <div className="App">
      
      <header>
        <h1>SAKURA TAROT</h1>
        <h2>Choose 3 cards for your fortune!</h2>
        <DataFetching/>
      </header>

      {/* <Link to='/fortune'>Go to your fortune</Link> */}
    </div>
  );
}

export default App;