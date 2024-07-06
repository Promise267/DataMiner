'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import TextBox from "../../../components/TextBox"
import Email from "../../../components/Email"
import Password from "../../../components/Password"

export default function Page() {
  const [text, setText] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")

  const handleSubmit = (e : FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className='flex justify-center items-center h-screen'>
      <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
        <TextBox 
          value={text} 
          setValue={setText}
          placeholder='Enter Your Name' 
        />
        <Email 
          value={email} 
          setValue={setEmail} 
          placeholder='Enter Your Email' 
        />
        <Password 
          value={password} 
          setValue={setPassword} 
          placeholder='Enter Your Password'
        />
        <button type='submit' className='shadow-lg px-4 py-3 bg-blue-500 text-white rounded-lg'>Submit</button>
      </form>
    </div>
  )
}
