import React ,{ Component } from 'react';
import './App.css';
import Person from './Persons/Person'

class App extends Component {
  state={
    persons:[
      {name:"Pallavi", age:21},
      {name:"Shivay", age:23},
      {name:"Anubhav", age:23}

    ]
  }

  switchNameHandler =() =>{
   // console.log("Was clicked!")
   this.setState({
    persons:[
      {name:"Lavi", age:21},
      {name:"Shivay", age:23},
      {name:"Baba", age:23}
    ]
   })
  }

  namechangeHandler = (event) => {
    this.setState({
      persons:[
        {name:"Pallavi", age:21},
        {name:event.target.value, age:23},
        {name:"Anubhav", age:23}
  
      ]
     })
    }
 
  render(){
    const style = {
      font:'inherit',
      border:'1px solid blue',
      padding :'8px',
      cursor:'pointer'
    };
  return (
    <div className="App">
      <h1>heyyyyyyyyyyyyyyyyyyyy</h1>
      <button 
      style={style}
      onClick={this.switchNameHandler}> Switch Name</button>

      <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
      <Person name={this.state.persons[1].name}  age={this.state.persons[1].age} click={this.switchNameHandler} changed={this.namechangeHandler}>Hobbies: love cricket</Person>
      <Person name={this.state.persons[2].name}  age={this.state.persons[2].age} />
    </div>
  );
}
}

export default App
