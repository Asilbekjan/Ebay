import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import user from './user.png'
import Loading from '../Loading/Loading'

const gridStyle = {
  width: '45%',
  textAlign: 'center',
};

export default function Profile() {
  const [tokin, setTokin] = useState(null)
  useEffect(() => {
    let tokinSettings = JSON.parse(localStorage.getItem("login"))
    setTokin(tokinSettings)
  }, []);


  return (
    <div>
      {
        !!tokin ? (
          <>
            <Card title="Your Profile">
              <div className='flex items-center justify-center'>
                <div className='w-[150px] h-[150px] bg-[#BFBFBF] flex items-center justify-center cursor-pointer rounded-[50px]'>
                  <img src={tokin.image} className='w-[100px]' />
                </div>
              </div>
            </Card>
            <Card>
              <Card.Grid style={gridStyle} className='m-5'>
                Full name: <br />
                <p className='font-bold'>{tokin.firstName}</p>
              </Card.Grid>
              <Card.Grid style={gridStyle} className='m-5'>
                Username: <br />
                <p className='font-bold'>{tokin.username}</p>
              </Card.Grid>
              <Card.Grid style={gridStyle} className='m-5'>
                Email: <br />
                <p className='font-bold'>{tokin.email}</p>
              </Card.Grid>
              <Card.Grid style={gridStyle} className='m-5'>
                Phone number: <br />
                <p className='font-bold'>{tokin.id}</p>
              </Card.Grid>
            </Card>
          </>
        ) : (

          <>
            <Loading />
          </>
        )
      }
    </div>
  )
}
