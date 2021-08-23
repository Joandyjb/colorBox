import React, { Component } from "react";
import Color from './Color';
import './Container.css';

class Container extends Component {
    static defaultProps= {
        num: 18

    }
    render(){
        const boxes = Array.from({ length: this.props.num }).map(
            () => (<Color />
        ));
        return <div className='Container'>{boxes}</div>;
    }
}

export default Container;