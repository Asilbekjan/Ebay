import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import apiEbay from "../../services/api/api";
import { Rate } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import { Space } from "antd";
import { Swiper, SwiperSlide } from "swiper/react";
import { LoadingOutlined } from "@ant-design/icons";
import { HiOutlineSaveAs } from 'react-icons/hi'
import { AiOutlineHeart } from 'react-icons/ai'
import { Spin } from "antd";
import "swiper/css";
import "swiper/css/pagination";
import "./swiper.css";

// import './styles.css';
import { Autoplay, Pagination } from "swiper/modules";
import Loading from "../Loading/Loading";

export default function Root() {
  const [product, setProduct] = useState([]);
  const getProducts = async () => {
    let res = await apiEbay.products();
    setProduct(res.data.products.splice(1, 6));
  };
  useEffect(() => {
    getProducts();
  }, []);

  function like(props) {

  }

  return (
    <div>
      <div className="grid grid-cols-12">
        <div className="col-span-12 mt-4 re">
          <Swiper
            spaceBetween={30}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className=" rounded-2xl mb-8"
                src="./assets/img/5bb7d3979fb84c673c033016.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" rounded-2xl mb-8"
                src="./assets/img/gadgets_time_01.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" rounded-2xl mb-8"
                src="./assets/img/gadgets-accessories-gadgets-accessories-isolated-white-background-133429004.webp"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className=" rounded-2xl mb-8"
                src="./assets/img/The-Best-10-Trending-Tech-Gadgets-Dropshipping-Products-To-Sell-in-2021.png"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <p className="text-[34px] font-[700] text-center my-10">
        What’s included
      </p>
      <div className="grid grid-cols-8 ms-20 me-20 justify-items-center align-items-center mb-12 ">
        <div className="col-span-2">
          <img
            className="ms-10 w-[100px]"
            src="./assets/icon/DSLR.png"
            alt=""
          />
          <p className="ms-[55px] mt-7">Nikon Z5</p>
        </div>
        <div className="col-span-2">
          <img
            className="ms-10 w-[100px]"
            src="./assets/icon/Lens.png"
            alt=""
          />
          <p className="ms-[50px] mt-7">20mm Lens</p>
        </div>
        <div className="col-span-2">
          <img
            className="ms-10 w-[100px]"
            src="./assets/icon/Charger.png"
            alt=""
          />
          <p className="ms-10 mt-7">Chaging Cable</p>
        </div>
        <div className="col-span-2">
          <img
            className="ms-10  w-[100px]"
            src="./assets/icon/f53a065feaef6edf1c0da97be741c32a21551565.stock_logo_2020_dark 1.png"
            alt=""
          />
          <p className="mt-7">Adobe Stock Subscription</p>
        </div>
      </div>

      <div className="container mb-6">
        <div className="grid grid-cols-12  mb-14 bg-black bor rounded-2xl ">
          <div className="col-span-6">
            <p className="ms-10 mt-14 text-white text-3xl font-bold">
              Expand your creative playground
            </p>
            <p className="ms-10 mt-4 me-5 text-white">
              Your full frame journey begins with the Z 5. Simple yet
              sophisticated, compact yet powerful, the Z 5 is built to grow with
              you. It’s everything you’d expect from a full frame mirrorless
              camera—intense detail, expansive views, brilliant low light
              capabilities, 4K UHD video and more—plus all the innovative tools
              you need to push the limits of your creativity.
            </p>
          </div>
          <div className="col-span-6">
            <img className="rounded-2xl" src="./assets/img/Image.png" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-4">
              <img src="./assets/img/Chip.png" alt="" />
              <p className="text-2xl font-semibold mt-3">Super powered.</p>
              <p className="mt-3 text-base">
                Z 5 is powered by Nikon’s fast, comprehensive EXPEED 6 image
                processing system. It’s the secret behind the camera’s
                sensational photo and video quality, autofocus performance,
                low-light capabilities, distortion control, image clarity, color
                reproduction and more.
              </p>
            </div>
            <div className="col-span-4">
              <img src="./assets/img/Sutter Speed.png" alt="" />
              <p className="text-2xl font-semibold mt-3">
                The stabilityyou crave.
              </p>
              <p className="mt-3 text-base">
                Sharpness starts with stability, and Z 5 has one of the best
                in-camera image stabilization systems available. NIKKOR Z lenses
                activate 5-axis VR image stabilization—up to five stops* of
                stabilization in up to five directions
              </p>
            </div>
            <div className="col-span-4">
              <img src="./assets/img/Stability.png" alt="" />
              <p className="text-2xl font-semibold mt-3">
                In the blink of an iris.
              </p>
              <p className="mt-3 text-base">
                Freeze time with shutter speeds as fast as 1/8000 of a
                second—fast enough to capture moments invisible to the naked
                eye. When shooting with wide aperture settings for shallow
                depth-of-field and blurred backgrounds, that speed can also be
                used to control your shot’s brightness.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {product.length > 0 ? (
          <div className="grid grid-cols-12 gap-7 mb-4 mt-10">
            {product.map((item, index) => {
              return (
                <div key={index} className="col-span-4">
                  <div className="card h-[360px] shadow-lg rounded-lg">
                    <img
                      className="w-[300px] object-cover h-[220px] ms-8 rounded-xl mt-3 "
                      src={item.thumbnail}
                      alt=""
                    />
                    <p className="ms-10 text-xl font-semibold ">
                      {item.title}
                    </p>
                    <p className="ms-10 text-xs text-[black]/50">
                      {item.brand}
                    </p>
                    <div className="flex items-center ms-10 mb-3 justify-between">
                      <p className="font-semibold font-mono">
                        {item.discountPercentage}$
                      </p>
                      <Rate value={item.rating} />
                    </div>
                    <div className="flex">
                      <Space className="text-2xl relative left-10">
                        <AiOutlineHeart className="cursor-pointer  text-gray-500" onClick={() => { like(item.id) }} />
                        <HiOutlineSaveAs className="cursor-pointer text-gray-500" />
                      </Space>
                      <Link
                        className="bg-blue-500 text-white py-2 px-5 rounded-full ms-[200px]"
                        to={`/singleproduct/${item.id}`}
                      >
                        Batafsil
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <>
            <Loading/>
          </>
        )}
      </div>
      <Link
        className="ms-[500px] bg-blue-500 text-white py-2 px-5 rounded-full "
        to={"/allproducts"}
      >
        Go to all products
      </Link>
    </div>
  );
}
