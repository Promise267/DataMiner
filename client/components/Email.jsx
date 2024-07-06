import React from 'react'

export default function Email({placeholder, email, setEmail}) {
    return (
        <>
        <div>
            <input 
                type="email" 
                name='email'
                value={email}
                className='shadow-lg px-4 py-3 outline-none rounded-lg'
                onChange={(e) => {setEmail(e.target.value)}}
                placeholder={placeholder}
            />
        </div>
        </>
    )
}
