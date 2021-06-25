import React from 'react';
import './App.css';
import CardList from './components/CardList';
import SearchBar from './components/SearchBar';
import {robots} from './utils/Robot';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      robotArray: robots,
      search: ''
    }
  }
  onSearch = (event) => {
    this.setState({search: event.target.value})
  }
  render(){
    const filteredRobots = this.state.robotArray.filter(robot => {
      return ( 
         robot.name.toLowerCase().includes(this.state.search.toLowerCase())
         )     
    })
      return (
       
        <div className="App tc">
            <SearchBar search={this.onSearch}/>
            <CardList robots={filteredRobots}/>
        </div>
      );

      }
}
export default App;