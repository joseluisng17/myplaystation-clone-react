import { types } from '../../types/types';

/* const initialSate = {
    elements: [],
    activeElement: null
}; */

export const elementsReducer = ( state, action ) => {


    switch ( action.type ) {

        case types.elementSetAtive:
            return {
                ...state,
                activeElement: action.payload
            };

        case types.elementAddNew:
            return {
                ...state,
                elements: [
                    ...state.elements,
                    action.payload
                ]
            };

        case types.elementClearActiveEvent:
            return {
                ...state,
                activeElement: null
            }

        case types.elementUpdated:
            return {
                ...state,
                elements: state.elements.map(
                    e => (e._id === action.payload._id) ? action.payload : e
                )
            }

        case types.elementDeleted:
            console.log("log del reducer")
            console.log(action.payload)
            return {
                ...state,
                elements: state.elements.filter(
                    e => (e._id !== action.payload)
                ),
                activeElement: null,
            }
        case types.elementLoaded:
            return {
                ...state,
                elements: [...action.payload]
            }

        case types.eventLogout:
            return {
                elements: [],
                activeElement: null
            }
    
        default:
            return state;
    }

}

