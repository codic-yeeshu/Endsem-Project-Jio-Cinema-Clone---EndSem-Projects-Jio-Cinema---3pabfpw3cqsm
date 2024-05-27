import styles from "../css/MovieCard.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import apiContextProvider from "./Context";
export default function MovieCard({movie}){
    const navigate = useNavigate();
    const valueFromContext = useContext(apiContextProvider);
    const movieCardClicked = ()=>{
        if(valueFromContext.jwt != ""){
            navigate(`/show/${movie._id}`);
        }
        else{
            navigate("/login");
            alert("You are not logged in");
        }
    }
    return (
        <div onClick={movieCardClicked}>

            <div className={styles.card}>
                <img src={movie.thumbnail}/>
            </div>
        </div>
        
    )
}