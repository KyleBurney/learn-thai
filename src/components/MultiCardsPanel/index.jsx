import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FlashCard from '../FlashCard';
import Button from '@material-ui/core/Button';

const styles = {
    panel: {
        display: "flex",
        flexWrap: "wrap"
    }
};

class MultiCardsPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
        this.shuffle = this.shuffle.bind(this);
    }

    shuffle() {
        var shuffledCards = this.state.cards;
        for (let i = shuffledCards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledCards[i], shuffledCards[j]] = [shuffledCards[j], shuffledCards[i]];
        }
        this.setState({ cards: shuffledCards });
    }

    componentWillMount() {
        this.setState({
            cards: this.props.words.map((word, i) => {
                return <FlashCard key={i} thai={word.thai} english={word.english} definition={word.definition} filename={word.filename} dateAdded={word.dateAdded} />
            })
        })
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            cards: newProps.words.map((word, i) => {
                return <FlashCard key={i} thai={word.thai} english={word.english} definition={word.definition} filename={word.filename} dateAdded={word.dateAdded} />
            })
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.panel}>
                <Button onClick={() => {
                    this.shuffle()
                }}>Shuffle cards</Button>

                {/* stupid workaround */}
                {this.state.cards.map(card => {
                    return card;
                })}
            </div>
        );
    }
}

export default withStyles(styles)(MultiCardsPanel);