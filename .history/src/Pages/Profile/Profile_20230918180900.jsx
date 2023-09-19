import React from 'react'
import { Card } from 'antd';
import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import user from './user.png'
const gridStyle = {
  width: '45%',
  textAlign: 'center',
};

export default function Profile() {
  return (
    <div>
      <Card title="Your Profile">
        <div className='flex items-center justify-center'>
          <div className='w-[150px] h-[150px] bg-[#BFBFBF] flex items-center justify-center cursor-pointer rounded-[50px]'>
            <img src={user} className='w-[100px]' />
          </div>
        </div>
      </Card>
      <Card>
        <Card.Grid style={gridStyle} className='m-5'>
          Full name <br />
          
        </Card.Grid>
        <Card.Grid style={gridStyle} className='m-5'>
          Username <br />
          Sherozbek
        </Card.Grid>
        <Card.Grid style={gridStyle} className='m-5'>
          Email <br />
          sherozturdiyev@gmail.com
        </Card.Grid>
        <Card.Grid style={gridStyle} className='m-5'>
          Phone number <br />
          +998 93 954 21 11
        </Card.Grid>
      </Card>
    </div>
  )
}
