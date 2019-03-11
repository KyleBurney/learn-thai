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
import song1Words from '../../data/songs/song1.json';
import lesson1_1Words from '../../data/lesson1/lesson1.json';
import lesson1_2Words from '../../data/lesson1/lesson2.json';
import lesson1_3Words from '../../data/lesson1/lesson3.json';
import lesson1_4Words from '../../data/lesson1/lesson4.json';
import lesson1_5Words from '../../data/lesson1/lesson5.json';
import lesson1_6Words from '../../data/lesson1/lesson6.json';
import lesson1_7Words from '../../data/lesson1/lesson7.json';
import lesson1_8Words from '../../data/lesson1/lesson8.json';
import lesson1_9Words from '../../data/lesson1/lesson9.json';
import lesson1_10Words from '../../data/lesson1/lesson10.json';
import lesson1_11Words from '../../data/lesson1/lesson11.json';
import lesson1_12Words from '../../data/lesson1/lesson12.json';
import lesson1_13Words from '../../data/lesson1/lesson13.json';
import lesson1_14Words from '../../data/lesson1/lesson14.json';
import lesson1_15Words from '../../data/lesson1/lesson15.json';
import lesson1_16Words from '../../data/lesson1/lesson16.json';
import lesson1_17Words from '../../data/lesson1/lesson17.json';
import lesson1_18Words from '../../data/lesson1/lesson18.json';
import lesson1_19Words from '../../data/lesson1/lesson19.json';
import lesson1_20Words from '../../data/lesson1/lesson20.json';
import lesson1_21Words from '../../data/lesson1/lesson21.json';
import lesson1_22Words from '../../data/lesson1/lesson22.json';
import lesson1_23Words from '../../data/lesson1/lesson23.json';
import lesson1_24Words from '../../data/lesson1/lesson24.json';
import lesson1_25Words from '../../data/lesson1/lesson25.json';
import lesson2_1Words from '../../data/lesson2/lesson1.json';
import lesson2_2Words from '../../data/lesson2/lesson2.json';
import lesson2_3Words from '../../data/lesson2/lesson3.json';

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
        <Button color={this.state.cardsToShow === newerWords ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: newerWords, showAllCards: true }) }}>New cards</Button>
        <Button color={this.state.cardsToShow === memorizedWords ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: memorizedWords, showAllCards: true }) }}>Old cards</Button>
        <Button color={this.state.cardsToShow === song1Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: song1Words, showAllCards: true }) }}>S1</Button>
        <Button color={this.state.cardsToShow === lesson1_1Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_1Words, showAllCards: true }) }}>1.1</Button>
        <Button color={this.state.cardsToShow === lesson1_2Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_2Words, showAllCards: true }) }}>1.2</Button>
        <Button color={this.state.cardsToShow === lesson1_3Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_3Words, showAllCards: true }) }}>1.3</Button>
        <Button color={this.state.cardsToShow === lesson1_4Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_4Words, showAllCards: true }) }}>1.4</Button>
        <Button color={this.state.cardsToShow === lesson1_5Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_5Words, showAllCards: true }) }}>1.5</Button>
        <Button color={this.state.cardsToShow === lesson1_6Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_6Words, showAllCards: true }) }}>1.6</Button>
        <Button color={this.state.cardsToShow === lesson1_7Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_7Words, showAllCards: true }) }}>1.7</Button>
        <Button color={this.state.cardsToShow === lesson1_8Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_8Words, showAllCards: true }) }}>1.8</Button>
        <Button color={this.state.cardsToShow === lesson1_9Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_9Words, showAllCards: true }) }}>1.9</Button>
        <Button color={this.state.cardsToShow === lesson1_10Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_10Words, showAllCards: true }) }}>1.10</Button>
        <Button color={this.state.cardsToShow === lesson1_11Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_11Words, showAllCards: true }) }}>1.11</Button>
        <Button color={this.state.cardsToShow === lesson1_12Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_12Words, showAllCards: true }) }}>1.12</Button>
        <Button color={this.state.cardsToShow === lesson1_13Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_13Words, showAllCards: true }) }}>1.13</Button>
        <Button color={this.state.cardsToShow === lesson1_14Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_14Words, showAllCards: true }) }}>1.14</Button>
        <Button color={this.state.cardsToShow === lesson1_15Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_15Words, showAllCards: true }) }}>1.15</Button>
        <Button color={this.state.cardsToShow === lesson1_16Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_16Words, showAllCards: true }) }}>1.16</Button>
        <Button color={this.state.cardsToShow === lesson1_17Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_17Words, showAllCards: true }) }}>1.17</Button>
        <Button color={this.state.cardsToShow === lesson1_18Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_18Words, showAllCards: true }) }}>1.18</Button>
        <Button color={this.state.cardsToShow === lesson1_19Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_19Words, showAllCards: true }) }}>1.19</Button>
        <Button color={this.state.cardsToShow === lesson1_20Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_20Words, showAllCards: true }) }}>1.20</Button>
        <Button color={this.state.cardsToShow === lesson1_21Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_21Words, showAllCards: true }) }}>1.21</Button>
        <Button color={this.state.cardsToShow === lesson1_22Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_22Words, showAllCards: true }) }}>1.22</Button>
        <Button color={this.state.cardsToShow === lesson1_23Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_23Words, showAllCards: true }) }}>1.23</Button>
        <Button color={this.state.cardsToShow === lesson1_24Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_24Words, showAllCards: true }) }}>1.24</Button>
        <Button color={this.state.cardsToShow === lesson1_25Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson1_25Words, showAllCards: true }) }}>1.25</Button>
        <Button color={this.state.cardsToShow === lesson2_1Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson2_1Words, showAllCards: true }) }}>2.1</Button>
        <Button color={this.state.cardsToShow === lesson2_2Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson2_2Words, showAllCards: true }) }}>2.2</Button>
        <Button color={this.state.cardsToShow === lesson2_3Words ? "secondary" : ""} onClick={() => { this.setState({ cardsToShow: lesson2_3Words, showAllCards: true }) }}>2.3</Button>
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
