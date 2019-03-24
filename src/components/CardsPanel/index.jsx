import React, { Component } from 'react';
import FlashCard from '../FlashCard';
import Button from '@material-ui/core/Button';

class CardsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wordNum: 0,
            remainingWords: Object.assign([], props.words),
            selectedWord: props.words[0],
            currentIndex: 0
        }
    }

    // componentWillMount() {
    //     for (let i = this.props.words.length - 1; i > 0; i--) {
    //         const j = Math.floor(Math.random() * (i + 1));
    //         [this.props.words[i], this.props.words[j]] = [this.props.words[j], this.props.words[i]];
    //     }
    //     this.setState({ cards: this.props.words });
    // }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress, false);
    }

    shuffle = () => {
        var shuffledCards = this.props.words;
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }
        this.setState({ cards: shuffledCards });
    }

    handleKeyPress = event => {
        if (event.code === "ArrowRight") {
            this.moveRight();
        } else if (event.code === "ArrowLeft") {
            this.moveLeft();
        }
    }

    moveRight = () => {
        if (this.state.currentIndex < this.props.words.length - 1) {
            this.setState({ currentIndex: this.state.currentIndex + 1 })
        }
    }

    moveLeft = () => {
        if (this.state.currentIndex > 0) {
            this.setState({ currentIndex: this.state.currentIndex - 1 })
        }
    }

    render() {
        return (
            <div className="MainPanel">
                <Button onClick={() => {
                    this.shuffle()
                }}>Shuffle cards</Button>
                <FlashCard thai={this.props.words[this.state.currentIndex].thai} english={this.props.words[this.state.currentIndex].english} definition={this.props.words[this.state.currentIndex].definition} filename={this.props.words[this.state.currentIndex].filename} dateAdded={this.props.words[this.state.currentIndex].dateAdded} />

                <Button variant="outlined" onClick={this.moveLeft}>Back</Button>
                <Button variant="outlined" onClick={this.moveRight}>Next</Button>
                {1 + this.state.currentIndex} / {this.props.words.length}
            </div>
        );
    }
}

export default CardsPanel;
