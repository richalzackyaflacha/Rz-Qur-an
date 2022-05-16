import React, { Component, Fragment } from "react";
import styles from "../style/dashboard.module.css";
import logo from "../Img/logo.png";

class Jumbotron extends Component {
    render() {
        return (
            <Fragment>
                <div className={`${styles.dashboard}`}>
                    <div className={`${styles.frame}`}>
                        <div className={`${styles.content}`}>
                            <div className={`${styles.contentLogo}`}>
                                <img src={logo} alt="Qur'an Logo" />
                            </div>

                            <a href="#baca" className={`${styles.btnBaca}`}><button>Baca Qur'an</button></a>
                        </div>
                    </div>

                    <div className={`${styles.licence}`}>
                        <p>Contribute with : <a href="https://github.com/Ryhann">Rayhan Putra</a></p>
                        <p>Design By : <a href="https://github.com/richalzackyaflacha">Rz Project</a></p>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Jumbotron;
