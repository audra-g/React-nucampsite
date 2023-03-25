//notice name of file: lowercase C for first letter > this will be the case for ny file that will NOT export a React component.
//notice file is also plural

import { CAMPSITES } from '../../app/shared/CAMPSITES'; 

export const selectAllCampsites = () => {
    return CAMPSITES;
}; 

export const selectCampsiteById = (id) => {
    return CAMPSITES.find((campsite) => campsite.id === id); 
};

export const selectFeaturedCampsite = () => {
    return CAMPSITES.find((campsite) => campsite.featured);
};