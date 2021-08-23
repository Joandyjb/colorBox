import React, { Component } from "react";
import { choice } from "./Helpers";
import './Color.css'

class Color extends Component {
    static defaultProps= {
        allColors: ['red', 'blue', 'green', 'purple', 'orange', 'brown', 'black']

    }

    constructor(props){
        super(props);
        this.state = { color: choice(this.props.allColors) };
        this.handleClick = this.handleClick.bind(this)

    }

    switch(){
        let newColor;
        do {
            newColor =  choice(this.props.allColors);
        } while (newColor == this.state.color)
        this.setState({
            color : newColor
        })
    }

    handleClick(){
        this.switch();
    }

    render(){
        return(
            
        <div className='Color' style={{backgroundColor: this.state.color}} onClick={this.handleClick}> 
        
        
        
        </div>
        )
    }
}

export default Color;