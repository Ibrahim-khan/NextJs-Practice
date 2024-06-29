import React from 'react'

const page = ({params}) => {
  return (
    <div>
      User information is: {params.userid}
    </div>
  )
}

export default page
