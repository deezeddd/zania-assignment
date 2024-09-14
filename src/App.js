import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import mockData from "../src/mocks/mockData.json"

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Home data = {mockData}/>
      {/* </header> */}
    </div>
  );
}

export default App;
