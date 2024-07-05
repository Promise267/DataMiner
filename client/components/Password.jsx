'use client'
import React, { useState } from 'react'

export default function Password({placeholder}) {
    const [password, setPassword] = useState('')
    return (
        <>
            <div>
                <input 
                    type='password'
                    name='password'
                    className='shadow-lg px-4 py-3 outline-none rounded-lg'
                    onChange={(e) => {setPassword(e.target.value)}}
                    placeholder={placeholder}
                />
            </div>
        </>
    )
}
