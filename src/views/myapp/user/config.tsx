
import User from './user.tsx';
import { UserOutlined } from '@ant-design/icons';

export default {
  path: '/myapp/user', // （*必填）
  meta: {
    type: 1, // 1: 菜单  2: 视图  3: 菜单+视图
    title: '人员', // 菜单以及权限验证所显示的中文名 （*必填）
    key: 'myapp_user',
    filePath: 'myapp/user', // 模块路径
    menuIcon: <UserOutlined />, // 左侧菜单的icon
    description: '人员', // 模块描述
    keepAlive: false, // 是否缓存
    requiresAuth: true, // 是否需要登录
    isShowMenu: true // 是否在菜单中显示
  },
  children: [],
  element: <User />
}
