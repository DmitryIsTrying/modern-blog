import { createSelector } from 'reselect';
import { getProfileData } from 'entities/Profile';
import { getUserAuthData } from 'entities/User';

export const getCanEdit = createSelector(
    [getUserAuthData, getProfileData],
    (authdata, profileData) => authdata?.id === profileData?.id,
);
