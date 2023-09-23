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
            <div className='cursor-pointer' onClick={showDrawer}>
                <Tooltip title="Products" color={"orange"} placement="bottom">
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
                <p>Texnika yarmarkas</p>
                <p>Butun oila uchun poyabzal</p>
                <p>Butun oila uchun kiyimlar</p>
                <p>O'qish kerak bo'lgan asarlar</p>
                <p>Maktab uchun</p>
                <p>Sifatli texnika</p>
                <p>Hammasi avto uchun</p>
                <p>Kanselyariya mollari</p>
                <p>Kichik do'stlar uchun</p>
                <p>Bolalar kiyimlari va poyafzallari</p>
                <p>Xobbi va ijodkorlik</p>
                <p>Komikslar</p>
                <p>Toza uy - toza ko'ngil</p>
                <p>Uydan chiqmasdan ro’zg’or
</p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </Drawer>
        </>
    );
};
export default Products;
