import React from 'react'
import {Button, Layout } from 'antd'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { createStyles} from 'antd-style'
const { Header } = Layout

const useStyles = createStyles(({token ,css})=> {
  return {
    header: css`
      height: 50px;
      background: ${token.colorBgContainer};
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 10px;
    `,
    toggleBtn: css`
      width: 50px;
      height: 50px;
      margin: 0;
      font-size: 22px;
      cursor: pointer;
      font-weight: bold;
  }`
  }
})

interface HeaderBarProps {
  collapsed: boolean
  toggleCollapsed: () => void
}

const HeaderBar: React.FC<HeaderBarProps> = ({ collapsed, toggleCollapsed }) => {
  
  const {styles} = useStyles();

  return (
    <Header className={ styles.header}>
      <Button
        type="text" 
        className={styles.toggleBtn} 
        onClick={toggleCollapsed}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
    </Header>
  )
}

export default HeaderBar