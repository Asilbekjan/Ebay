import React, { useState } from 'react'
import { BsDownload } from 'react-icons/bs'
import './navbar.css'


export default function salom() {
    const { imgTokin, setImgTokin } = useState()

    function inpFunc(val) {
        setImgTokin(val.target.value);
    }

    return (
        <div>
            <label class="custom">
                <input type="file" className='inp' onChange={(a) => { inpFunc(a) }} />
                {
                    !!imgTokin ? (
                        <>

                        </>
                    )
                        :
                        (
                            <></>
                        )
                }
                
            </label>
        </div>
    )
}
