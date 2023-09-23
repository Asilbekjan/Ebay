import React from 'react'
import './style.css'
import ProductAdd from './ProductAdd/ProductAdd'
import { Tooltip } from 'antd'


export default function Add_a_FreeProduct() {
    return (
        <div className='relative flex justify-center w-[150px] bg-slate-800 h-[80px]'>
            <Tooltip title="Add Products" color={"#2F294D"} placement="top" className='relative flex'>
                <div>
                    <div className='ping'>
                    </div>
                    <div className='absolute top-0 '>
                        <h1 className='flex items-center justify-center w-[100px] h-[100px]'><ProductAdd /></h1>
                    </div>
                </div>
            </Tooltip>
        </div>
    )
}
