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
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                    <Card.Grid style={gridStyle}></Card.Grid>
                </Card>
                
            </Drawer>
        </>
    );
};
export default Products;
