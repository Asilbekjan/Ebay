import React from 'react'
import { BsDownload } from 'react-icons/bs'
import './navbar.css'


export default function salom() {
    return (
        <div>
            <label class="custom">
                <input type="file" />
                <div>
                    <BsDownload />
                    <p>
Choose a file or 
                    </p>
                </div>
            </label>
        </div>
    )
}
