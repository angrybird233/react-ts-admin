import React from 'react'
import { Button, Form, Input, Flex  } from 'antd';
import { createStyles } from 'antd-style';
import type { FormProps,  } from 'antd';



const useStyles = createStyles(({  css })=> ({
  title: css` 
    text-align: center;
    font-size: 24px;
    margin-bottom: 30px;
    font-weight: bold;
  `,
  registerButton: css` 
    width: 100%;
    margin-top: 10px;
    background: #101e52;
    &:hover {
      background: #101e52;
    }
  `
}))

interface RegisterFormProps {
  toLogin: () => void
}

type FieldType = {
  username?: string;
  password?: string;
  passwordConfirm?: string;
};


const RegisterForm: React.FC<RegisterFormProps> = ({toLogin}) => {
  const { styles } = useStyles();

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('values:', values);
  }

  return (
    <div className='registerForm'>
      <div className={styles.title}>注册</div>
      <Form
        name="registerForm"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 17, offset: 1 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        size='large'
        onFinish={onFinish}
      >
        <Form.Item<FieldType>
          label="用户名"
          name="username"
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input placeholder='用户名' />
        </Form.Item>

        <Form.Item<FieldType>
          label="密  码"
          name="password"
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password placeholder='输入密码' />
        </Form.Item>
        <Form.Item<FieldType>
          label="再次输入"
          name="passwordConfirm"
          rules={[{ required: true, message: '请再次输入密码' }]}
        >
          <Input.Password placeholder='再次输入密码' />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType='submit' className={styles.registerButton}>确认</Button>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Flex justify='end'>
            <Button type="link" onClick={toLogin}>返回登录</Button>
          </Flex>
        </Form.Item>
      </Form>
    </div>
  )
}



export default RegisterForm