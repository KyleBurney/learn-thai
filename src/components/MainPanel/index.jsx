import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardsPanel from '../CardsPanel';
import MultiCardsPanel from '../MultiCardsPanel';
import AddCardPanel from '../AddCardPanel';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import newerWords from '../../data/newerwords.json';
import memorizedWords from '../../data/memorizedwords.json';
import lesson1Words from '../../data/lesson1.json';
import lesson2Words from '../../data/lesson2.json';
import lesson3Words from '../../data/lesson3.json';
import lesson4Words from '../../data/lesson4.json';
import lesson5Words from '../../data/lesson5.json';
import lesson6Words from '../../data/lesson6.json';
import lesson7Words from '../../data/lesson7.json';
import lesson8Words from '../../data/lesson8.json';
import lesson9Words from '../../data/lesson9.json';
import lesson10Words from '../../data/lesson10.json';
import lesson11Words from '../../data/lesson11.json';
import lesson12Words from '../../data/lesson12.json';
import lesson13Words from '../../data/lesson13.json';
import lesson14Words from '../../data/lesson14.json';

const styles = theme => ({
  paper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: 'translate(-50%, -50%)',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class MainPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllCards: true,
      cardsToShow: newerWords,
      open: false
    }
  }

  componentWillMount() {
    newerWords.sort(this.compare)
    memorizedWords.sort(this.compare)
  }

  compare = (a, b) => {
    var dateA = new Date(a.dateAdded);
    var dateB = new Date(b.dateAdded);
    if (dateA < dateB)
      return 1;
    if (dateA > dateB)
      return -1;
    return 0;
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="MainPanel">
        <Button onClick={() => { this.setState({ cardsToShow: newerWords, showAllCards: true }) }}>New cards</Button>
        <Button onClick={() => { this.setState({ cardsToShow: memorizedWords, showAllCards: true }) }}>Old cards</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson1Words, showAllCards: true }) }}>Lesson 1</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson2Words, showAllCards: true }) }}>Lesson 2</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson3Words, showAllCards: true }) }}>Lesson 3</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson4Words, showAllCards: true }) }}>Lesson 4</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson5Words, showAllCards: true }) }}>Lesson 5</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson6Words, showAllCards: true }) }}>Lesson 6</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson7Words, showAllCards: true }) }}>Lesson 7</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson8Words, showAllCards: true }) }}>Lesson 8</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson9Words, showAllCards: true }) }}>Lesson 9</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson10Words, showAllCards: true }) }}>Lesson 10</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson11Words, showAllCards: true }) }}>Lesson 11</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson12Words, showAllCards: true }) }}>Lesson 12</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson13Words, showAllCards: true }) }}>Lesson 13</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson14Words, showAllCards: true }) }}>Lesson 14</Button>
        <Button onClick={() => { this.setState({ showAllCards: false }) }}>One card at a time</Button>
        <Button onClick={this.handleOpen}>Add a Card</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={classes.paper}>
            <AddCardPanel />
          </div>
        </Modal>
        {this.state.showAllCards ? <MultiCardsPanel words={this.state.cardsToShow} /> : <CardsPanel />}

      </div>
    );
  }
}

MainPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

const MainPanelWrapped = withStyles(styles)(MainPanel);

export default MainPanelWrapped;
