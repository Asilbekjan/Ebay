import React, { useState } from "react";
import { Input, Space } from "antd";
import {
  DownOutlined,
  LaptopOutlined,
  PhoneOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";


import { Button, Dropdown, message } from "antd";
import { useNavigate } from "react-router-dom";
const { Search } = Input;
const handleButtonClick = (e) => {
  message.info("Click on left button.");
  console.log("click left button", e);
};
const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const items = [
  {
    label: "smarphones",
    key: "1",
    icon: <PhoneOutlined />,
  },
  {
    label: "laptops",
    key: "2",
    icon: <LaptopOutlined />,
  },
];
const menuProps = {
  items,
  onClick: handleMenuClick,
};

export default function Navbar() {

  const navigate = useNavigate()

  function onSearch(value) {
    console.log(value);
    navigate(`/search/${value}`)
  }

  return (
    <div className=" bg-[#F8F8F8]">
      <div className="container h-[80px] flex">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-1">
            <img src="./assets/img/Group 22.png" alt="" />
          </div>
          <div className="col-span-6">
            <div className="ms-28">
              <Dropdown className="border-none" menu={menuProps}>
                <Button>
                  <Space>
                    All Categories
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>

              <Search
                className="w-[300px]"
                placeholder="search anything"
                allowClear
                onSearch={onSearch}

              />
            </div>
          </div>
          <div className="col-span-5 ms-12">
            <div className=" flex items-center">
              <Space className="text-[20px]">
                <HeartOutlined />
              </Space>
              <span className="ms-2 text-[12px] text-[#2F294D] font-[500] ">
                WishList
              </span>
              <Space className="ms-3 text-[20px]">
                <ShoppingCartOutlined />
              </Space>
              <span className="ms-2 text-[12px] text-[#2F294D] font-[500]">
                My Cart
              </span>
              <img
                className="w-[33px] ms-5 h-[33px] rounded-full"
                src="./assets/img/3. Леопард.jpg"
                alt=""
              />
              <button className="bg-blue-500 px-3 rounded-lg ms-3 py-1 text-white btn">
                Brows All Categories
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
