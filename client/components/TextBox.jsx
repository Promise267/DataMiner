'use client'
import React, { useState } from 'react'

export default function TextBox({placeholder}) {

    const [value, setValue] = useState('');

  return (
    <>
    <div>
        <input 
            type="text"
            className='shadow-lg px-4 py-3 outline-none rounded-lg'
            name='value'
            onChange={(e) => (setValue(e.target.value))}
            placeholder={placeholder}
        />
    </div>
    </>
  )
}
