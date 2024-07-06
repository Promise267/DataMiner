import React from 'react'

export default function TextBox({placeholder, text, setText}) {
  return (
    <>
    <div>
        <input 
            type="text"
            name='text'
            value={text}
            className='shadow-lg px-4 py-3 outline-none rounded-lg'
            onChange={(e) => (setText(e.target.value))}
            placeholder={placeholder}
        />
    </div>
    </>
  )
}
