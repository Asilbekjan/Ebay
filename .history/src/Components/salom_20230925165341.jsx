import React from 'react'
import { BsDownload } from 'react-icons/bs'
import './navbar.css'


export default function salom() {
    return (
        <div>
            <label class="custom-file-upload">
                <input type="file" />
                <BsDownload/>
            </label>
        </div>
    )
}
