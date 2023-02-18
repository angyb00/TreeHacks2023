import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";

export default function App() {
  const messages = useQuery("listMessages") || [];

  const [newMessageText, setNewMessageText] = useState("");
  const sendMessage = useMutation("sendMessage");

  const [name] = useState(() => "User " + Math.floor(Math.random() * 10000));
  async function handleSendMessage(event) {
    event.preventDefault();
    setNewMessageText("");
    await sendMessage(newMessageText, name);
  }
  return (
    <main>
      <h1>Alex's Chat</h1>
      <p className="badge">
        <p>Hello World</p>
        <span>{name}</span>
      </p>
      <ul>
        {messages.map(message => (
          <li key={message._id.toString()}>
            <span>{message.author}:</span>
            <span>{message.body}</span>
            <span>{new Date(message._creationTime).toLocaleTimeString()}</span>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSendMessage}>
        <input
          value={newMessageText}
          onChange={event => setNewMessageText(event.target.value)}
          placeholder="Write a message…"
        />
        <input type="submit" value="Send" disabled={!newMessageText} />
      </form>
      <div className = "grid"> 
          <div className = "bar" > bar</div>
          <div className = "bar" > bar</div>
          <div className = "bar" > bar</div>
          <div className = "bar" > bar</div>
          <div className = "bar" > bar</div>
          <div className = "bar" > bar</div>
          <div className = "bar" > bar</div>
      </div>

      <div className ="x-axis"> 
        <div className = "space-between">Monday</div>
        <div className = "space-between">Tuesday</div>
        <div className = "space-between">Wedensday</div>
        <div className = "space-between">Thursday</div>
        <div className = "space-between">Friday</div>
        <div className = "space-between">Saturday</div>
        <div className = "space-between">Sunday</div>
      </div>
    </main>
  );
}
