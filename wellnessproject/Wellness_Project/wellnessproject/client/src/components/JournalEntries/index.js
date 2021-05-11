import React, { useContext } from 'react';
import { NoteContext } from '../../contexts/NoteContext';
import JournalNotes from '../JournalNotes';
import MoodBadIcon from '@material-ui/icons/MoodBad';

const JournalEntry = () => {
    const { notes } = useContext(NoteContext)
    console.log({ notes })
    return notes.length ? (
        <div className='notes'>
            <ul className='row'>
                { notes.map(note => {
                    return (
                        <JournalNotes note={note} key={note.id} />
                    )
                })}
            </ul>
        </div>
    ) : (
    <div className='no-notes'>
        <h1 className='no-notes'>You have no current notes.</h1>
        <MoodBadIcon style={{ fontSize: 300}} />
    </div>
    )
}

export default JournalEntry;