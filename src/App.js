import React,{Component} from 'react';
import Cardlist from "./Components/card-list/card-list.component";
import SearchModify from "./search-box/searchComponent";
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      obj:[ ],
      Searchinput:''
      }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({obj:users}));
  }
  handleChange = e=>{ 
  this.setState({Searchinput: e.target.value})

  }
  render(){
    const {obj,Searchinput}= this.state;
    const monsFilters= obj.filter(mons=> mons.name.toLowerCase().includes(Searchinput.toLowerCase()));
  return (
    
    <div className="App ">
     <h1>Monster Roldex</h1>
      <SearchModify
       placeholder="Search monster"
       handleChange={this.handleChange}
      />
      <Cardlist obj={monsFilters}  />
    </div>
  );
}}

export default App;
