import React, { useState } from 'react';
import { Drawer } from 'antd';
import down from './down.gif'
import { Tooltip } from 'antd'
import { Card } from 'antd';



const Products = () => {
    const gridStyle = {
        width: '1\%',
        textAlign: 'center',
        margin: "1%"
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
                <Card>
                    <Card.Grid style={gridStyle}><p>Texnika yarmarkas</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Butun oila uchun poyabzal</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Butun oila uchun kiyimlar</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>O'qish kerak bo'lgan asarlar</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Maktab uchun</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Sifatli texnika</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Hammasi avto uchun</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Kanselyariya mollari</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Kichik do'stlar uchun</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Bolalar kiyimlari va poyafzallari</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Xobbi va ijodkorlik</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Komikslar</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Toza uy - toza ko'ngil</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Uydan chiqmasdan ro’zg’or</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Faol dam olish</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Yorug'lik uchun</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Bolalar bilan mashg'ulotlar uchun</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Mashhur</p></Card.Grid>
                    <Card.Grid style={gridStyle}><p>Sport va hordiq</p></Card.Grid>
                </Card>

            </Drawer>
        </>
    );
};
export default Products;
