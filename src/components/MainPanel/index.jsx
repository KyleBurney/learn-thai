import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardsPanel from '../CardsPanel';
import MultiCardsPanel from '../MultiCardsPanel';
import AddCardPanel from '../AddCardPanel';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import newerWords from '../../data/newerwords.json';
import memorizedWords from '../../data/memorizedwords.json';
import song1Words from '../../data/songs/song1.json';
import song1fullWords from '../../data/songs/song1full.json';
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
import lesson2_4Words from '../../data/lesson2/lesson4.json';
import lesson2_5Words from '../../data/lesson2/lesson5.json';

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
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  root: {
    flexGrow: 1
  }
});

class MainPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAllCards: true,
      cardsToShow: newerWords,
      openModal: false,
      openGeneralSelection: false,
      openSongsSelection: false,
      openLessonsSelection: false
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

  handleOpenModal = () => {
    this.setState({ openModal: true });
  };

  handleCloseModal = () => {
    this.setState({ openModal: false });
  };

  handleChangeSelection = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleCloseSelection = (openSelectionGroup) => {
    this.setState({ [openSelectionGroup]: false });
  };

  handleOpenSelection = (openSelectionGroup) => {
    console.log(openSelectionGroup)
    this.setState({ [openSelectionGroup]: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="card-group-general-select">General Words</InputLabel>
            <Select
              open={this.state.openGeneralSelection}
              onClose={() => this.handleCloseSelection("openGeneralSelection")}
              onOpen={() => this.handleOpenSelection("openGeneralSelection")}
              value={this.state.cardsToShow}
              onChange={this.handleChangeSelection}
              inputProps={{
                name: 'cardsToShow',
                id: 'card-group-general-select',
              }}
            >
              <MenuItem value={newerWords}>New Words</MenuItem>
              <MenuItem value={memorizedWords}>Memorized Words</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="card-group-songs-select">Words From Songs</InputLabel>
            <Select
              open={this.state.openSongsSelection}
              onClose={() => this.handleCloseSelection("openSongsSelection")}
              onOpen={() => this.handleOpenSelection("openSongsSelection")}
              value={this.state.cardsToShow}
              onChange={this.handleChangeSelection}
              inputProps={{
                name: 'cardsToShow',
                id: 'card-group-songs-select',
              }}
            >
              <MenuItem value={song1Words}>Song 1 New Words</MenuItem>
              <MenuItem value={song1fullWords}>Song 1 All Words</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="card-group-lessons-select">Words From Lessons</InputLabel>
            <Select
              open={this.state.openLessonsSelection}
              onClose={() => this.handleCloseSelection("openLessonsSelection")}
              onOpen={() => this.handleOpenSelection("openLessonsSelection")}
              value={this.state.cardsToShow}
              onChange={this.handleChangeSelection}
              inputProps={{
                name: 'cardsToShow',
                id: 'card-group-lessons-select',
              }}
            >
              <MenuItem value={lesson1_1Words}>lesson 1.1 Words</MenuItem>
              <MenuItem value={lesson1_2Words}>lesson 1.2 Words</MenuItem>
              <MenuItem value={lesson1_3Words}>lesson 1.3 Words</MenuItem>
              <MenuItem value={lesson1_4Words}>lesson 1.4 Words</MenuItem>
              <MenuItem value={lesson1_5Words}>lesson 1.5 Words</MenuItem>
              <MenuItem value={lesson1_6Words}>lesson 1.6 Words</MenuItem>
              <MenuItem value={lesson1_7Words}>lesson 1.7 Words</MenuItem>
              <MenuItem value={lesson1_8Words}>lesson 1.8 Words</MenuItem>
              <MenuItem value={lesson1_9Words}>lesson 1.9 Words</MenuItem>
              <MenuItem value={lesson1_10Words}>lesson 1.10 Words</MenuItem>
              <MenuItem value={lesson1_11Words}>lesson 1.11 Words</MenuItem>
              <MenuItem value={lesson1_12Words}>lesson 1.12 Words</MenuItem>
              <MenuItem value={lesson1_13Words}>lesson 1.13 Words</MenuItem>
              <MenuItem value={lesson1_14Words}>lesson 1.14 Words</MenuItem>
              <MenuItem value={lesson1_15Words}>lesson 1.15 Words</MenuItem>
              <MenuItem value={lesson1_16Words}>lesson 1.16 Words</MenuItem>
              <MenuItem value={lesson1_17Words}>lesson 1.17 Words</MenuItem>
              <MenuItem value={lesson1_18Words}>lesson 1.18 Words</MenuItem>
              <MenuItem value={lesson1_19Words}>lesson 1.19 Words</MenuItem>
              <MenuItem value={lesson1_20Words}>lesson 1.20 Words</MenuItem>
              <MenuItem value={lesson1_21Words}>lesson 1.21 Words</MenuItem>
              <MenuItem value={lesson1_22Words}>lesson 1.22 Words</MenuItem>
              <MenuItem value={lesson1_23Words}>lesson 1.23 Words</MenuItem>
              <MenuItem value={lesson1_24Words}>lesson 1.24 Words</MenuItem>
              <MenuItem value={lesson1_25Words}>lesson 1.25 Words</MenuItem>
              <MenuItem value={lesson2_1Words}>lesson 2.1 Words</MenuItem>
              <MenuItem value={lesson2_2Words}>lesson 2.2 Words</MenuItem>
              <MenuItem value={lesson2_3Words}>lesson 2.3 Words</MenuItem>
              <MenuItem value={lesson2_4Words}>lesson 2.4 Words</MenuItem>
              <MenuItem value={lesson2_5Words}>lesson 2.5 Words</MenuItem>
            </Select>
          </FormControl>
        </form>
        <Button onClick={() => { this.setState({ showAllCards: false }) }}>One card at a time</Button>
        <Button onClick={() => { this.setState({ showAllCards: true }) }}>All cards at once</Button>
        <Button onClick={this.handleOpenModal}>Add a Card</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.openModal}
          onClose={this.handleCloseModal}
        >
          <div className={classes.paper}>
            <AddCardPanel />
          </div>
        </Modal>
        {this.state.showAllCards ? <MultiCardsPanel words={this.state.cardsToShow} /> : <CardsPanel words={this.state.cardsToShow} />}

      </div >
    );
  }
}

MainPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

const MainPanelWrapped = withStyles(styles)(MainPanel);

export default MainPanelWrapped;
