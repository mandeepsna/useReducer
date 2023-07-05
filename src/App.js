import { useReducer } from "react";
import "./App.css";

const reduce = (initialState, action) => {
       if(action.type==='increment') { return ++initialState }
       else { return --initialState}; 
  };

function App() {

  let [initialState, dispatch] = useReducer(reduce, 0);
  return (
    <div className="col-md-5 mx-5 mt-5">
      <button
        className="btn btn-primary me-4"
        onClick={() => {
          dispatch({type:'increment'});
        }}
      >
        Increment
      </button>
      <span>{initialState}</span>
      <button
        className="btn btn-danger mx-4"
        onClick={() => {
          dispatch({type:"decrement"});
        }}
      >
        Decrement
      </button>
    </div>
  );
}

export default App;
