import { Action, todoItem } from "../models/models";

/* export const initialState:todoItem[] = []; */

export const todoReducer = (state:todoItem[], action:Action):todoItem[] => {
    switch(action.type) {
        case 'SET_VALUE':
            return {...state, ...action.payload}
        case 'DONE':
            return state.map(item => item.id === action.payload ? {...item, isDone: !item.isDone} : item);
        case 'ADD':
            return [...state, {id: Date.now(), title: action.payload, isDone: false}];
        case 'EDIT':
            return state.map(item => item.id === action.payload.id ? {...item, title: action.payload.title} : item)
        case 'DELETE':
            return state.filter(item => item.id !== action.payload);
        default:
            return state;
    }
}

