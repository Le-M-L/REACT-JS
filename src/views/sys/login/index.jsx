import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import './index.less';
import { Link } from "react-router-dom"
export default class Login extends Component {
    state = {
        initialValues: {
            username: 'admin',
            password: '123456',
        },
    };
    onFinish = (values) => {
        this.props.history.replace('/admin')
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render() {
    
        return (
            <div className="loginBox">
                <div className="container">
                    <div>
                        <div></div>
                        <div>
                            <div className="container-form">
                                <h1><Link to="/admin" >登录</Link></h1>
                                <Form
                                    name="basic"
                                    labelCol={{ span: 4 }}
                                    wrapperCol={{ span: 20 }}
                                    initialValues={{ remember: true }}
                                    onFinish={this.onFinish}
                                    onFinishFailed={this.onFinishFailed}
                                >
                                    <Form.Item
                                        label="用户名"
                                        name="username"
                                        rules={[{ required: true, message: '请输入用户名!' }]}
                                    >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item
                                        label="密码"
                                        name="password"
                                        rules={[{ required: true, message: '请输入密码！' }]}
                                    >
                                        <Input.Password />
                                    </Form.Item>
                                    <Form.Item
                                        name="remember"
                                        valuePropName="checked"
                                        wrapperCol={{ offset: 4, span: 20 }}
                                    >
                                        <Checkbox>记住我</Checkbox>
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
                                        <Button type="primary" htmlType="submit">
                                            提交
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
