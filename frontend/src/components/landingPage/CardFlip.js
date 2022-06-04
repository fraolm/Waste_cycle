import React, { Component } from 'react'
import ReactCardFlip from 'react-card-flip'
import BackCard from './BackCard'
import Card from './Card';

// Flip card in the homepage
export default class CardFlip extends Component {
    constructor(props) {
        super()
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }
    


    render() {
        return (
            <ReactCardFlip  isFlipped={this.state.isFlipped} flipDirection="horizontal" containerStyle = {{width:"640px"}}>
                <Card onClick={this.handleClick} param = {this.props.logoName} >{this.props.description}</Card>
                <BackCard onClick={this.handleClick}>{this.props.BackCard_Description}</BackCard>
            </ReactCardFlip>
        )
    }
}
