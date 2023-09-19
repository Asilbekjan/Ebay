import React from 'react'
import { Card } from 'antd';
const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

export default function Profile() {
  return (
    <div>
      <Card title="Your Profile">
        <Card.Grid style={gridStyle}>
          Full name <br />
          Sheroz Turdiyev
        </Card.Grid>
        <Card.Grid hoverable={false} style={gridStyle}>
          Username <br />
          Sherozbek
        </Card.Grid> <br/>
        <Card.Grid style={gridStyle}>
          Email <br />
          sherozturdiyev@gmail.com
        </Card.Grid>
        <Card.Grid style={gridStyle}>
          Phone number <br/>
          +998 93 954 21 11
        </Card.Grid>
      </Card>
    </div>
  )
}
