import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardsPanel from '../CardsPanel';
import MultiCardsPanel from '../MultiCardsPanel';
import AddCardPanel from '../AddCardPanel';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import allWords from '../../data/words2.json';
import practiceListWords from '../../data/practiceListWords.json';
import lesson1Words from '../../data/lesson1.json';
import lesson2Words from '../../data/lesson2.json';
import lesson3Words from '../../data/lesson3.json';
import lesson4Words from '../../data/lesson4.json';

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
      cardsToShow: allWords,
      open: false
    }
  }

  componentWillMount() {
    allWords.sort(this.compare)
    practiceListWords.sort(this.compare)
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
        <Button onClick={() => { this.setState({ cardsToShow: allWords, showAllCards: true }) }}>All cards</Button>
        <Button onClick={() => { this.setState({ cardsToShow: practiceListWords, showAllCards: true }) }}>Practice List</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson1Words, showAllCards: true }) }}>Lesson 1</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson2Words, showAllCards: true }) }}>Lesson 2</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson3Words, showAllCards: true }) }}>Lesson 3</Button>
        <Button onClick={() => { this.setState({ cardsToShow: lesson4Words, showAllCards: true }) }}>Lesson 4</Button>
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
