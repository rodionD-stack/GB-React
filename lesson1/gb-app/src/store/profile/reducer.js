import { PROFILE_SET_NAME, PROFILE_TOGGLE_SHOW, PROFILE_NAME_SHOW, PROFILE_DROP_NAME, SET_AUTH, SET_ERROR } from "./actionTypes";

const initialState = {
    show: false,
    name: 'SOME NAME',
    authorized: false,
    error: null,
};

export const profileReducer = ( state = initialState, {type, payload}) => {
    switch (type) {
        case (PROFILE_TOGGLE_SHOW): {
            return {
                ...state,
                show: !state.show
            };
        }
        case PROFILE_DROP_NAME: {
            return {
              ...state,
              name: "",
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
                name: payload,
            };
        }
        case SET_AUTH: {
            return {
              ...state,
              authorized: payload,
              error: null,
            };
          }
          case SET_ERROR: {
            return {
              ...state,
              error: payload,
            };
          }
          default:
            return state;
    }

}