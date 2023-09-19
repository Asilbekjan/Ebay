import React from 'react'
import { Card, Input } from 'antd';
const gridStyle = {
    width: '45%',
    textAlign: 'center',
};

export default function Settings() {
    return (
        <div>
            <Card title="Your Settings">
                <div className='flex items-center justify-center'>
                    <div className='w-[150px] h-[150px] bg-[#BFBFBF] flex items-center justify-center cursor-pointer rounded-[50px]'>

                    </div>
                </div>
            </Card>
            <Card>
                <Card.Grid style={gridStyle} className='m-5'>
                    Full name: <br />
                    <Input placeholder="" />
                </Card.Grid>
                <Card.Grid style={gridStyle} className='m-5'>
                    Username: <br />
                    <Input placeholder="" />

                </Card.Grid>
                <Card.Grid style={gridStyle} className='m-5'>
                    Email: <br />

                </Card.Grid>
                <Card.Grid style={gridStyle} className='m-5'>
                    Phone number: <br />

                </Card.Grid>
            </Card>
        </div>
    )
}
