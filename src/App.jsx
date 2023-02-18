import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import Header from './components/Header.jsx';
import Input from './components/Input.jsx';


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
    <div>
      <div><Header /></div>
      <div><Input /></div>
    </div>

  );
}
