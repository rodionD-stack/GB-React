import { useDispatch, useSelector } from "react-redux";
import { delChat } from "../../store/chats/actions";

export const DelChat = ({chatId}) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
      dispatch(delChat(chatId));
  }

    return (
        <button onClick={handleDelete} value={chatId}>Delete</button>
    )
}