import React, { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import {robots} from './utils/Robot';

function App ()  {
  const [ robotArray, setRobots] = useState(robots);
  const [search, setSearch] = useState('');
  //   this.state = {
  //     robotArray: robots,
  //     search: ''
    
  // }
  const onSearch = (event) => {
    setSearch(event.target.value)
  }

    const filteredRobots = robotArray.filter(robot => {
      return ( 
         robot.name.toLowerCase().includes(search.toLowerCase())
         )     
    })
      return (
       
        <div className="App tc">
            <h1>ROBOTS FOR EVERYONE</h1>
            <SearchBar search={onSearch}/>
            <CardList robots={filteredRobots}/>
        </div>
      );

      
}
export default App;