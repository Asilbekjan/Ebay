import React from 'react'
import { InboxOutlined } from '@ant-design/icons'
import './navbar.css'


export default function salom() {
    return (
        <div>
            <label class="custom-file-upload">
                <input type="file" />
                <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                    banned files.
                </p>
            </label>
        </div>
    )
}
