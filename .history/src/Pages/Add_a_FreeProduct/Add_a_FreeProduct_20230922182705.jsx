import React from 'react'
import './style.css'
import ProductAdd from './ProductAdd/ProductAdd'


export default function Add_a_FreeProduct() {
    return (
        <div className='relative flex justify-end w-[95%]'>
            <Tooltip
            <div>
                <div className='ping'>
                </div>
                <div className='absolute top-0 '>
                    <h1 className='flex items-center justify-center w-[100px] h-[100px]'><ProductAdd/></h1>
                </div>
            </div>
        </div>
    )
}
