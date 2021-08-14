import { PROFILE_SET_NAME, PROFILE_TOGGLE_SHOW, PROFILE_NAME_SHOW } from "./actionTypes";

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
                name: '',
            };
        }
        case (PROFILE_SET_NAME): {
            return {
                ...state,
                name: action.payload,
            };
        }
        default: 
        return state;
    }

}