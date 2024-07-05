import React from 'react'
import TextBox from "../../../components/TextBox"
import Password from "../../../components/Password"

export default function page() {
  return (
    <>
    <div className='flex justify-center items-center h-screen'>
      <div className='flex flex-col space-y-5'>
        <TextBox placeholder='Enter Your Name'/>
        <TextBox placeholder='Enter Your Email'/>
        <Password placeholder='Enter Your Password'/>
      </div>
    </div>
    </>
  )
}
