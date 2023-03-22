import Home from './component/Home';
import Navigation from './Navigation';
import './App.css';
import StateTask from './component/StateTask';
import Header from './component/Header';
import { useState } from 'react';
import Calculator from './component/Calculator';
import Mode from './component/Mode';
import DigitalClock from './component/DigitalClock';
import FormValidation from './component/FormValidation';

function App() {

  const [text1, setText] = useState("");

  function hello(msg){
    alert(msg);
  }

  return (
    <main className="light">
      <Header siteName="hello" other={hello} sakshi="myname"/>
      <Header siteName="hello12" other={hello} sakshi="myname12"/>
      <Navigation />
      <StateTask />
      <Calculator />
      <Mode />
      <DigitalClock />
      <FormValidation />
      <div>{10 + 20}</div>
      
      <input type="text" onChange={(e)=>{setText(e.target.value)}} value={text1}></input>

    </main>
  );
}

export default App;
