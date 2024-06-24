"use client"

import React from "react";
import State from "./State";
import { useState } from "react";

 function Home() {

  const [value, setValue] = useState(0);

  const add = () => {
    setValue(value + 1)
  }

  const test = () => {
    alert ("Welcome to Next.Js")
  }

  return (
    <main>
      <h1>Welcome to Next.Js</h1>

      <p>Value is added: {value}</p>
      <button onClick={add}>Add value</button>

      <button onClick={test}>Click me</button>
      
      <State />
    </main>
  );
}

export default Home 
