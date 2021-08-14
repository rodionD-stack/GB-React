import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { delChat } from "../../store/chats/actions";

export const DelChat = ({chatId}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
      dispatch(delChat(chatId));
  }

    return (
        <Button onClick={handleDelete} value={chatId} variant="contained" color="primary">Delete</Button>
    )
}