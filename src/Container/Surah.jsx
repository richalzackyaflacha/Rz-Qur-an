import React, { Fragment } from "react";
import SurahCard from "../Components/Card_Surah";
import API from "../Service/index";
import { withRouter } from "react-router-dom";
import styles from "../style/surah.module.css"
import frameh from "../Img/frameh.png"
import framef from "../Img/framef.png"
import frames from "../Img/frames.png"
import logo from "../Img/logo.png";

class Surah extends React.Component {
    state = {
        surah: [],
        search: "",
    };

    // Get
    getSurahAPI = () => {
        API.getNewsSurah().then((result) => {
            this.setState({
                surah: result,
            });
        });
    };

    componentDidMount() {
        this.getSurahAPI();
    }

    // Detail, mengambil berdasarkan nomor setiap surah
    handleDetailAyat = (nomor) => {
        this.props.history.push(`/surah/${nomor}`);
    };

    // onChange for Search
    onChange = (event) => {
        this.setState({
            search: event.target.value,
        });
    };

    render() {
        // Search function
        const { search, surah } = this.state;
        const filterSurah = surah.filter((surah) => {
            return surah.nama.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        });

        return (
            <Fragment>
                <div className={`${styles.surahku}`}>

                    {/* Header */}
                    <div className={`${styles.searchbar}`}>
                        {/* Logo */}
                        <div className={`${styles.logoSurah}`}>
                            <img src={logo} alt="Logo" />
                        </div>

                        {/* Search Frame */}
                        <div className={`${styles.content}`}>
                            <img src={frames} alt="Search Frame" />
                        </div>

                        {/* Searchbar */}
                        <form>
                            <input class="form-control" type="search" placeholder="Cari Surah..." aria-label="Search" onChange={this.onChange} />
                        </form>

                        {/* Header Frame */}
                        <img src={frameh} alt="Header Frame" className={`${styles.frameh}`}/>
                    </div>


                    {/* Content */}
                    <div className={`${styles.contentSurah}`}>
                        <div className={`${styles.subContent}`}>
                            {/* Surah */}
                            {filterSurah.map((surah) => {
                                return <SurahCard key={surah.nomor} data={surah} Detail={this.handleDetailAyat} />;
                            })}
                        </div>
                    </div>

                    
                    {/* Footer */}
                    <div className={`${styles.footer}`}>
                        {/* Footer Frame */}
                        <img src={framef} alt="Footer Frame" />
                        
                        <div className={`${styles.footerb}`}>
                            <div className={`${styles.lineFooter}`}>
                                <p>&#169; Rz Qur'an 2022</p>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default withRouter(Surah);
