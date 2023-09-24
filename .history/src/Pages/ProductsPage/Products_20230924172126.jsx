import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import apiEbay from "../../services/api/api";
import Root from "../RootPages/Root";
import { Rate } from "antd";
import { HeartTwoTone } from "@ant-design/icons";
import { Space } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import Loading from "../Loading/Loading";

export default function Products() {
  const [products, setproducts] = useState([]);

  const getproduct = async () => {
    let res = await apiEbay.products();
    setproducts(res.data.products);
  };
  useEffect(() => {
    getproduct();
  }, []);
  return (
    <div className="container">
      <div className="grid grid-cols-12">
        {products.length > 0 ? (
          <>
            {products.map((item, index) => {
              return (
                <div key={index} className="col-span-4">
                  <div className="card h-[360px] shadow-lg rounded-lg">
                    <img
                      className="w-[300px] object-cover h-[220px] ms-8 rounded-xl mt-3 "
                      src={item.thumbnail}
                      alt=""
                    />
                    <p className="ms-10 text-xl font-semibold ">{item.title}</p>
                    <p className="ms-10 text-xs text-[black]/50">
                      {item.brand}
                    </p>
                    <div className="flex items-center ms-10 mb-3 justify-between">
                      <p className="font-semibold font-mono">
                        {item.discountPercentage}$
                      </p>
                      <Rate value={item.rating} />
                    </div>
                    <div className="mb-10 ms-10">
                      <Space className="text-2xl">
                        <HeartTwoTone />
                      </Space>
                      <Link
                        className="bg-blue-900 text-white py-2 px-5 rounded-full ms-[200px] mb-5"
                        to={`/singleproduct/${item.id}`}
                      >
                        Batafsil
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <>
          
          </>
        )}
      </div>
    </div>
  );
}
