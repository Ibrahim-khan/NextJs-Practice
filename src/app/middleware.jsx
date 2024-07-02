import React from 'react'
import { NextResponse } from 'next/server'

const middleware = () => {
  return NextResponse.redirect()
}

export default middleware
