import React from 'react'
import { BsDownload } from 'react-icons/bs'
import './navbar.css'


export default function salom() {
    return (
        <div>
            <label class="custom">
                <input type="file" />
                <div className='p-[15px]'>
                    <div className='flex items-center w-[25px] h-[25px] bg-blue-700 relative left-20'>
                        <BsDownload />
                    </div>
                    <p className='mt-[15px]'>
                        <span className='font-bold'>Choose a file</span> or drag it here
                    </p>
                </div>
            </label>
        </div>
    )
}
