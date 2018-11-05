import React, { Component } from 'react';
import AddCardPanel from '../AddCardPanel';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import ReactAudioPlayer from 'react-audio-player';
import practiceListWords from '../../data/practiceListWords.json';

const styles = theme => ({
  card: {
    minWidth: 275,
    maxWidth: 500
  },
  thaiCard: {
    background: "#DCDCDC"
  },
  title: {
    fontSize: 14,
  },
  header: {
    marginTop: 16,
  },
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

class FlashCard extends Component {
  audioElement = {}

  constructor(props) {
    super(props);

    this.state = {
      showEnglish: true,
      open: false
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress, false);
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleKeyPress = event => {
    if (event.code === "Enter") {
      this.setState({ showEnglish: !this.state.showEnglish })
    } else if (event.code === "Space" && Object.keys(this.audioElement).length != 0) {
      this.audioElement.paused ? this.audioElement.play() : this.audioElement.pause();
    }
  }

  getIndexOfWord = () => {
    for (var i = 0; i < practiceListWords.length; i++) {
      if (practiceListWords[i].english === this.props.english) {
        return i;
      }
    }
    return -1;
  }

  addOrRemoveWord = () => {
    let indexOfWord = this.getIndexOfWord();
    if (indexOfWord === -1) {
      practiceListWords.push({
        "thai": this.props.thai,
        "english": this.props.english,
        "filename": this.props.filename,
        "dateAdded": this.props.dateAdded
      });
    } else {
      practiceListWords.splice(indexOfWord, 1);
      console.log("delete ", this.props.filename);
    }
    this.writeToFile(practiceListWords);
  }

  writeToFile = stringToWrite => {
    const jsonFilename = "practiceListWords.json";
    const contentType = "application/json;charset=utf-8;";
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      var blob = new Blob([decodeURIComponent(encodeURI(JSON.stringify(stringToWrite)))], { type: contentType });
      navigator.msSaveOrOpenBlob(blob, jsonFilename);
    } else {
      var a = document.createElement('a');
      a.download = jsonFilename;
      a.href = 'data:' + contentType + ',' + encodeURIComponent(JSON.stringify(stringToWrite));
      a.target = '_blank';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={this.state.showEnglish ? classes.card : classes.card + " " + classes.thaiCard}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {this.state.showEnglish ? "English Translation" : "Thai Translation"}
          </Typography>
          <Typography className={classes.header} variant="headline" component="h2">
            {this.state.showEnglish ? this.props.english : this.props.thai}
          </Typography>
        </CardContent>
        {
          this.props.filename.length !== 0
            ?
            <CardActions>
              <ReactAudioPlayer
                src={require("../../data/recordings/" + this.props.filename)}
                controls
                ref={(element) => {
                  if (element) {
                    this.audioElement = element.audioEl;
                  }
                }}
              />
            </CardActions>
            : ""
        }
        <CardActions>
          <Button onClick={() => { this.setState({ showEnglish: !this.state.showEnglish }) }}>{this.state.showEnglish ? "Show Thai" : "Show English"}</Button>
          <Button onClick={this.addOrRemoveWord}>{this.getIndexOfWord() !== -1 ? "Remove from List" : "Add To List"}</Button>
          <Button onClick={this.handleOpen}>Edit Card</Button>
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div className={classes.paper}>
              <AddCardPanel englishTerm={this.props.english} thaiTranslation={this.props.thai} recordingFile={this.props.filename} />
            </div>
          </Modal>
        </CardActions>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Added: {this.props.dateAdded}
          </Typography>
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(styles)(FlashCard);
