import React from 'react'
import { Card } from 'antd';
const gridStyle = {
  width: '45%',
  textAlign: 'center',
};

export default function Profile() {
  return (
    <div>
      <Card></Card>
      <Card title="Your Profile">
        <Card.Grid style={gridStyle} className='m-5'>
          Full name <br />
          Sheroz Turdiyev
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
