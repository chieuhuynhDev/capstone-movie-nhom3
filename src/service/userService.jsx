import { http } from "./config";

export let userService = {
  layDanhSachUser: () =>
    http.get("/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01"),
  themNguoiDung: (dataForm) =>
    http.post("/api/QuanLyNguoiDung/DangKy", dataForm),
  layDanhSachBaner: () => http.get("/api/QuanLyPhim/LayDanhSachBanner"),
  layDanhSachPhim: () =>
    http.get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01"),
  layThongTinLichChieu: (maPhim) =>
    http.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`),
};
