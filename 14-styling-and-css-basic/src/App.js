import './App.css';
import FunctionalStyle from './components/FunctionalStyle'
import StyleClass from './components/StyleClass'
import './components/Style.css'
import style from './components/cssModule.module.css'

function App() {

  const texting = {
    fontSize: '25px',
    color: 'green'
  }

  return (
    <div className="App">
      {/* Functional */}
      <FunctionalStyle name="Functional Style" />

      {/* Class */}
      <StyleClass />

      {/* Inline */}
      <h1 style={texting}>Inline</h1>

      {/* Module */}
      <h1 className={style.success}>Module</h1>
    </div>
  );
}

export default App;
