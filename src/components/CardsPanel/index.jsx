import React, { Component } from 'react';
import FlashCard from '../FlashCard';
import Button from '@material-ui/core/Button';
import words from '../../data/newerwords.json';

class CardsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wordNum: 0,
            remainingWords: Object.assign([], words),
            selectedWord: words[0],
            currentIndex: 0
        }
    }

    componentWillMount() {
        for (let i = words.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [words[i], words[j]] = [words[j], words[i]];
        }
        this.setState({ cards: words });
    }
    componentDidMount() {
        document.addEventListener("keydown", this.handleKeyPress, false);
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeyPress, false);
    }

    handleKeyPress = event => {
        if (event.code === "ArrowRight") {
            this.moveRight();
        } else if (event.code === "ArrowLeft") {
            this.moveLeft();
        }
    }

    moveRight = () => {
        if (this.state.currentIndex < words.length - 1) {
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
                <FlashCard thai={words[this.state.currentIndex].thai} english={words[this.state.currentIndex].english} definition={words[this.state.currentIndex].definition} filename={words[this.state.currentIndex].filename} dateAdded={words[this.state.currentIndex].dateAdded} />

                <Button variant="outlined" onClick={this.moveLeft}>Back</Button>
                <Button variant="outlined" onClick={this.moveRight}>Next</Button>
                {1 + this.state.currentIndex} / {words.length}
            </div>
        );
    }
}

export default CardsPanel;
