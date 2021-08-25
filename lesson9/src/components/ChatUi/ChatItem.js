import React from "react";
import { Button, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteChatWithFB } from "../../store/chats/actions";

export const ChatItem = ({ id, name, onDelete }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteChatWithFB(id));
  };
  
  return (
    <ListItem>
      <Link to={`/chat/${id}`}>{name}</Link>
      <Button type="submit" variant="contained" color="primary" onClick={handleDelete}>DELETE</Button>
    </ListItem>
  );
};