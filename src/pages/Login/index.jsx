import React, { useState, useEffect } from "react";
import { Form, Input, Button, Checkbox, Spin } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./canvarBg"
const rules = {
    username: [
        {
            required: true,
            message: "请输入用户名",
        },
    ],
    password: [
        {
            required: true,
            message: "请输入密码",
        },
    ],
};
//表单组件
const FormDom = () => {
    //验证成功
    const onFinish = (values) => {
        console.log("Success:", values);
    };
    //验证失败
    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item name="username" rules={rules.username}>
                <Input prefix={<UserOutlined style={{ fontSize: "16px", color: "#08c" }} />} placeholder="Username" />
            </Form.Item>

            <Form.Item name="password" rules={rules.password}>
                <Input
                    prefix={<LockOutlined style={{ fontSize: "16px", color: "#08c" }} />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>

            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>保存密码</Checkbox>
                </Form.Item>

                <a style={style.forget} href="">
                    忘记密码
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" style={style.submit} htmlType="submit">
                    登 录
                </Button>
            </Form.Item>
        </Form>
    );
};

const Login = () => {
    let loading = false;
    return (
        <div className="content--canvas">
        <div  style={style.loginBox}>
            <Spin spinning={loading}>
                <h1 style={{ textAlign: "center" ,color:'#0ab5e4'}}>
                    <img
                        style={{ height: "44px", marginRight: 16 }}
                        alt="logo"
                        src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
                    />
                    Ant Design
                </h1>
                <div style={{ marginTop: 12, textAlign: "center", marginBottom: 20 }}>Ant Design</div>
                {/* 登录页表单 */}
                <FormDom />
            </Spin>
        </div>
        </div>
    );
};

const style = {
    loginBox: {
        width: "300px",
        position: "fixed",
        left: "50%",
        top: "30%",
        transform: "translate(-50%,-50%)",
        zIndex:'11',
        color:'#0ab5e4'
    },
    submit: {
        width: "100%",
    },
    forget: {
        float: "right",
    },
};

export default Login;
