import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/Counter';
import Colors from './components/colors/Colors';
import Foods from './components/foods/Foods';

function App() {
  return (
    <>
      <div className="main-container">
        <Counter />
        <Colors />
        <Foods /> 
      </div>
    </>
  );
}

export default App;
