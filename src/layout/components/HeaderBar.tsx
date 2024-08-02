import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {  Button, Layout, Dropdown, Modal  } from 'antd'
import type { MenuProps } from 'antd';
import { createStyles } from 'antd-style'
import FullScreen from './Fullscreen'
import HeaderSearch from './HeaderSearch'
import HeaderBreadcrumb from './HeaderBreadcrumb'
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
const { Header } = Layout;

const useStyles = createStyles(({ token, css }) => {
  return {
    header: css`
      height: 50px;
      background: ${token.colorBgContainer};
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px 0 10px;
      .toggle-btn {
        width: 50px;
        height: 50px;
        margin: 0;
        font-size: 22px;
        cursor: pointer;
        font-weight: bold;
      }
      .action-btn{
        padding: 0 10px;
        font-size: 20px;
        display: inline-block;
        cursor: pointer;
        &:hover {
          color: #1890ff;
        }
      }
      .user-info{
        font-size: 16px;
        padding-left: 20px;
      }
    `

  }
})

const items: MenuProps['items'] = [
  { key: '1', label: '退出登录' },
  { key: '2', label: '修改密码' },
]

interface HeaderBarProps {
  collapsed: boolean
  toggleCollapsed: () => void
}

const HeaderBar: React.FC<HeaderBarProps> = ({ collapsed, toggleCollapsed }) => {

  const { styles } = useStyles();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);


  const onClick: MenuProps['onClick'] = (e) => {
    if (e.key === '1') {
      setOpen(true)
    }
    if (e.key === '2') {
      // 修改密码
    }
  };

  const handleOk=()=> {
    navigate('/login')
  }
  const handleCancel=()=> {
    setOpen(false)
  }

  return (
    <Header className={styles.header}>
      <div className="flex-start-center">
        <Button
          type="text"
          className="toggle-btn"
          onClick={toggleCollapsed}>{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <HeaderBreadcrumb />
      </div>
      <div className="flex-end header-right">
        <div className='action-buttons'>
          <div className="action-btn"><HeaderSearch /></div>
          <div className="action-btn"><FullScreen /></div>
        </div>
        <Dropdown menu={{ items, onClick }} overlayStyle={{ borderRadius: 4 }}>
          <div className="user-info">
            <span>admin</span>
          </div>
        </Dropdown>
      </div>

      <Modal
        title="温馨提示"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="确认"
        cancelText="取消"
      >
        <p>确认退出登录吗？</p>
      </Modal>
    </Header>
  )
}

export default HeaderBar