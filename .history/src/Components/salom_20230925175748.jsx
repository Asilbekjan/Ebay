import React from 'react'
import './navbar.css'

export default function Salom() {

    function imgFunc(params) {
        console.log(params);
    }

    return (
        <div>
            <input type='file' className='inp' onChange={(a) => { imgFunc(a) }} />
        </div>
    )
}
