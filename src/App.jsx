import { useState } from "react";
import { useMutation, useQuery } from "../convex/_generated/react";
import Header from './components/Header.jsx';
import Input from './components/Input.jsx';


export default function App() {
  return (
    <div>
      <div><Header /></div>
      <div><Input /></div>
    </div>

  );
}
