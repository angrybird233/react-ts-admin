import React from "react";
import { FullscreenOutlined, FullscreenExitOutlined } from '@ant-design/icons';
import { useFullscreen } from '@reactuses/core'


const FullscreenComponent: React.FC = () => {
  const target = document.querySelector('#root')
  const [isFullscreen, { toggleFullscreen }] = useFullscreen(target);

  return (
    <div onClick={toggleFullscreen}>
      {isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
    </div>
  )
}

export default FullscreenComponent;