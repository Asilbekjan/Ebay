import React, { useEffect, useState } from 'react'
import { Button, Card, Input } from 'antd';
const gridStyle = {
    width: '45%',
    textAlign: 'center',
};

export default function Settings() {
    const [loadings, setLoadings] = useState([]);
    const [t]
    const enterLoading = (index) => {
        setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[index] = true;
            return newLoadings;
        });
        setTimeout(() => {
            setLoadings((prevLoadings) => {
                const newLoadings = [...prevLoadings];
                newLoadings[index] = false;
                return newLoadings;
            });
        }, 6000);
    };
    return (
        <div>
            <Card title="Your Settings">
                <div className='flex items-center justify-center'>
                    <div className='w-[150px] h-[150px] bg-[#BFBFBF] flex items-center justify-center cursor-pointer rounded-[50px]'>

                    </div>
                </div>
            </Card>
            <Card>
                <Card.Grid style={gridStyle} className='m-5 cursor-pointer'>
                    Full name: <br />
                    <Input placeholder="Full name" allowClear className='w-[300px] mt-3' />
                </Card.Grid>
                <Card.Grid style={gridStyle} className='m-5 cursor-pointer'>
                    Username: <br />
                    <Input placeholder="Username" allowClear className='w-[300px] mt-3' />
                </Card.Grid>
                <Card.Grid style={gridStyle} className='m-5 cursor-pointer'>
                    Email: <br />
                    <Input placeholder="Email" allowClear className='w-[300px] mt-3' />
                </Card.Grid>
                <Card.Grid style={gridStyle} className='m-5 cursor-pointer'>
                    Phone number: <br />
                    <Input placeholder="Phone number" allowClear className='w-[300px] mt-3' />
                </Card.Grid>
            </Card>
            <Card className='mt-5 flex items-center justify-end'>
                <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)} className='bg-blue-500'>
                    Click me!
                </Button>
            </Card>
        </div>
    )
}
