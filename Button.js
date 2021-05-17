import { render } from '@testing-library/react';
import React from 'react';

class Button extends React.Component{
    constructor(){
        super();
        this.state = {counter:0};
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(){
        this.setState({counter : this.state.counter+1});
    }

    render(){
        return <button onClick={this.handleButtonClick}>Click No. = {this.state.counter}</button>;
    }
}

export default Button;