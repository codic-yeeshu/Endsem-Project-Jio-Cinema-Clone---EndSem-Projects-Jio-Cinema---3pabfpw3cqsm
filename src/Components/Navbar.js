import { useNavigate } from "react-router-dom";
import styles from "../css/Navbar.module.css";
import { useContext } from "react";
import apiContextProvider from "./Context";

export default function Navbar(){
    const valueFromContext = useContext(apiContextProvider);
    const navigate = useNavigate();
    return(
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <img src="https://www.jiocinema.com/images/jio_logo.svg"/>
                <p>JioCinema</p>
            </div>
            {valueFromContext.jwt == "" && <button className={styles.signinButton} onClick={()=>navigate("/login")}>Sign In</button>}
            {valueFromContext.jwt != "" && <button className={styles.signinButton} onClick={()=>{
                valueFromContext.email = "";
                valueFromContext.username = "";
                valueFromContext.password = "";
                valueFromContext.jwt = "";
                navigate("/");
            }}>Sign Out</button>}
        </nav>
    )
}