import React from 'react'

const page = ({params}) => {
  return (
    <div className='text-lg'>My post : {params.slug[0]} </div>
  )
}

export default page