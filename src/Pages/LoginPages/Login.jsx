import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  UserOutlined,
  EyeTwoTone,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import { Input, notification } from "antd";




export default function Login() {
  const navigate = useNavigate()
  
  const [username,setUsername]=useState('')
  const [password,setPassword]=useState('')
  console.log(username,password);
  function getUser(){
    if(username && password){
      if(username&&password==='asilbek'){
        navigate('/app')
      }
      else{
        notification.error({
          message:"Topilmadi",
          description:'username yoki parol xato',
          placement:'top',
          duration:4
        })
      }
    }else{
      notification.warning({
        message:"to'ldirilmagan" , 
        description:"username yoki parol to'ldirilmagan", 
        placement:"top",
        duration:3
      })
    }
  }
  
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-12">
              <div className="col-span-6 flex min-h-screen items-center justify-center">
                <div className="card shadow-xl h-[70vh] rounded-2xl w-[480px] ">
                <img className="w-[100px] ms-14 mt-7" src="./assets/img/Group 22.png" alt="" />
                <p className="ms-14 mt-3 text-[16px] text-[#00000080;] ">Welcome back !!!</p>
                <p className="ms-14 mt-3 font-[600] text-[56px] font-[Poppins]">Sing In</p>
                <p className="ms-14">Username</p>
                <Input 
                  onChange={(val)=>{setUsername(val.target.value)}}
                  style={{ width: 350 }}
                  className="ms-14 "
                  placeholder="username"
                  prefix={<UserOutlined />}
                />
                <p className="ms-14 mt-5">Password</p>
                <Input.Password onChange={(val)=>{setPassword(val.target.value)}}
                  style={{ width: 350,display:"flex" }}
                  className="ms-14  "
                  placeholder="password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
                <button className=" ms-[180px] bg-blue-700 mt-8 text-xl px-5 py-2 rounded-full text-white" onClick={getUser}>Sing in</button>
                <p className="ms-[116px] text-[black]/20 mt-3">don't have an account?<Link className="text-blue-500 ms-2" to={'/registratsiya'}>Sign up</Link></p>
                </div>
              </div>
              <div className="col-span-6  h-[100vh] w-1000 relative ">
                <div className=" ms-14 bg-[#0064D2]/[60%]  h-[100vh] w-[580px] absolute "></div>
                <img src="./assets/img/Group 2014.png" className="absolute me-10" alt="" />
              </div>
        </div>
      </div>
    </div>
  );
}
