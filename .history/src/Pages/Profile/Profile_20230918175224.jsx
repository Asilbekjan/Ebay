import React from 'react'
import { Card } from 'antd';


export default function Profile() {
  return (
    <div>
      <Card title="Your Profile">
        <Card.Grid className=''>
          Full name <br />
          Sheroz Turdiyev
        </Card.Grid>
        <Card.Grid hoverable={false} className=''>
          Username <br />
          Sherozbek
        </Card.Grid>
        <Card.Grid className=''>
          Email <br />
          sherozturdiyev@gmail.com
        </Card.Grid>
        <Card.Grid className=''>
          Phone number <br />
          +998 93 954 21 11
        </Card.Grid>
      </Card>
    </div>
  )
}
