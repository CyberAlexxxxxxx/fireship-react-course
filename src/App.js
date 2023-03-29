import './App.css';
import Card from './components/card';
import { useState } from 'react';

function App() {

  const [darkMode, setDarkMode] = useState(true);
  const data = [
    {id: 1, name: 'item1'},
    {id: 2, name: 'item2'},
    {id: 3, name: 'item3'},
    {id: 4, name: 'item4'},
  ];


  function eventHandler(e){
    console.log(e.target.value);
  }
  return (
    <>
    <ul>
    {data.map(({id, name}) =>
     <Card key={id} title={name} desc={name} />
    )}
</ul>
    <button onClick={() => {darkMode ? console.log("darkmode is on"): console.log("darkmode is off")}}>check</button>
    <button onClick={() => setDarkMode(!darkMode)}>change</button>




    <input
    onChange={eventHandler}
    />
    </>
  );
}

export default App;
