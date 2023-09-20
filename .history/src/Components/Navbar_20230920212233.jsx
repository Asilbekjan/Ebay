import React, { useState } from "react";
import { Input, Space } from "antd";
import { Link } from "react-router-dom";
import {
  DownOutlined,
  LaptopOutlined,
  PhoneOutlined,
  HeartOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { LuActivitySquare } from 'react-icons/lu'
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout'
import { Button, Dropdown, message } from "antd";
import { useNavigate } from "react-router-dom";
import './navbar.css'
import { FcSearch } from 'react-icons/fc'



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
    navigate(`/search/${value}`)
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className=" bg-[#F8F8F8]">
      <div className="container h-[80px] flex">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-1">
            <Link to={'/app'}><img src="./assets/img/Group 22.png" alt="" /></Link>
          </div>
          <div className="col-span-6">
            <div className="ms-28">
              <Dropdown className="border-none mr-4" menu={menuProps}>
                <Button>
                  <Space>
                    All Categories
                    <DownOutlined />
                  </Space>
                </Button>
              </Dropdown>
              {/* <Search
                className="w-[300px]"
                placeholder="search anything"

                onSearch={onSearch}
              /> */}
              <div class="input-container">
                <input placeholder="Search something..." class="input" name="text" type="text"/>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <rect fill="white"></rect> <path d="M7.25007 2.38782C8.54878 2.0992 10.1243 2 12 2C13.8757 2 15.4512 2.0992 16.7499 2.38782C18.06 2.67897 19.1488 3.176 19.9864 4.01358C20.824 4.85116 21.321 5.94002 21.6122 7.25007C21.9008 8.54878 22 10.1243 22 12C22 13.8757 21.9008 15.4512 21.6122 16.7499C21.321 18.06 20.824 19.1488 19.9864 19.9864C19.1488 20.824 18.06 21.321 16.7499 21.6122C15.4512 21.9008 13.8757 22 12 22C10.1243 22 8.54878 21.9008 7.25007 21.6122C5.94002 21.321 4.85116 20.824 4.01358 19.9864C3.176 19.1488 2.67897 18.06 2.38782 16.7499C2.0992 15.4512 2 13.8757 2 12C2 10.1243 2.0992 8.54878 2.38782 7.25007C2.67897 5.94002 3.176 4.85116 4.01358 4.01358C4.85116 3.176 5.94002 2.67897 7.25007 2.38782ZM9 11.5C9 10.1193 10.1193 9 11.5 9C12.8807 9 14 10.1193 14 11.5C14 12.8807 12.8807 14 11.5 14C10.1193 14 9 12.8807 9 11.5ZM11.5 7C9.01472 7 7 9.01472 7 11.5C7 13.9853 9.01472 16 11.5 16C12.3805 16 13.202 15.7471 13.8957 15.31L15.2929 16.7071C15.6834 17.0976 16.3166 17.0976 16.7071 16.7071C17.0976 16.3166 17.0976 15.6834 16.7071 15.2929L15.31 13.8957C15.7471 13.202 16 12.3805 16 11.5C16 9.01472 13.9853 7 11.5 7Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
              </div>
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
              <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Tooltip title="Account settings">
                  <IconButton
                    onClick={handleClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                  >
                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                  </IconButton>
                </Tooltip>
              </Box>
              <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                  elevation: 0,
                  sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    '&:before': {
                      content: '""',
                      display: 'block',
                      position: 'absolute',
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: 'background.paper',
                      transform: 'translateY(-50%) rotate(45deg)',
                      zIndex: 0,
                    },
                  },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              >
                <Link to='/profile'>
                  <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                  </MenuItem>
                </Link>
                <Divider />
                <Link to='/settings'>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                </Link>
                <Link to='/activity'>
                  <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                      <LuActivitySquare />
                    </ListItemIcon>
                    Activity
                  </MenuItem>
                </Link>
                <MenuItem onClick={handleClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
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
