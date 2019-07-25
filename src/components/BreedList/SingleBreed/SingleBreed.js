import React, { useContext } from 'react';
import './SingleBreed.scss';
import { CONSTANTS } from '../../../services/constants';
import BreedContext from '../../../services/breedContext';

const SingleBreed = (props) => {
    const { dispatch } = useContext(BreedContext);
    return (
        <div onClick={() => dispatch({ type: CONSTANTS.SWITCH_BREED, url: props.aBreed })}>{props.aBreed}</div>
    );
}

export default SingleBreed;
