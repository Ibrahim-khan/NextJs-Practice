"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

function page () {
    const router = useRouter()
    const placeOrder = () => {
        alert("order confirm");
        router.push("/")
    }
  return (
    <div>
      <h1>Product Page</h1>
      <li>Buy Iphone</li>
      <button className='' onClick={placeOrder}>Confirm Order</button>
    </div>
  )
}

export default page
