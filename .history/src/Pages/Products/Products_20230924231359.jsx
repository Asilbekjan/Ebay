import React, { useState } from 'react';
import { Drawer } from 'antd';
import down from './down.gif'
import { Tooltip } from 'antd'
import { Card } from 'antd';



const Products = () => {
    const gridStyle = {
        width: '25%',
        textAlign: 'center',
    };

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
                <Card title="Card Title">
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid hoverable={false} style={gridStyle}>
                        Content
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                    <Card.Grid style={gridStyle}>Content</Card.Grid>
                </Card>
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
                <p>Uydan chiqmasdan ro’zg’or</p>
                <p>Faol dam olish</p>
                <p>Yorug'lik uchun</p>
                <p>Bolalar bilan mashg'ulotlar uchun</p>
                <p>Mashhur</p>
                <p>Sport va hordiq</p>
                <p></p>
            </Drawer>
        </>
    );
};
export default Products;
