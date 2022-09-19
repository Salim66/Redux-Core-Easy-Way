import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Counter from './components/counter/Counter';
import Colors from './components/colors/Colors';
import Foods from './components/foods/Foods';

function App() {

  const { colors } = useSelector(state => state);

  return (
    <>
      <div style={{ backgroundColor: colors }} className="main-container">
        <Counter />
        <Colors />
        <Foods /> 
      </div>
    </>
  );
}

export default App;
