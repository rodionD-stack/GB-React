import './Message.css'
export const Message = (props) => {
    return (
        <h1 className="message__heading">Hello, {props.name}</h1>
    )
}