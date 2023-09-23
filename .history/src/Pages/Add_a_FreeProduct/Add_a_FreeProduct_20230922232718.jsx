import React from 'react'
import './style.css'
import ProductAdd from './ProductAdd/ProductAdd'
import { Tooltip } from 'antd'


export default function Add_a_FreeProduct() {
    return (
        <div className='relative flex justify-center w-[100px] cursor-pointer'>
            <Tooltip title="Add Products" color={"#2F294D"} placement="left" className='relative flex pt-9'>
                <div>
                    <div className='ping relative bottom-11'>
                    </div>
                    <div className='absolute top-0 '>
                        <h1 className='flex items-center justify-center w-[100px] h-[100px]'><ProductAdd /></h1>
                    </div>
                </div>
            </Tooltip>
        </div>
    )
}
