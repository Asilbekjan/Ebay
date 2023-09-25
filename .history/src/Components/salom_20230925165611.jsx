import React from 'react'
import { BsDownload } from 'react-icons/bs'
import './navbar.css'


export default function salom() {
    return (
        <div>
            <label class="custom">
                <input type="file" />
                <div >
                    <BsDownload className='flex '/>
                    <p>
                        <span className='font-bold'>Choose a file</span> or drag it here
                    </p>
                </div>
            </label>
        </div>
    )
}
