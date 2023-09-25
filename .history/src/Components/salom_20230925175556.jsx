import React from 'react'
import './'

export default function Salom() {
    return (
        <div>
            <input type='file' onChange={(a)=>{imgFunc(a)}}/>
        </div>
    )
}
