import breedReducer from './breedReducer';
import { initialState, CONSTANTS } from './constants';

const initialResult = breedReducer(initialState, {
    type: '',
    url: initialState.url
});

const updatedResult = breedReducer(initialState, {
    type: CONSTANTS.SWITCH_BREED,
    url: 'beagle'
});

describe('Testing the Reducer', () => {

    it('Should return an initial state', () => {
        expect(initialResult).toEqual(initialState);
    });

    it('Should return an updated state', () => {
        expect(updatedResult).toEqual({url: 'beagle'});
    });
});