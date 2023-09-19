import React from 'react'
import { Card } from 'antd';


export default function Profile() {
  return (
    <div>
      <Card title="Your Profile">
        <Card.Grid >
          Full name <br />
          Sheroz Turdiyev
        </Card.Grid>
        <Card.Grid hoverable={false} >
          Username <br />
          Sherozbek
        </Card.Grid>
        <Card.Grid >
          Email <br />
          sherozturdiyev@gmail.com
        </Card.Grid>
        <Card.Grid >
          Phone number <br />
          +998 93 954 21 11
        </Card.Grid>
      </Card>
    </div>
  )
}
