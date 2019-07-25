import { CONSTANTS, initialState } from './constants';

const breedReducer = (state, action) => {
    switch (action.type) {
        case CONSTANTS.SWITCH_BREED:
            return {
                url: action.url
            };
        default:
            return initialState;
    }
};

export default breedReducer;