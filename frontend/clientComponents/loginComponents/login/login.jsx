import "./login.css";
import React, { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Card, Checkbox, Form, Input, message, Flex } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { clientLogin } from "../../../servers/clientPostRequest/clientPostReqest";
import { useAuth } from "../../../auth";

const ClientLogin = () => {
  const navigate = useNavigate();
  const { setClientData } = useAuth();

  const onFinish = async (values) => {
    try {
      const { username, password } = values;
      const response = await clientLogin(username, password);
      if (response.status === 200) {
        setClientData({
          isAuthenticated: true,
          clientId: response.data.client_id,
          first_name: response.data.userInfo.first_name,
          last_name: response.data.userInfo.last_name,
          address1: response.data.userInfo.address1,
          address2: response.data.userInfo.address2,
          city: response.data.userInfo.city,
          state: response.data.userInfo.state,
          zipCode: response.data.userInfo.zip_code,
          primaryPhone: response.data.userInfo.primary_phone,
          cell1: response.data.userInfo.cell1,
          cell2: response.data.userInfo.cell2,
          email: response.data.userInfo.email,
          role: response.data.userInfo.role,
          createdAt: response.data.userInfo.created_at,
          updatedAt: response.data.userInfo.updated_at,
        });
      }
      navigate("/main_page");
    } catch (err) {
      message.error(`Error: ${err}`);
      console.error("Error adding user:", err);
    }
  };
  return (
    <div className="login-container">
      <Card title={<div>Login</div>} type="inner">
        <Form
          name="login"
          initialValues={{
            remember: true,
          }}
          style={{
            width: 500,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Flex justify="space-between" align="center">
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>
              <a href="">Forgot password</a>
            </Flex>
          </Form.Item>

          <Form.Item>
            <Button block type="primary" htmlType="submit">
              Log in
            </Button>
            or <Link to={"/signup"}>Register now!</Link>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};
export default ClientLogin;
