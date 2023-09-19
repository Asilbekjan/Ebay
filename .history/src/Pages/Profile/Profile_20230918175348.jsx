import React from 'react'
import { Card } from 'antd';
const gridStyle = {
  width: '45%',
  textAlign: 'center',
};

export default function Profile() {
  return (
    <div>
      <Card title="Your Profile">
        <Card.Grid style={gridStyle} className='m-4'>
          Full name <br />
          Sheroz Turdiyev
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle} className='m-4'>
          Username <br />
          Sherozbek
        </Card.Grid>
        <Card.Grid style={gridStyle} className='m-4'>
          Email <br />
          sherozturdiyev@gmail.com
        </Card.Grid>
        <Card.Grid style={gridStyle} className='m-4'>
          Phone number <br />
          +998 93 954 21 11
        </Card.Grid>
      </Card>
    </div>
  )
}
