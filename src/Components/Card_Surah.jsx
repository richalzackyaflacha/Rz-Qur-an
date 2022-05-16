import React from "react";
import styles from "../style/surah.module.css";

const Card_Surah = (props) => {
    return (
        <div className={`${styles.outer}`}>
            
            {/* Cirle Decoration */}
            <div className={`${styles.circle2}`}></div>
            <div className={`${styles.circle}`}></div>

            {/* Content */}
            <div className={`${styles.inner}`}>
                <a type="submit" onClick={() => props.Detail(props.data.nomor)}>
                {/* Surah & Detail */}
                    <div className={`${styles.inner1}`} >
                        <h4>{props.data.nomor}. {props.data.nama}</h4>
                        
                        <div className={`${styles.detail1}`}>
                            <p>{props.data.arti} | {props.data.ayat} Ayat</p>
                        </div>
                    </div>
                </a>   
            </div> 

            {/* Circle Decoration */}
            <div className={`${styles.circle}`}></div>
            <div className={`${styles.circle2}`}></div>

        </div>
    );
};

export default Card_Surah;
