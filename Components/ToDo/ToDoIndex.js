import React, {Component} from 'react';

export default class ToDoIndex extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInput: '',
            list: [],
            isToggleOn: false
           

        }
        this.handleClick = this.handleClick.bind(this);
    }
    changeUserInput(input){
        this.setState({
            id: 1 + Math.random(),
            value: this.state.userInput.slice(),
            userInput: input
        }, () => console.log(input))
    }
    addToList(input){
        let listArray = this.state.list;

        listArray.push(input);
        this.setState({
            list: listArray,
            userInput: ""
        })
    }
    updateInput( key, value) {

        this.setState({
            [key]: value
        })
        
        // const newInput = this.state.useInput.map(_input => {
        //     if(input === _input)
        //     return{
        //         input,
        //         completed: !input.completed
        //     }
        //     else{
        //         return _input
        //     }
        // })
    }

    // toggleComplete = (name) => {
    //     this.setState({
    //         tasks: this.state.tasks.map(task => {
    //             if (task.name === name) {
    //               return {
    //                   ...task,
    //                   complete: !task.complete
    //               }
    //             } else {
    //                 return task;
    //             }
    //         })
    //     })
    // }

    handleClick() {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn
        }));
      }
    render() {
        return(
            <div>
                <input
                onChange={(e) => this.changeUserInput(e.target.value)}
                value={this.state.userInput}
                type="text"/><br/>
                <button onClick={ () =>this.addToList(this.state.userInput)}>Click Me!</button>

        <ul>{this.state.list.map(task => <li >{task}<button onClick={this.handleClick}{...this.state.isToggleOn ? <li>Done</li> : <li>Done</li>}>mark done</button></li>)}
            
        </ul>
            </div>
        )

        
    }
}