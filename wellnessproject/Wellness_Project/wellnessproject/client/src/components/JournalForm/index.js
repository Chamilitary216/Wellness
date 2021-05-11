import React, { useContext, useState } from "react";
import { NoteContext } from '../../contexts/NoteContext';
// Imports for materialUI.
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import NoteAddIcon from '@material-ui/icons/NoteAdd';
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));

const JournalForm = () => {
    const { dispatch } = useContext(NoteContext);
    const [date, setDate] = useState('');
    const [note, setNote] = useState('');
    const classes = useStyles();
    const handleSubmit = (event) => {
      event.preventDefault();
      dispatch({type: 'ADD_NOTE', note: {
        date, note
      }});
      setDate('');
      setNote('');
    };

    return (
        <div className = 'row'>
            <div className = 'col-md-3'></div>
            <div className = 'col-md-6 journal-form'>
              <form>
                <Paper component = "form" className = {classes.root}>
                  <InputBase
                    onChange = {(e) => {
                      setDate(moment().format('MMM/Do/h:mm:a'));
                      setNote(e.target.value);
                    }}
                    required
                    type = 'text'
                    className = {classes.input}
                    placeholder = "Whats On Your Mind?"
                    inputProps = {{ 'aria-label': 'search google maps' }}
                  />
            
                  <Divider 
                    className = {classes.divider}  
                    orientation = "vertical" 
                  />
                  <IconButton 
                    className = {classes.iconButton} 
                    aria-label = "directions"
                    onClick={handleSubmit}
                  >
                    <NoteAddIcon />
                  </IconButton>
                </Paper>
              </form>
            </div>
        </div>
    )
}



export default JournalForm;