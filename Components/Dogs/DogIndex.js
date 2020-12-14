import React, { Component } from 'react';
import Dogs from './Dogs';

class DogIndex extends Component {
    
    
    constructor(props){
        super(props);
        
        this.state = {
            loading: true,
            data: "",
            img: [],
            message: []
            
            
        };
    }

     handleSubmit = () => {

        fetch("https://dog.ceo/api/breeds/image/random")
        .then((res) => res.json())
        .then(data => {
            console.log(data)
             this.setState({data: data.message})
            })
        }
        // console.log(data)
        // console.log(img)


    componentDidMount() {
            // const response = await fetch(url);
            // const data = await response.json();
            
        }

        render() {
            return(
                <div>
                    <ul>
                        {/* {this.state.loading ? <div>...Loading</div> : <div>{this.state.img}</div>} */}
                    </ul>
                        <img scr={this.state.data} style={{height : '100px' , width: '100px'}} alt=""  />
                    <button onClick={() => this.handleSubmit()} >New Pic</button>
                </div>

            )
        }
    

}
export default DogIndex;
