import React from 'react';

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            counter: 0,
        }
    }
    
    render() {
        
        return (
            <div>
                <h1>Count: {this.state.counter}</h1>
                <div className='gridrow'>
                    <Cell backgroundColor='white' increaseFunc = {()=> this.increaseOfBlack()} decreaseFunc = {()=> this.decreaseOfBlack()}/>
                    <Cell backgroundColor='white' increaseFunc = {()=> this.increaseOfBlack()} decreaseFunc = {()=> this.decreaseOfBlack()}/>
                </div>
                <div className='gridrow'>
                    <Cell backgroundColor='white' increaseFunc = {()=> this.increaseOfBlack()} decreaseFunc = {()=> this.decreaseOfBlack()}/>
                    <Cell backgroundColor='white' increaseFunc = {()=> this.increaseOfBlack()} decreaseFunc = {()=> this.decreaseOfBlack()}/>
                </div>
            </div>
        
        );
        
    }

    increaseOfBlack() {
        const updatednums = this.state.counter + 1;
        this.setState({
            counter: updatednums,
        })
    }

    decreaseOfBlack() {
        const updatednums = this.state.counter - 1;
        this.setState({
            counter: updatednums,
        })
    }
}

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundColor: props.backgroundColor,
        };
    }

    _changeColor = function() {
        this.setState({
            backgroundColor: this.state.backgroundColor === 'white' ? 'black':'white'
            
        })
        if(this.state.backgroundColor === 'black' ){
            this.props.decreaseFunc();
        }else{
            this.props.increaseFunc();
        }
    };

    render() {
        return (<div className='cell' style={{backgroundColor: this.state.backgroundColor}} onClick={()=> this._changeColor()}></div>)
    }
}

