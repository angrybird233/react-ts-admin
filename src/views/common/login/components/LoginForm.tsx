import React, {useEffect} from 'react'
import { Button, Form, Input, Flex, message   } from 'antd';
import { createStyles } from 'antd-style';
import type { FormProps  } from 'antd';
import {useNavigate } from 'react-router-dom'



const useStyles = createStyles(({  css })=> ({
  title: css` 
    text-align: center;
    font-size: 24px;
    margin-bottom: 50px;
    font-weight: bold;
  `,
  submitButton: css` 
    width: 100%;
    margin-top: 20px;
    background: #101e52;
    &:hover {
      background: #101e52;
    }
  `
    
}))

interface LoginFormProps {
  toRegister: () => void
}

type FieldType = {
  username?: string;
  password?: string;
};

const LoginForm: React.FC<LoginFormProps> = ({toRegister}) => {
  const { styles } = useStyles();
  const navigate = useNavigate()
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('values:', values);
    message.success('登录成功', 1000, ()=> {
      useEffect(()=> {
        navigate("/myapp/databoard");
      }, [])
    })
  }

  return (
    <div className='loginForm'>
      <div className={styles.title}>xxxx管理系统</div>
      <Form
        name="loginForm"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 18, offset: 2 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        size='large'
        onFinish={onFinish}
      >
        <Form.Item <FieldType>
          label="用户名"
          name="username"
          initialValue='admin'
          style={{marginBottom: '30px'}}
          rules={[{ required: true, message: '请输入用户名' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item<FieldType>
          label="密  码"
          name="password"
          initialValue='123456'
          rules={[{ required: true, message: '请输入密码' }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button type="primary" htmlType='submit' className={styles.submitButton}>
            登录
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 24 }}>
          <Flex justify='end'>
            <Button type="link" onClick={toRegister}>注册</Button>
          </Flex>
        </Form.Item>
        
      </Form>
    </div>
  )
}



export default LoginForm