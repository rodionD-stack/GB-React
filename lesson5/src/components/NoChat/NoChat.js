import React from "react"
import { ChatUi } from "../ChatUi/ChatUi"

export const NoChat = ({chats}) => (
    <>
    <ChatUi chats={chats}/>
    <span>Please select a chat</span>
    </>
    )