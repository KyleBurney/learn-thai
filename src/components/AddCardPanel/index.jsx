import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import allWords from '../../data/words2.json';
import practiceListWords from '../../data/practiceListWords.json';
import Button from '@material-ui/core/Button';
var RecordRTC = require('recordrtc');
var getUserMedia = require('getusermedia');

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
});

var recordRTC = null;

class AddCardPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            englishTerm: "",
            thaiTranslation: "",
            recordingFile: "",
            recording: false
        }
    }

    componentWillMount() {
        this.setState({
            englishTerm: this.props.englishTerm,
            thaiTranslation: this.props.thaiTranslation,
            recordingFile: this.props.recordingFile,
        })
    }

    validateJson(json) {
        let validJson

        try {
            validJson = JSON.stringify(JSON.parse(this.state.json), null, 2)
        } catch (e) {
            throw e
        }

        return validJson
    }

    handleChange = stateVar => event => {
        this.setState({
            [stateVar]: event.target.value,
        });
    };

    addCard = () => {
        let newWords = allWords;
        if (this.props.englishTerm) {
            let indexOfCurrentWord = this.getIndexOfWord(newWords, this.props.englishTerm);
            if (indexOfCurrentWord !== -1) {
                newWords.splice(indexOfCurrentWord, 1);
                console.log("delete ", this.props.recordingFile);
            }
        }

        let audioFilename = this.props.recordingFile || "";
        if (recordRTC) {
            audioFilename = this.state.englishTerm.replace(/\s/g, '') + (new Date).getTime() + '.wav';
            recordRTC.save(audioFilename);
        }

        newWords.push({
            "thai": this.state.thaiTranslation,
            "english": this.state.englishTerm,
            "filename": audioFilename,
            "dateAdded": new Date()
        });

        this.writeToFile("words.json", newWords);

        this.setState({
            recording: false,
            englishTerm: "",
            thaiTranslation: "",
            recordingFile: ""
        })
    };

    deleteCard = () => {
        let indexOfCurrentWord = this.getIndexOfWord(allWords, this.props.englishTerm);
        if (indexOfCurrentWord !== -1) {
            allWords.splice(indexOfCurrentWord, 1);
            console.log("delete ", this.props.recordingFile);
            this.writeToFile("words.json", allWords);
        }

        indexOfCurrentWord = this.getIndexOfWord(practiceListWords, this.props.englishTerm);
        if (indexOfCurrentWord !== -1) {
            practiceListWords.splice(indexOfCurrentWord, 1);
            this.writeToFile("practiceListWords.json", practiceListWords);
        }
    }

    getIndexOfWord = (arr, value) => {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i].english === value) {
                return i;
            }
        }
        return -1;
    }

    writeToFile = (jsonFilename, stringToWrite) => {
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

    toggleRecording = () => {
        const context = this;
        getUserMedia({ video: false, audio: true }, function (err, stream) {
            if (!context.state.recording) {
                recordRTC = RecordRTC(stream, { recorderType: RecordRTC.StereoAudioRecorder, mimeType: 'audio/wav' });
                recordRTC.startRecording();
            } else {
                recordRTC.stopRecording(function (audioURL) { });
            }
            context.setState({ recording: !context.state.recording })
        })
    }

    render() {
        const { classes } = this.props;

        return (
            <form className={classes.container} noValidate autoComplete="off">
                <TextField
                    id="standard-name"
                    label="English Term"
                    className={classes.textField}
                    value={this.state.englishTerm}
                    onChange={this.handleChange('englishTerm')}
                    margin="normal"
                />
                <TextField
                    id="standard-name"
                    label="Thai Translation"
                    className={classes.textField}
                    value={this.state.thaiTranslation}
                    onChange={this.handleChange('thaiTranslation')}
                    margin="normal"
                />

                <Button color={this.state.recording ? "secondary" : "primary"} onClick={this.toggleRecording}>Record Audio</Button>
                <Button variant="outlined" onClick={this.addCard}>Add Card</Button>
                <Button variant="outlined" disabled={!this.props.englishTerm} onClick={this.deleteCard}>Delete Card</Button>
            </form>
        );
    }
}

AddCardPanel.propTypes = {

};

const AddCardPanelWrapped = withStyles(styles)(AddCardPanel);

export default AddCardPanelWrapped;
