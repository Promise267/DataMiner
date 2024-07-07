'use client'
import React, { ChangeEvent, FormEvent, useState } from 'react'
import TextBox from "../../../components/TextBox"
import Email from "../../../components/Email"
import Password from "../../../components/Password"
import Image from 'next/image'
import googleImage from "@/public/assets/images/google.png"
import facebookImage from "@/public/assets/images/facebook.png"
import twitterImage from "@/public/assets/images/twitter.png"

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
        <span 
          className='text-5xl text-center text-gray-400 font-mono py-5'
        >
          Login
        </span>
        <TextBox 
          value={text} 
          setText={setText}
          placeholder='Enter Your Name' 
        />
        <Email 
          value={email} 
          setEmail={setEmail} 
          placeholder='Enter Your Email' 
        />
        <Password 
          value={password} 
          setPassword={setPassword} 
          placeholder='Enter Your Password'
        />
        <button type='submit' 
          className='shadow-lg px-4 py-3 bg-blue-500 text-white rounded-lg'
        >Submit
        </button>
        <span className='text-center'>OR Login with</span>
        <div className='flex flex-row justify-center items-center space-x-5'>
          <div>
            <button
              className='shadow-lg rounded-full transition-all delay-50 hover:opacity-50 p-2'
            >
              <Image
                src={googleImage}
                alt = 'googleImage'
                width={30}
                height={30}
              />
            </button>
          </div>
          <div>
            <button 
              className='shadow-lg rounded-full transition-all delay-50 hover:opacity-50 p-2'
            >
            <Image
                src={facebookImage}
                alt = 'facebookImage'
                width={30}
                height={30}
              />
            </button>
          </div>
          <div>
            <button
              className='shadow-lg rounded-full transition-all delay-50 hover:opacity-50 p-2'
            >
            <Image
                src={twitterImage}
                alt = 'twitterImage'
                width={30}
                height={30}
              />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}
