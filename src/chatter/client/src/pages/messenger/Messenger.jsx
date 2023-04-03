import "./messenger.css"
import  Topbar from "../../components/topbar/Topbar"
import Conversation from "../../components/conversations/Conversation";
import Message from "../../components/message/message";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import {useEffect, useContext, useState, useRef} from "react"
import { AuthContext } from "../../context/AuthContext";
import axios from "axios"
import {io} from "socket.io-client"

export default function Messenger() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const [socket, setSocket] = useState(null);
  const { user } = useContext(AuthContext);
  const scrollRef = useRef();


  useEffect(()=>{
    setSocket(io("ws://localhost:8900"))
  },[])
  useEffect(()=>{
    socket?.on("welcome", message=>{
      console.log(message)
    })
},[socket])
  useEffect(()=>{
  const getConversations = async() =>{
  try {
    const res = await axios.get("/conversations/" + user._id)
    setConversations(res.data)
  } catch (error) {
    console.log(error)
  }
  getConversations();
  
};
  },[user._id]);


    useEffect(()=>{
      const getMessages = async () =>{

        try {
          const res = await axios.get("/messages/"+ currentChat?._id)
          setMessages(res.data)
        } catch (error) {
          console.log(error)
        }
        
      }
      getMessages();
    },[currentChat])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const message = {
          sender : user._id,
          text: newMessage,
          conversationId : currentChat._id
        };
        try {
          const res = await axios.post("/messages",message );
          setMessages([...messages, res.data ])
          setNewMessage("");
        } catch (error) {
          console.log(error)
        }
        
    };
    useEffect(()=>{
        scrollRef.current?.scrollIntoView({behavior:"smooth"})
    },[messages])
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatMenu">
          <div className="chatMenuWrapper">
            <input placeholder="Procurar amigo" className="chatMenuInput"></input>
            {conversations.map((c)=>(
              <div onClick={()=>setCurrentChat}>
              <Conversation conversation={c} currentUser={user} />
              </div>
            ))}
            
          </div>
          
        </div>
        <div className="ChatBox">
        <div className="chatBoxWrapper">
          {
          
            currentChat ?(
            <>
           <div className="chatBoxTop">
            {messages.map(m=>(
              <div ref={scrollRef}>
               <Message message={m}own ={m.sender === user._id}/>
              </div>
            )
              )}          
          
          
           </div>
          
          <div className="chatBoxBottom">
            <textarea className="chatMessageInput" placeholder="Digite sua mensagem..."
            onChange={(e)=>setNewMessage(e.target.value)}
            value={newMessage}
            ></textarea>
            <button className="chatSubmitButton"onClick={handleSubmit}>Enviar</button>
          </div>
          </> ) : ( <span className="noConversationText"> Abra uma conversa para inicar o chat.</span>)}
        </div>
        </div>
        <div className="chatOnline">
        <div className="chatOnlineWrapper"> 
          <ChatOnline/>
        </div>
        </div>
      </div>
    </>
  );
}
