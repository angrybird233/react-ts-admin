import React, { useState } from "react";


const Databoard: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const add = () => {
    setCount(count + 1);
  }


  return (
    <div className="">
      <button onClick={add}>数据看板：{count}</button>
    </div>
    
  )
}

export default Databoard;