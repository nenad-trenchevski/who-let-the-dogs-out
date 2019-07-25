import React, { useContext } from 'react';
import './BreedImageHolder.scss';
import { METHOD, PROCCESS_MSG } from '../../services/constants';
import useEndpoint from '../../services/useEndpoint'
import BreedContext from '../../services/breedContext';

const CLASS_NAMES = {
    IMAGE_CONTAINER: 'image-container',
    BREED_IMAGE: 'breed-image'
};

const setBreedType = (breedType) => {
    return `https://dog.ceo/api/breed/${breedType}/images/random`;
};

const BreedImageHolder = () => {
    const { urlData } = useContext(BreedContext);
    const endpoint = urlData.url ? urlData.url : 'affenpinscher';
    const currentBreed = useEndpoint({
        method: METHOD.GET,
        url: setBreedType(endpoint)
    });

    return (
        <div className={CLASS_NAMES.IMAGE_CONTAINER}>
            <div className={CLASS_NAMES.BREED_IMAGE}>
                {
                    (currentBreed.pending && PROCCESS_MSG.LOADING)
                    || (currentBreed.error && PROCCESS_MSG.STH_HAPPENED)
                    || (currentBreed.complete && <img alt='dog' src={currentBreed.data.message} />)
                }
            </div>
        </div>
    );
}

export default BreedImageHolder;
