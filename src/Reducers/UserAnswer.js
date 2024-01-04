import { initialState } from "./initialState";

export const userStoredAnswer = (state = initialState, action) => {
    switch (action.type) {
        case 'SELECTED_ANSWER':

            return (
                [...state, action.payload]
            );
        default:
            return state
    }
}