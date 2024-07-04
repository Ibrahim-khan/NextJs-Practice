"use client"
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";


import State from "./State";


 function Home() {

  const [value, setValue] = useState(0);
  const Router = useRouter();

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

      <h4>Routing</h4>
      <button><a href="/about">about page</a></button>

      <h4>Dynamic Routing</h4>

      <h4>Routing with hook (userRouter)</h4>
      <button type="button" onClick={() => Router.push("/class")}>go to class page</button>

      <h4>navigation Routing</h4>

    </main>
  );
}

export default Home 

// next js 
