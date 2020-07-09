import React, { Component } from 'react';
import {robots} from './components/robots'
import './App.css';
import List from './components/List';
import Header from './components/Header';
import Search from './components/Search';
import Scroll from './components/Scroll';
 class App extends Component {
   state = { 
robots : [],
inputValue: ""
    }
componentDidMount () {
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response =>  response.json())
  .then(users => this.setState  ({robots:users  })
)
}
onSearch =(e)=>{
const inputValue = e.target.value
this.setState ({
  inputValue,
})
}
   render()
    { 
 if (this.state.robots.length <1 )   { return( <h1>...Loading</h1>) }
else
     return (  
    <div className="wrapper"> 
 <Header />
<Search  onSearch={this.onSearch} inputValue={this.state.inputValue} />

<Scroll id="44" inputValue={this.state.inputValue}  >
  
<List robots={this.state.robots} inputValue={this.state.inputValue} />   

  
  </Scroll>


</div>    
     );
   }
 }
 export default App;
