"use client"
import { useRouter } from "next/navigation"

const page = () => {
    const router = useRouter();

    const back =()=>
    {
        router.push('/');
    }
  return (
   
    <div className='bg-red-500 text-lg'>Dashboard
     page
     <br></br>
     <button onClick={back}> Back </button>
     </div>
  )
}

export default page