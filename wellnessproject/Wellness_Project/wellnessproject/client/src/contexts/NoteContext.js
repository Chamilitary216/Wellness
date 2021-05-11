import React, { createContext, useReducer, useEffect } from 'react';
import { noteReducer } from '../reducers/noteReducers';

export const NoteContext = createContext();

const NoteContextProvider = (props) => {
    const [notes, dispatch] = useReducer(noteReducer, [], () => {
        const localData = localStorage.getItem('notes');
        return localData ? JSON.parse(localData) : [];
    });
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes))
    }, [notes]);
    return (
        <NoteContext.Provider value={{ notes, dispatch }}>
            { props.children }
        </NoteContext.Provider>
    )
}

export default NoteContextProvider; 