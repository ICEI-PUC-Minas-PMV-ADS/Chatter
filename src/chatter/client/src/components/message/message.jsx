import "./message.css"
import {format } from "timeago.js"

export default function Messenge ({message, own}) {
  return (
    <div className={own ? "message own": "message"}>
        <div className="messageTop">
            <img 
            className="messageImg"
            src="https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg" alt="" />
            <p className="messageText"> {message.text} </p>
        </div>
        <div className="messageBottom">
         {format( message.createdAt)}
        </div>
    

    </div>
  );
}
