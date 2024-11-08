import React, { useEffect, useState } from "react";

import { NavLink, useParams } from "react-router-dom";
import { Progress } from "antd";
import { movieService } from "../../service/movieService";

export default function DetailPage() {
  const [detail, setDetail] = useState({});
  // dùng useParams để lấy id từ url
  let params = useParams();
  let { id } = params;
  // gọi api lấy chi tiết phim thông qua id vừa lấy
  useEffect(() => {
    movieService
      .layChiTietPhim(id)
      .then((result) => {
        setDetail(result.data.content);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="container">
      <div className="flex space-x-5 items-center">
        <img className="h-96" src={detail.hinhAnh} alt="" />
        <Progress
          type="circle"
          strokeWidth={10}
          percent={detail.danhGia * 10}
          size={120}
          format={() => (
            <span className="text-base font-medium text-red-600">
              {detail.danhGia}/10 điểm
            </span>
          )}
        />

        <NavLink
          to="/booking"
          className="text-white px-5 py-2 rounded border-2 bg-red-500"
        >
          Mua vé
        </NavLink>
      </div>
    </div>
  );
}
