// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import LoginOption from './components/LoginOption/LoginOption';
import ToDoList from '../src/components/ToDoList/ToDoList';



function App() {
  const [loginCondition, setloginCondition] = useState(false);


  return (
    <div className="App">
      {!loginCondition && <LoginOption updateState={setloginCondition} />}
      {console.log(loginCondition)}
      {loginCondition  && <ToDoList />}
      {/* <ToDoList/>
    <LoginOption/> */}
    </div>
  );
}

export default App;
