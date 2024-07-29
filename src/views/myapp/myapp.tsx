import { Outlet } from "react-router-dom";
import LayoutWrap from '@/layout/LayoutWrap'

const Myapp: React.FC = () => {
  
  return (
    <LayoutWrap>
      <Outlet />
    </LayoutWrap>
  )
}
export default Myapp;