import './App.css';
import Greet from './components/Greet'

function App() {
  return (
    <div className="App">
      <Greet name="Text" place="Place">
        <p>Children Props</p>
      </Greet>
      <Greet name="Wold" place="Places">
        <button>Sumbit</button>
      </Greet>
    </div>
  );
}

export default App;
