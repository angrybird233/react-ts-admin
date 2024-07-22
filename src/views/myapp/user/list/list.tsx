import React, { useState } from "react";
import styles from './list.module.less';


const ListList: React.FC = () => {
  const [state, setState] = useState<number>(0);

  return (
    <div className={ styles.list }>列表页面</div>
  )
}

export default ListList;