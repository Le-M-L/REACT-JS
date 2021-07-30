import React, { Component } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';

import "./index.less"
export default class Login extends Component {
    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    render () {
        return (
            <div className="loginBox" >
                <div className="container">
                    <div>
                        <div></div>
                        <div>
                            <div className="container-form" >
                                <Form
                                    name="basic"
                                    labelCol={{ span: 8 }}
                                    wrapperCol={{ span: 16 }}
                                    initialValues={{ remember: true }}
                                    onFinish={this.onFinish}
                                    onFinishFailed={this.onFinishFailed}
                                >
                                    <Form.Item label="用户名" name="username" rules={[{ required: true, message: '请输入用户名!', },]} >
                                        <Input />
                                    </Form.Item>

                                    <Form.Item label="密码" name="password" rules={[{ required: true, message: '请输入密码！', },]}>
                                        <Input.Password />
                                    </Form.Item>
                                    <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16, }} >
                                        <Checkbox>记住我</Checkbox>
                                    </Form.Item>

                                    <Form.Item wrapperCol={{ offset: 8, span: 16, }}>
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
        )
    }
}
