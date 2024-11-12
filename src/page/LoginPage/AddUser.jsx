import React, { useState } from "react";
import { Button, Form, Input, message, Modal, Tooltip } from "antd";
import { userService } from "../../service/userService";

export const AddUser = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onFinish = (values) => {
    setIsModalOpen(false);
    let user = { ...values, maNhom: "GP01" };
    console.log("🚀 ~ onFinish ~ user:", user);
    userService
      .themNguoiDung(user)
      .then((result) => {
        message.success("Đăng Ký Thành Công");
        localStorage.setItem("USER_LOGIN", JSON.stringify(user));
      })
      .catch((err) => {
        message.error("Đăng Ký Thất Bài rồi nè");
      });
  };
  return (
    <>
      <Tooltip title="Nhấn vào đây để đăng ký, nếu bạn là thành viên mới">
        <Button
          className="bg-pink-200 text-black border-black border-2 mr-2 p-4"
          type="primary"
          htmlType="submit"
          style={{ fontWeight: "bold", fontFamily: "serif", fontSize: 18 }}
          onClick={showModal}
        >
          Đăng Ký
        </Button>
      </Tooltip>
      <Modal
        footer={null}
        title={
          <span
            className="flex justify-center"
            style={{
              color: "#000000",
              fontWeight: "bold",
              fontFamily: "serif",
              fontSize: 30,
            }}
          >
            Đăng Ký Ngay
          </span>
        }
        open={isModalOpen}
        onCancel={handleCancel}
      >
        <Form
          name="dangKy"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          onFinish={onFinish}
          autoComplete="off"
        >
          <Form.Item
            label="Tài khoản"
            name="taiKhoan"
            rules={[{ required: true, message: "Vui lòng nhập tài khoản!" }]}
          >
            <Input size="small" />
          </Form.Item>

          <Form.Item
            label="Mật khẩu"
            name="matKhau"
            rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
          >
            <Input.Password size="small" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input size="small" />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="soDt"
            rules={[
              { required: true, message: "Vui lòng nhập số điện thoại!" },
            ]}
          >
            <Input size="small" />
          </Form.Item>

          <Form.Item
            label="Họ tên"
            name="hoTen"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input size="small" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 9, span: 16 }}>
            <Button
              className="bg-pink-200 text-black border-black border-2 p-3"
              type="primary"
              htmlType="submit"
              style={{ fontWeight: "bold", fontFamily: "serif", fontSize: 15 }}
            >
              Hoàn thành
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};
