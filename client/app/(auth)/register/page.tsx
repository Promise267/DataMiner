'use client'
import React, { ChangeEvent, useState } from 'react'
import TextBox from '@/components/TextBox'
import Email from '@/components/Email'
import Password from '@/components/Password'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

export default function Page() {
  const [text, setText] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
    <div className='flex flex-col justify-center items-center h-screen space-y-3'>
      <TextBox 
        placeholder='Enter Your Name'
        text={text}
        setText={setText}
      />
      <Email 
        placeholder='Enter Your Email'
        email={email}
        setEmail={setEmail}
      />
      <Password 
        placeholder='Enter Your Password'
        password={password}
        setPassword={setPassword}
      />
      <DatePicker 
        selected={startDate}
        className='shadow-lg px-4 py-3 outline-none rounded-lg text-gray-400'
        onChange={(date) => setStartDate(date)} 
      />
    </div>
    </>
  )
}
