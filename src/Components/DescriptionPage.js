import { useState, useEffect, useContext } from "react"
import { useNavigate } from "react-router-dom";
import styles from "../css/Description.module.css";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

import apiContextProvider from "./Context";
export default function Description(){
    const navigate = useNavigate();
    const valueFromContext = useContext(apiContextProvider);
    const [detail, setDetail] = useState(null);
    const {id} = useParams();
    useEffect(()=>{

        if(id){
            async function dataFromApi(){
                const data = await fetch(`https://academics.newtonschool.co/api/v1/ottx/show/${id}`,{
                    method:"GET",
                    headers:{
                        'accept' : "application/json",
                        'projectID' : valueFromContext.projectId,
                        'Authorization' : `Bearer ${valueFromContext.jwt}`
                    }

                });
                let res = await data.json();
                // console.log(res);
                if(res.status === "success"){
                    setDetail(res);
                }
                else{
                    navigate("/login");
                }
            }
            dataFromApi();
        }
    },[])
    if(detail){
        return(
            <div className={styles.poster}>
                <img className={styles.image} src={detail.data.thumbnail}/>

                <div className={styles.info}>
                    <div className={styles.about}>
                        <button className={styles.playButton}>
                            <FontAwesomeIcon style={{
                                marginRight:"1vmin",
                            }} icon={faPlay}></FontAwesomeIcon>
                            Watch
                        </button>
                        <div className={styles.titleAndDescription}>
                            <h1 className={styles.titleOfMovie}>{detail.data.title}</h1>
                            <ul>
                                {detail.data.keywords.map((item)=>{
                                    return(
                                        <li className={styles.keyword}>{item}</li>
                                    )
                                })}
                            </ul>
                            <p>{detail.data.description}</p>
                        </div>
                        <div className={styles.cast}>
                            <h1>Cast</h1>
                            <p>{detail.data.cast.join(", ")}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return(
            <h1>Loading...</h1>
        )
    }
}