import './App.css';
import Greet from './components/Greet'
import Greets from './components/Greets'

function App() {
  return (
    <div className="App">
      <h1>Functional Props</h1>
      <Greet name="Text" place="Place">
        <p>Children Props</p>
      </Greet>
      <Greet name="Wold" place="Places">
        <button>Sumbit</button>
      </Greet>

      <h1>Class Props</h1>
      <Greets name="Text" place="Place">
        <p>Children Props</p>
      </Greets>
      <Greets name="Wold" place="Places">
        <button>Sumbit</button>
      </Greets>
    </div>
  );
}

export default App;
