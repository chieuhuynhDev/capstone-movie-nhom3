import React from "react";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { http } from "../../service/config";
import { setUserAction } from "../../redux/userSlice";
import { AddUser } from "./AddUser";

const LoginForm = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  const onFinish = (values) => {
    // dispatch(turnOnLoadDing());
    http
      .post("/api/QuanLyNguoiDung/DangNhap", values)
      .then((result) => {
        dispatch(setUserAction(result.data.content));
        // dispatch(turnOffLoadDing());
        let dataJson = JSON.stringify(result.data.content);
        localStorage.setItem("USER_LOGIN", dataJson);
        message.success("Đăng Nhập Thành Công");
        if (result.data.content.maLoaiNguoiDung === "QuanTri") {
          navigate("/list-user");
        } else {
          navigate("/");
        }
      })
      .catch((err) => {
        message.error("Đăng Nhập Thất Bại");
        // dispatch(turnOffLoadDing());
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      layout="vertical"
      name="Form Login"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 24,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label={
          <span
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontFamily: "serif",
              fontSize: 18,
            }}
          >
            Tài Khoản
          </span>
        }
        name="taiKhoan"
        rules={[
          {
            required: true,
            message: "Tài Khoản không được để trống!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={
          <span
            style={{
              color: "#ffffff",
              fontWeight: "bold",
              fontFamily: "serif",
              fontSize: 18,
            }}
          >
            Mật Khẩu
          </span>
        }
        className="custom-label"
        name="matKhau"
        rules={[
          {
            required: true,
            message: "Mật Khẩu không được để trống!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 13,
        }}
      >
        <div className="flex">
          <AddUser />
          <Button
            className="bg-pink-200 text-black border-black border-2 p-4"
            type="primary"
            htmlType="submit"
            style={{ fontWeight: "bold", fontFamily: "serif", fontSize: 18 }}
          >
            Đăng Nhập
          </Button>
        </div>
      </Form.Item>
    </Form>
  );
};
export default LoginForm;
