import './App.css';
import { Link } from 'react-router-dom';
import DataFetching from './components/DataFetching';

function App() {
// const dataArray = [];  
// const uri = 'https://6388b6e5a4bb27a7f78f96a5.mockapi.io/sakura-cards/55';
// const initDetails = {
//     method: 'get',
//     headers: {"Content-Type": "application/json; charset=utf-8"},
//     mode: "cors" 
// };

//   let card = null;
//   async function getData(){
//       const response = await fetch( uri, initDetails );
//       card = await response.json();
//        console.log("print " + card.sakuraCard )
//       dataArray.push(card)
//       console.log("print " + dataArray.length )     
//       return dataArray;
//   }
 
// getData();
//  setTimeout(() => {  console.log(card.englishName); }, 5000);
  return (
    <div className="App">
      
      <header>
        <h1>SAKURA TAROT</h1>
        <h2>Choose 3 cards for your fortune!</h2>
        <p>this is some card text</p>
        <DataFetching/>
      </header>

      <Link to='/fortune'>Go to your fortune</Link>
    </div>
  );
}

export default App;