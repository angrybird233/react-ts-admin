import React, {useState} from 'react'
import AsiderBar from './components/AsiderBar'
import HeaderBar from './components/HeaderBar'
import {theme, Layout } from 'antd'
const { Content } = Layout;

interface LayoutProps {
  children: React.ReactNode;
}


const LayoutWrap: React.FC<LayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ height: '100vh' }}>
      <AsiderBar collapsed={collapsed} />
      <Layout>
        <HeaderBar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />
        <Content
          style={{
            margin: '20px 14px',
            padding: 20,
            minHeight: 400,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutWrap