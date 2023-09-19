import React from 'react'
import { Card } from 'antd';


export default function Profile() {
  return (
    <div>
      <Card title="Your Profile">
        <Card.Grid className='flex w-[50%] justify-between wra'>
          Full name <br />
          Sheroz Turdiyev
        </Card.Grid>
        <Card.Grid hoverable={false} className='flex w-[50%] justify-between wra'>
          Username <br />
          Sherozbek
        </Card.Grid>
        <Card.Grid className='flex w-[50%] justify-between wra'>
          Email <br />
          sherozturdiyev@gmail.com
        </Card.Grid>
        <Card.Grid className='flex w-[50%] justify-between wra'>
          Phone number <br />
          +998 93 954 21 11
        </Card.Grid>
      </Card>
    </div>
  )
}
