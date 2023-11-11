import List from './components/List';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  var [state,setState] = useState([])
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response => setState(response.data))
  },[])
  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">id</th>
      <th scope="col">title</th>
      <th scope="col">status</th>
      
    </tr>
  </thead>
  {state.map((items)=> <List {...items} key={items.id} /> )}
</table>
        </div>
        </div>
     
    </div>
  );
}

export default App;
