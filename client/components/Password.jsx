import React, from 'react'

export default function Password({placeholder, password, setPassword}) {
    return (
        <>
            <div>
                <input 
                    type='password'
                    name='password'
                    value={password}
                    className='shadow-lg px-4 py-3 outline-none rounded-lg'
                    onChange={(e) => {setPassword(e.target.value)}}
                    placeholder={placeholder}
                />
            </div>
        </>
    )
}
