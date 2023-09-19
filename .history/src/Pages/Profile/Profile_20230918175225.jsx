import React from 'react'
import { Card } from 'antd';


export default function Profile() {
  return (
    <div>
      <Card title="Your Profile">
        <Card.Grid className='flex'>
          Full name <br />
          Sheroz Turdiyev
        </Card.Grid>
        <Card.Grid hoverable={false} className='flex'>
          Username <br />
          Sherozbek
        </Card.Grid>
        <Card.Grid className='flex'>
          Email <br />
          sherozturdiyev@gmail.com
        </Card.Grid>
        <Card.Grid className='flex'>
          Phone number <br />
          +998 93 954 21 11
        </Card.Grid>
      </Card>
    </div>
  )
}
