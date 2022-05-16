import { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styles from "../style/ayat.module.css"
import logo from "../Img/logo.png";

const Ayat = (props) => {
    const [data, setData] = useState([]);
    const [surah, setSurah] = useState([]);
    const [nameSurah, setNameSurah] = useState('');
    const [totalSurah, settotalSurah] = useState('');
    const [short, setShort] = useState('');
    const [kota, setKota] = useState('');
    const [juz, setJuz] = useState('');

    let id = props.match.params.nomorID;
    
    useEffect(() => {
        axios.get(`https://api.quran.sutanlab.id/surah/${id}`).then((res) => {
            setSurah(res.data.data)
            setNameSurah(res.data.data.name.transliteration.id)
            settotalSurah(res.data.data.name.translation.id)
            setShort(res.data.data.name.short)
            setKota(res.data.data.revelation.id)
            setKota(res.data.data.revelation.id)
            setJuz(res.data.data.verses[0].meta.juz);
        })
    })


    useEffect(() => {
      axios.get(`https://api.quran.sutanlab.id/surah/${id}`).then((res) => {
        setData(res.data.data.verses);
      });
    });

    return (
        <Fragment>
            <div className={`${styles.ayatku}`}>
                {data.length > 0 ? (
                    <div>
                        {/* Header */}
                        <div className={`${styles.headerAyat}`}>
                            {/* Logo */}
                            <div className={`${styles.logoAyat}`}>
                                <img src={logo} alt="Logo" />
                            </div>

                            {/* Surah */}
                            <div className={`${styles.headerContent}`}>
                                <h4>{surah.number}. {nameSurah} </h4>
                                <p>{totalSurah} | {surah.numberOfVerses} ayat</p>
                            </div>

                            {/* Button Back */}
                            <div className={`${styles.btnBack}`}>
                                <button className={`${styles.back1}`}><Link to="/" className={`${styles.backLink}`}>Kembali</Link></button>
                                <button className={`${styles.back2}`}><Link to="/" className={`${styles.backLink}`}><i class="fa-solid fa-chevron-left"></i></Link></button>
                            </div>
                        </div>

                        {/* Content Ayat */}
                        <div className={`${styles.contentAyat}`}>
                            <div className={`${styles.subAyat}`}>

                                {/* Sub Header */}
                                <div className={`${styles.headerSubAyat}`}>
                                    <div className={`${styles.headerSubContent}`}>
                                        <div className={`${styles.headerKota}`}>
                                            <h3>{kota}</h3>
                                        </div>

                                        <div className={`${styles.headerArab}`}>
                                            <h1>{short}</h1>
                                        </div>

                                        <div className={`${styles.headerJuz}`}>
                                            <h3> Juz {juz}</h3>
                                        </div>
                                    </div>
                                </div>

                                {/* Detail Ayat */}
                                <div className={`${styles.spaceContent}`}>
                                    {data.length > 0 ? (
                                        data.map((param) => {
                                            return (
                                                <div className={`${styles.mainContent}`}>
                                                    <div className={`${styles.contentTop}`}>
                                                        <div className={`${styles.contentNo}`}>
                                                            <h2>{param.number.inSurah}.</h2>
                                                        </div>
                                                        <div className={`${styles.contentArab}`}>
                                                            <h2>{param.text.arab}</h2>
                                                        </div>
                                                    </div>

                                                    <div className={`${styles.contentMid}`}>
                                                        <p><b>Artinya :</b> {param.translation.id}</p>
                                                        <audio controls src={param.audio.primary}></audio>
                                                    </div>
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div></div>
                                    )}
                                </div>

                                <div className={`${styles.footerAyat}`}>
                                    <p>Contribute with : <a href="https://github.com/Ryhann">Rayhan Putra</a></p>
                                    <p className={`${styles.copyright}`}>&copy; Rz Qur'an 2022</p>
                                    <p>Design By : <a href="https://github.com/richalzackyaflacha">Rz Project</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className={`${styles.loading}`}>
                        <div className={`${styles.loadingContent}`} role="status">
                            <img src={logo} alt="Logo" />
                            <h4>Loading<span>...</span></h4>
                        </div>
                    </div>
                )}
            </div>
        </Fragment>
    );
};

export default Ayat;
