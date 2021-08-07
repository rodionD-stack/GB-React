import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PROFILE_NAME_SHOW, PROFILE_TOGGLE_SHOW } from '../../store/actionTypes';


export const Profile = () => {
    const profileState = useSelector((state) => state);
    const dispatch = useDispatch();

    const toggleShow = () => {
        dispatch({
            type: PROFILE_TOGGLE_SHOW,
        });
    };

    console.log(profileState);
    return (
    <>
        <h2>THIS IS PROFILE</h2>
        <span>Сlick on the checkbox to see the name</span>
        <input 
            type='checkbox'
            onChange={toggleShow}
        />
        {profileState.show && <div>{profileState.name}</div>}

    </>
    );
};