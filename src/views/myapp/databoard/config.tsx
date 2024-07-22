
import Databoard from './databoard.tsx';


const routeConfig: RouteObject = {
  path: '/myapp/databoard',
  meta: {
    type: 1, // 1 => 菜单 2 => 视图 3 => 菜单+视图
    title: '数据看板', // 菜单以及权限验证所显示的中文名 （*必填）
    key: 'myapp_databoard', 
    filePath: 'myapp/databoard', // 模块路径
    menuIcon: '', // 菜单以及权限验证所显示的 icon
    description: '数据看板', // 模块描述
    isShowMenu: true // 是否在菜单中显示
  },
  children: [],
  element: <Databoard />
}

export default routeConfig