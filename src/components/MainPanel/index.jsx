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
  selectedGroup: {
    color: "red"
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
              <MenuItem value={newerWords}><span className={this.state.cardsToShow === newerWords ? classes.selectedGroup : ""}>New Words</span></MenuItem>
              <MenuItem value={memorizedWords}><span className={this.state.cardsToShow === memorizedWords ? classes.selectedGroup : ""}>Memorized Words</span></MenuItem>
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
              <MenuItem value={song1Words}><span className={this.state.cardsToShow === song1Words ? classes.selectedGroup : ""}>Song 1 New Words</span></MenuItem>
              <MenuItem value={song1fullWords}><span className={this.state.cardsToShow === song1fullWords ? classes.selectedGroup : ""}>Song 1 All Words</span></MenuItem>
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
              <MenuItem value={lesson1_1Words}><span className={this.state.cardsToShow === lesson1_1Words ? classes.selectedGroup : ""}>lesson 1.1 Words</span></MenuItem>
              <MenuItem value={lesson1_2Words}><span className={this.state.cardsToShow === lesson1_2Words ? classes.selectedGroup : ""}>lesson 1.2 Words</span></MenuItem>
              <MenuItem value={lesson1_3Words}><span className={this.state.cardsToShow === lesson1_3Words ? classes.selectedGroup : ""}>lesson 1.3 Words</span></MenuItem>
              <MenuItem value={lesson1_4Words}><span className={this.state.cardsToShow === lesson1_4Words ? classes.selectedGroup : ""}>lesson 1.4 Words</span></MenuItem>
              <MenuItem value={lesson1_5Words}><span className={this.state.cardsToShow === lesson1_5Words ? classes.selectedGroup : ""}>lesson 1.5 Words</span></MenuItem>
              <MenuItem value={lesson1_6Words}><span className={this.state.cardsToShow === lesson1_6Words ? classes.selectedGroup : ""}>lesson 1.6 Words</span></MenuItem>
              <MenuItem value={lesson1_7Words}><span className={this.state.cardsToShow === lesson1_7Words ? classes.selectedGroup : ""}>lesson 1.7 Words</span></MenuItem>
              <MenuItem value={lesson1_8Words}><span className={this.state.cardsToShow === lesson1_8Words ? classes.selectedGroup : ""}>lesson 1.8 Words</span></MenuItem>
              <MenuItem value={lesson1_9Words}><span className={this.state.cardsToShow === lesson1_9Words ? classes.selectedGroup : ""}>lesson 1.9 Words</span></MenuItem>
              <MenuItem value={lesson1_10Words}><span className={this.state.cardsToShow === lesson1_10Words ? classes.selectedGroup : ""}>lesson 1.10 Words</span></MenuItem>
              <MenuItem value={lesson1_11Words}><span className={this.state.cardsToShow === lesson1_11Words ? classes.selectedGroup : ""}>lesson 1.11 Words</span></MenuItem>
              <MenuItem value={lesson1_12Words}><span className={this.state.cardsToShow === lesson1_12Words ? classes.selectedGroup : ""}>lesson 1.12 Words</span></MenuItem>
              <MenuItem value={lesson1_13Words}><span className={this.state.cardsToShow === lesson1_13Words ? classes.selectedGroup : ""}>lesson 1.13 Words</span></MenuItem>
              <MenuItem value={lesson1_14Words}><span className={this.state.cardsToShow === lesson1_14Words ? classes.selectedGroup : ""}>lesson 1.14 Words</span></MenuItem>
              <MenuItem value={lesson1_15Words}><span className={this.state.cardsToShow === lesson1_15Words ? classes.selectedGroup : ""}>lesson 1.15 Words</span></MenuItem>
              <MenuItem value={lesson1_16Words}><span className={this.state.cardsToShow === lesson1_16Words ? classes.selectedGroup : ""}>lesson 1.16 Words</span></MenuItem>
              <MenuItem value={lesson1_17Words}><span className={this.state.cardsToShow === lesson1_17Words ? classes.selectedGroup : ""}>lesson 1.17 Words</span></MenuItem>
              <MenuItem value={lesson1_18Words}><span className={this.state.cardsToShow === lesson1_18Words ? classes.selectedGroup : ""}>lesson 1.18 Words</span></MenuItem>
              <MenuItem value={lesson1_19Words}><span className={this.state.cardsToShow === lesson1_19Words ? classes.selectedGroup : ""}>lesson 1.19 Words</span></MenuItem>
              <MenuItem value={lesson1_20Words}><span className={this.state.cardsToShow === lesson1_20Words ? classes.selectedGroup : ""}>lesson 1.20 Words</span></MenuItem>
              <MenuItem value={lesson1_21Words}><span className={this.state.cardsToShow === lesson1_21Words ? classes.selectedGroup : ""}>lesson 1.21 Words</span></MenuItem>
              <MenuItem value={lesson1_22Words}><span className={this.state.cardsToShow === lesson1_22Words ? classes.selectedGroup : ""}>lesson 1.22 Words</span></MenuItem>
              <MenuItem value={lesson1_23Words}><span className={this.state.cardsToShow === lesson1_23Words ? classes.selectedGroup : ""}>lesson 1.23 Words</span></MenuItem>
              <MenuItem value={lesson1_24Words}><span className={this.state.cardsToShow === lesson1_24Words ? classes.selectedGroup : ""}>lesson 1.24 Words</span></MenuItem>
              <MenuItem value={lesson1_25Words}><span className={this.state.cardsToShow === lesson1_25Words ? classes.selectedGroup : ""}>lesson 1.25 Words</span></MenuItem>
              <MenuItem value={lesson2_1Words}><span className={this.state.cardsToShow === lesson2_1Words ? classes.selectedGroup : ""}>lesson 2.1 Words</span></MenuItem>
              <MenuItem value={lesson2_2Words}><span className={this.state.cardsToShow === lesson2_2Words ? classes.selectedGroup : ""}>lesson 2.2 Words</span></MenuItem>
              <MenuItem value={lesson2_3Words}><span className={this.state.cardsToShow === lesson2_3Words ? classes.selectedGroup : ""}>lesson 2.3 Words</span></MenuItem>
              <MenuItem value={lesson2_4Words}><span className={this.state.cardsToShow === lesson2_4Words ? classes.selectedGroup : ""}>lesson 2.4 Words</span></MenuItem>
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
