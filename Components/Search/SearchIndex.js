import React, {Component} from 'react';
import {Input} from 'reactstrap';
 
class SearchIndex extends Component {
  constructor(props){
    super(props);
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchedthings: ''
    }
  }
  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({ searchedthings: e.target.value})
  }

  

 

//  function searchFunction() {
//  }

 render() {
   let filteredThings = this.state.things.filter((thing) =>{
     return thing.toLowerCase().includes(this.state.searchedthings.toLowerCase())
   })
   return(

     <div>
       <Input onChange={this.handleInput} placeholder='Search Here' />
   <h3>Results: {filteredThings.map (thing => <li>{thing}</li>)}</h3>
     </div>
   )
 };
}

 
export default SearchIndex;
