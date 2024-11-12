import React, { useEffect, useState } from "react";

import { NavLink, useParams } from "react-router-dom";
import { Progress, Tabs } from "antd";
import { movieService } from "../../service/movieService";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";

const onChange = (key) => {
  console.log(key);
};

export default function DetailPage() {
  const [detail, setDetail] = useState({});
  const [danhSachRap, setDanhSachRap] = useState();

  // dùng useParams để lấy id từ url
  let { id } = useParams();

  // gọi api lấy chi tiết phim thông qua id vừa lấy
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Gọi API lấy chi tiết phim
        const detailResult = await movieService.layChiTietPhim(id);
        console.log("Detail", detailResult.data.content);
        setDetail(detailResult.data.content);

        // Gọi API lấy thông tin lịch chiếu
        const scheduleResult = await movieService.layThongTinLichChieu(id);
        console.log("thong tin lich", scheduleResult.data.content);
        setDanhSachRap(scheduleResult.data.content);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };

    // Thực thi hàm fetchData
    fetchData();
  }, [id]);

  let renderDachSachRap = () => {
    console.log("ágsdfg");
    if (!Array.isArray(danhSachRap)) return null;
    return danhSachRap?.map((heThongRap) => {
      return {
        key: heThongRap.maHeThongRap,
        label: <img src={heThongRap.logo} className="w-20" alt="" />,
        children: (
          <Tabs
            defaultActiveKey="1"
            // items={renderCumRap(heThongRap)}
            onChange={onChange}
            tabPosition="left"
            style={{ height: "500px" }}
          />
        ),
      };
    });
  };

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: "Tab 1",
      children: "Content of Tab Pane 1",
    },
    {
      key: "2",
      label: "Tab 2",
      children: "Content of Tab Pane 2",
    },
    {
      key: "3",
      label: "Tab 3",
      children: "Content of Tab Pane 3",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url(${detail.hinhAnh})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: "100%" }}
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={10} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12 ">
          <div className="col-span-4 col-start-4">
            <div className=" grid grid-cols-2">
              <img className="h-96" src={detail.hinhAnh} alt="" />
              <div>
                <h1 className="font-bold text-xl">{detail.tenPhim}</h1>
                <p>Mô tả</p>
                <div className="mt-40">
                  <NavLink
                    to="/booking"
                    className="text-white px-5 py-2 rounded border-2 bg-red-500"
                  >
                    Mua vé
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-4">
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
          </div>
        </div>

        <div className="mt-5">
          <div className=" py-20 flex justify-center">
            <div className="w-full max-w-6xl">
              <Tabs
                defaultActiveKey="1"
                items={items}
                onChange={onChange}
                tabPosition="left"
                style={{ height: "500px" }}
              />
            </div>
          </div>
        </div>

        {/* <div>
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
        </div> */}
      </CustomCard>
    </div>
  );
}
