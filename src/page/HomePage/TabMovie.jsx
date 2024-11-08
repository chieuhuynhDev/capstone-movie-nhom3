import React, { Fragment, useEffect, useState } from "react";
import { movieService } from "../../service/movieService";
import { Tabs } from "antd";
import moment from "moment";

let ItemPhim = ({ phim }) => {
  return (
    <Fragment>
      <div className="flex space-x-3 mt-5 my-5">
        <img src={phim.hinhAnh} className="w-32" alt="" />
        <div>
          <h2 className="text-lg font-bold">{phim.tenPhim}</h2>
          <div className="grid grid-cols-3 gap-2">
            {phim.lstLichChieuTheoPhim.slice(0, 6).map((lichChieu, index) => {
              return (
                <span
                  key={index}
                  // className="bg-red-500 text-white px-5 py-2 rounded"s
                  className=" bg-white text-lime-500 px-4 p-2 rounded border-2 border-red-500 font-black hover:bg-gray-200 transtion"
                >
                  {moment(lichChieu.ngayChieuGioChieu).format(
                    "ddd,DD/MM/YYYY - HH:mm"
                  )}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

export default function TabMovie() {
  const [danhSachRap, setDanhSachRap] = useState();
  useEffect(() => {
    movieService
      .layHeThongRap()
      .then((res) => {
        setDanhSachRap(res.data.content);
      })
      .catch((err) => {});
  }, []);
  const onChange = (key) => {
    console.log(key);
  };
  // heThongRap => lstCumRap =>danhSachPhim =>lstLichChieuTheoPhim
  let renderCumRap = (heThongRap) => {
    return heThongRap.lstCumRap.map((cumRap, index) => {
      return {
        key: index,
        label: (
          <div className="text-left w-80 text-lg  ">
            <h3 className="truncate">{cumRap.tenCumRap}</h3>
            <p className="truncate text-base text-gray-500">{cumRap.diaChi}</p>
          </div>
        ),
        children: (
          <div style={{ height: "500px" }} className="overflow-y-scroll">
            {cumRap.danhSachPhim.map((phim) => {
              return <ItemPhim phim={phim} key={phim.maPhim} />;
            })}
          </div>
        ),
      };
    });
  };
  let renderDachSachRap = () => {
    return danhSachRap?.map((heThongRap) => {
      return {
        key: heThongRap.maHeThongRap,
        label: <img src={heThongRap.logo} className="w-20" alt="" />,
        children: (
          <Tabs
            defaultActiveKey="1"
            items={renderCumRap(heThongRap)}
            onChange={onChange}
            tabPosition="left"
            style={{ height: "500px" }}
          />
        ),
      };
    });
  };
  return (
    <div className=" py-20 flex justify-center">
      <div className="w-full max-w-6xl">
        <Tabs
          defaultActiveKey="1"
          items={renderDachSachRap()}
          onChange={onChange}
          tabPosition="left"
          style={{ height: "500px" }}
        />
      </div>
    </div>
  );
}
// tab antd
