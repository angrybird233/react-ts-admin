import React, {useState} from "react";
import styles from "./login.module.less";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";


const Login: React.FC =() =>{

  const [isLogin, setIsLogin] = useState(true);


  const toggle = () => {
    setIsLogin(!isLogin);
  }

  return (
    <div className={ `${styles.loginPage} ${!isLogin? styles.showRegister : ''} ` }>
      <div className={styles.formContainer}>
        <div className={`${styles.form} ${styles.loginForm}`}><LoginForm toRegister={toggle} /></div> 
        <div className={`${styles.form} ${styles.registerForm}`}><RegisterForm toLogin={toggle}/></div>
      </div>
    </div>
  );
}

export default Login;