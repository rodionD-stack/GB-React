import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeName } from '../../store/profile/actions';
import { selectName } from '../../store/profile/selectors'; 
import './Profile.css';


export const Profile = () => {
  const [value, setValue] = useState("");
  const name = useSelector(selectName);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeName(value));
    setValue("");
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="profile">
      <h2 className="profile__heading">THIS IS PROFILE OF <span className="heading__name">{name}</span></h2>
      <form className="forms" action="" onSubmit={handleSubmit}>
        <TextField value={value} onChange={handleChange} id="outlined-basic" label="Type name..." variant="outlined" />
        
        <Button style={{marginTop:"20px"}} onClick={handleSubmit} variant="contained" color="primary">Save name</Button>
      </form>
    </div>
  );
};

export default Profile;