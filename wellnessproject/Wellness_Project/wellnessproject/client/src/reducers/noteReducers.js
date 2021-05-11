import uuid from 'react-uuid';

export const noteReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_NOTE':
            return[...state, {
                date: action.note.date,
                note: action.note.note,
                id: uuid()
            }]
        case 'DELETE_NOTE':
            return state.filter(note => note.id !== action.id);
        default:
            return state
    }
}
