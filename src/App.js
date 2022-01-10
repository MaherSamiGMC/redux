import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { addNumber, subNumber } from './redux/actions';

function App() {
  const state = useSelector(state => state)
  const dispatch = useDispatch()
  console.log(state)
  return (
    <div className="App">
      <button onClick={()=>dispatch(addNumber(2))}> + </button>
      {state.count}
      <button onClick={()=>dispatch(subNumber())}> - </button>
    </div>
  );
}

export default App;
