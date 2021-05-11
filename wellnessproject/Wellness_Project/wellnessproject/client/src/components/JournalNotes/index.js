import React, { useContext } from 'react';
import { NoteContext } from '../../contexts/NoteContext';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(0.5),
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

const JournalNotes = ({ note }) => {
    const { dispatch } = useContext(NoteContext);
    const classes = useStyles();
    return (

        <li className='note col-md-3'>
            <div className='row'>
                <IconButton onClick={() => dispatch({type: 'DELETE_NOTE', id: note.id})} className='col-md-1' className={classes.margin} aria-label="delete">
                    <DeleteIcon fontSize='medium' />
                </IconButton>
                <h3 className='date col-md-10'>{note.date}</h3>
            </div>
            <hr/>
            <p className='col-md-10'>{note.note}</p>
        </li>
    )
}

export default JournalNotes;