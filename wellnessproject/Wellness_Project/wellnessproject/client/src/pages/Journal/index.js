import React, { useState, useEffect } from 'react';
import JournalEntry from '../../components/JournalEntries';
import JournalForm from '../../components/JournalForm';
import "./JournalStyle.css";
import NoteContextProvider from '../../contexts/NoteContext';

const Journal = () => {
    const [date, setDate] = useState();
    const [entries, setEntries] = useState([]);
    const [userInput, setUserInput] = useState()

    const onChange = (event) => {
    }
    
    return (
        <div className='Journal'>
            <NoteContextProvider>
                <JournalForm 
                />
            <div>
                <JournalEntry
                entries = {entries} 
                />
            </div>
            </NoteContextProvider>
        </div>
    );
    
    }

    export default Journal;