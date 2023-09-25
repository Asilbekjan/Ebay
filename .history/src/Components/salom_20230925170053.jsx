import React from 'react'
import { BsDownload } from 'react-icons/bs'
import './navbar.css'


export default function salom() {
    return (
        <div>
            <label class="custom">
                <input type="file"/>
                <div className='p-[15px]'>
                <div className=' w-[25px] h-[25px] bg-blue-700'>

                    <BsDownload className='relative left-20'/>
                </div>
                    <p className='mt-[15px]'>
                        <span className='font-bold'>Choose a file</span> or drag it here
                    </p>
                </div>
            </label>
        </div>
    )
}
