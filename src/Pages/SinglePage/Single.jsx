import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Rate } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import apiEbay from "../../services/api/api";
import {HeartTwoTone,} from "@ant-design/icons";
import { Space } from "antd";
import {Link} from 'react-router-dom'
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";


export default function Single() {
  const [single, setSingle] = useState(null);
  const [cataegory, setCategory] = useState(null);

  const params = useParams();
  let id = params.id;

  useEffect(() => {
    singleProduct();
  }, [id]);

  const singleProduct = async () => {
    let res = await apiEbay.singleProducts(id);
    setSingle(res?.data || {});
    singleCategory(res.data.category);
  };
  const singleCategory = async (sort) => {
    let res = await apiEbay.singleCategory(sort);
    setCategory(res?.data?.products);
  };

  return (
    <div className="container ">
      {!!single ? (
        <>
          <div className="grid grid-cols-12 mt-6 gap-5">
            <div className="col-span-5 ">
              <img
                className="rounded-xl h-[370px] object-cover"
                src={single.thumbnail}
                alt=""
              />
            </div>
            <div className="col-span-6 ">
              <p className="text-xl font-semibold font-sans mt-2">
                {single.brand} {single.title}
              </p>
              <p className="text-2xs text-[black]/50 mt-2">
                {single.description}
              </p>
              <div className="flex items-center">
                <Rate value={single.rating} />
                <p className="ms-3 text-xl mt-1 text-[black]/20">
                  {Math.floor(single.rating)} rate
                </p>
              </div>
              <p className="text-3xl mt-3 mb-3 font-mono">
                <sup>$</sup>
                {single.price}
              </p>
              <div className="flex items-center">
                <Space className="text-2xl">
                  <CheckCircleOutlined />
                </Space>
                <p className="ms-3 text-lg">Free Return</p>
              </div>
              <div className="flex items-center">
                <Space className="text-2xl">
                  <CheckCircleOutlined />
                </Space>
                <p className="ms-3 text-lg">Chat with us 24 hours</p>
              </div>
              <div className="flex items-center">
                <Space className="text-2xl">
                  <CheckCircleOutlined />
                </Space>
                <p className="ms-3 text-lg">Comes with a Package</p>
              </div>
              <div className="flex items-center">
                <Space className="text-2xl">
                  <CheckCircleOutlined />
                </Space>
                <p className="ms-3 text-lg">Comes with a Package</p>
              </div>
              <div className="flex mt-8">
                <button className="btn bg-blue-500 px-12 py-1 text-base text-white rounded-lg">
                  Buy it now
                </button>
                <button className="btn ms-4 bg-slate-200 px-12 py-1 text-blue-400 rounded-lg">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
           <div className="ms-[600px] py-20">
              <LoadingOutlined
                style={{
                  fontSize: 44,
                }}
                spin
              />
            </div>
        </>
      )}
      <div className="grid grid-cols-5 gap-7 mt-6">
        {!!cataegory ? (
          <>
            {cataegory.map((item, index) => {
              return (
                <div className="card shadow-lg rounded-lg">
                  <img
                    className="rounded-xl p-1 h-[170px] object-cover"
                    src={item.thumbnail}
                    alt=""
                  />
                  <p className="ms-2 text-xs font-semibold ">{item.title}</p>
                  <p className="ms-2 text-xs text-[black]/50">{item.brand}</p>
                  <div className="flex items-center ms-2 mb-3 justify-between">
                    <p className="font-semibold font-mono">
                      {item.discountPercentage}$
                    </p>
                    <Rate value={item.rating} />
                  </div>
                  <div className="mb-2 ms-5">
                    <Space className="text-xl">
                      <HeartTwoTone />
                    </Space>
                    <Link
                      className="bg-blue-500 text-white py-2 px-5 rounded-full ms-[80px] mb-5"
                      to={`/singleproduct/${item.id}`}
                    >
                      Batafsil
                    </Link>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
            <div className="ms-[600px] py-20">
              <LoadingOutlined
                style={{
                  fontSize: 44,
                }}
                spin
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
