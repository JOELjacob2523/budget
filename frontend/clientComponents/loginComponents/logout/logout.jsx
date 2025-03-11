import "./logout.css";
import React from "react";
import { Form, Button, message } from "antd";
import { logout } from "../../../servers/clientGetRequest/clientGetRequest";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  const onFinish = async () => {
    try {
      await logout();
      message.success("Successfully logged out", 2);
      navigate("/");
    } catch (err) {
      console.error("Error logging out:", err);
    }
  };
  return (
    <div className="logout-container">
      <Form onFinish={onFinish}>
        <Button htmlType="submit" style={{ fontWeight: "bold" }}>
          Logout
        </Button>
      </Form>
    </div>
  );
};

export default Logout;
