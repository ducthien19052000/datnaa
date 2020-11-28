import React from 'react'
import { Form, Input, Button, Checkbox, Image } from 'antd';
import './index.css'
const Login = () => {
    const layout = {
        labelCol: {
          span: 5,
        },
        wrapperCol: {
          span: 16,
        },
      };
      const tailLayout = {
        wrapperCol: {
          offset: 8,
          span: 6,
        },
      };
      const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
        <div className='login-form'>
            <div style={{width:'100%',textAlign:'center',margin:'10px 0 10px 0 '}}><Image width='10%' src='https://i.pinimg.com/736x/4f/e1/f8/4fe1f8492f260526521c11b40ff1487b.jpg'/></div>
            
              <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

    

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
         Đăng nhập
        </Button>
      </Form.Item>
    </Form>
        </div>
    )
}

export default Login
