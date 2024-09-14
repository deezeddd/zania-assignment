import './App.css';
import Home from './components/Home'
import mockData from "../src/mocks/mockData.json"

function App() {
  return (
    <div className="App">
      <Home data = {mockData}/>
    </div>
  );
}

export default App;
