import Home from './component/Home';
import Navigation from './Navigation';
import './App.css';
import StateTask from './component/StateTask';
import Header from './component/Header';
import { useState } from 'react';

function App() {

  const [text1, setText] = useState("");

  function hello(msg){
    alert(msg);
  }

  return (
    <div className="App">
      <Header siteName="hello" other={hello} sakshi="myname"/>
      <Header siteName="hello12" other={hello} sakshi="myname12"/>
      <Navigation />
      <StateTask />
      
      <input type="text" onChange={(e)=>{setText(e.target.value)}} value={text1}></input>

    </div>
  );
}

export default App;
