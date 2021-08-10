import { PROFILE_NAME_SHOW, PROFILE_TOGGLE_SHOW } from "./actionTypes"

const initialState = {
    show: false,
    name: 'SOME NAME'
}

export const profileReducer = ( state = initialState, action) => {
    switch (action.type) {
        case (PROFILE_TOGGLE_SHOW): {
            return {
                ...state,
                show: !state.show
            };
        }
        case (PROFILE_NAME_SHOW): {
            return {
                ...state,
                show: !state.show
            };
        }
        default: 
        return state;
    }

}