import React from 'react'

const page = ({params}) => {
  return (
    <div className='text-lg'>My post : {params.slug[0]} {params.slug[1]} </div>
  )
}

export default page