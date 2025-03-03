import "./signup.css";
import React, { useState } from "react";
import { createClient } from "../../../servers/clientPostRequest/clientPostReqest";
import { Button, Card, Form, Input, message } from "antd";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { PiCityLight, PiFileZip } from "react-icons/pi";
import { MdLocationCity, MdOutlineEmail } from "react-icons/md";
import { RiCellphoneLine } from "react-icons/ri";
import { TbPasswordUser } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const Signup = () => {
  const [key, setKey] = useState(0);

  const onFinish = async (values) => {
    try {
      await createClient(values);
      setKey(key + 1);
      message.success("Client created successfully", 2);
    } catch (err) {
      console.error("Unable to create new client", err);
    }
  };

  return (
    <div>
      <Card title={<div>Signup</div>} type="inner" style={{ height: 400 }}>
        <Form
          {...layout}
          // name="nest-messages"
          onFinish={onFinish}
          className="signup-form"
          key={key}
          style={{
            width: 1200,
          }}
          validateMessages={validateMessages}
        >
          <div className="signup-form-item-container">
            <Form.Item
              name="first_name"
              label="First Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input prefix={<AiOutlineUser />} placeholder="First name" />
            </Form.Item>

            <Form.Item
              name="last_name"
              label="Last Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input prefix={<AiOutlineUser />} placeholder="Last name" />
            </Form.Item>

            <Form.Item
              name="address1"
              label="Address 1"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input prefix={<IoLocationOutline />} placeholder="Address 1" />
            </Form.Item>

            <Form.Item name="address2" label="Address 2">
              <Input prefix={<IoLocationOutline />} placeholder="Address 2" />
            </Form.Item>

            <Form.Item name="state" label="State" rules={[{ required: true }]}>
              <Input prefix={<MdLocationCity />} placeholder="State" />
            </Form.Item>

            <Form.Item name="city" label="City" rules={[{ required: true }]}>
              <Input prefix={<PiCityLight />} placeholder="City" />
            </Form.Item>

            <Form.Item
              name="zip_code"
              label="Zip Code"
              rules={[{ required: true }]}
            >
              <Input prefix={<PiFileZip />} placeholder="Zip code" />
            </Form.Item>

            <Form.Item
              name="primary_phone"
              label="Primary Phone"
              rules={[{ required: true }]}
            >
              <Input prefix={<BsTelephone />} placeholder="Primary phone" />
            </Form.Item>

            <Form.Item name="cell1" label="Cell 1" rules={[{ required: true }]}>
              <Input prefix={<RiCellphoneLine />} placeholder="Cell 1" />
            </Form.Item>

            <Form.Item name="cell2" label="Cell 2">
              <Input prefix={<RiCellphoneLine />} placeholder="Cell 2" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[{ required: true, type: "email" }]}
            >
              <Input prefix={<MdOutlineEmail />} placeholder="Email" />
            </Form.Item>

            <Form.Item
              name="password_hash"
              label="Passowrd"
              rules={[{ required: true, type: "password" }]}
            >
              <Input prefix={<TbPasswordUser />} placeholder="Password" />
            </Form.Item>
          </div>

          <div className="signup-btn-container">
            <Button>
              <Link to={"/"}>Cancel</Link>
            </Button>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
};

export default Signup;
