import React, { useState } from 'react';
import { Drawer } from 'antd';
import down from './down.gif'
import { Tooltip } from 'antd'

const Products = () => {
    const [size, setSize] = useState();
    const [open, setOpen] = useState(false);


    const showDrawer = () => {
        setSize('default');
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };




    return (
        <>
            <div className='cursor-pointer bg-black' onClick={showDrawer}>
                <Tooltip title="Products"  placement="bottom">
                    <img src={down} className='w-[50px] relative bottom-[20px]' />
                </Tooltip>
            </div>
            <Drawer
                title={'Mahlulotlar'}
                placement="top"
                size={size}
                onClose={onClose}
                open={open}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    );
};
export default Products;
