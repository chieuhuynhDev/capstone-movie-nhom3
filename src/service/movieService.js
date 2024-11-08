import { http } from "./config";

export let movieService = {
  layDanhSachBanner: () => {
    return http.get("/api/QuanLyPhim/LayDanhSachBanner");
  },

  layDanhSachPhim: () => {
    return http.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01");
  },
  layChiTietPhim: (maPhim) => {
    return http.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
  },
  layHeThongRap: () => {
    return http.get(`/api/QuanLyRap/LayThongTinLichChieuHeThongRap`);
  },
  layThongTinHeThonRap: () => {
    return http.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
  },
};
