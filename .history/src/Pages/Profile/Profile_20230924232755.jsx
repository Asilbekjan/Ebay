import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import user from './user.png'
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

          </>
        :
          <></>
      )
    }
    </div>
  )
}
