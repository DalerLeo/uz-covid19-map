import React, {useState} from 'react';
import Info from './Info'
import './App.css';
import Map from './Map'
import InfoList from "./InfoList";
function App() {

  const [selected, setSelected] = useState('')
  const onSelect = (val) => setSelected(val)
  return (
    <div className="App">
        <Map onSelect={onSelect} selected={selected}/>
      <div className="mainInfo">

      <Info/>
      <InfoList onSelect={onSelect} selected={selected}/>
      </div>
    </div>
  );
}

export default App;
