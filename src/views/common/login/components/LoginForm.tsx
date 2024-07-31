import React, {useEffect, useState} from 'react'
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
  const [messageApi, contextHolder] = message.useMessage();
  const [isLogin, setIsLogin] = useState(false)
  const key = 'updatable';
  useEffect(()=> {
    if(isLogin){
      navigate("/myapp/databoard");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin])
  const openMessage = () => {
    messageApi.open({
      type: 'loading',
      content: '登录中',
      duration: 1,
    });
    
  };
  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('values', values);
    
    openMessage();
    setTimeout(() => {
      messageApi.open({
        key,
        type: 'success',
        content: '登录成功',
        duration: 0.5,
        onClose: () => {
          setIsLogin(true)
        }
      });
    }, 1000);
    
  }

  return (
    <div className='loginForm'>
      {contextHolder}
      <div className={styles.title}>智慧农业管理系统</div>
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
          initialValue='654321'
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