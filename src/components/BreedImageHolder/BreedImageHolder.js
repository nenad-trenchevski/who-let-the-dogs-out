import React from 'react';
import './BreedImageHolder.scss';

const CLASS_NAMES = {
  IMAGE_CONTAINER: 'image-container',
  BREED_IMAGE: 'breed-image'
}

function BreedImageHolder() {
  return (
    <div className={CLASS_NAMES.IMAGE_CONTAINER}>
      <div className={CLASS_NAMES.BREED_IMAGE}>
          <img src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/18/08/staffordshire-bull-terrier.jpg" alt="a breed"/>
      </div>
    </div>
  );
}

export default BreedImageHolder;
