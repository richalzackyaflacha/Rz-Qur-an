import React, { Component } from "react";
import Jumbotron from "./Header/Jumbotron";
import Surah from "./Container/Surah";
import Ayat from "./Container/Ayat";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


class App extends Component {
    render() {
        return (
            <div className="App" id="light">
                <Router>
                    <Jumbotron />
                    <div id="baca">
                        <Switch>
                            {/* Surah */}
                            <Route path="/" exact component={Surah} />
                            {/* Detail Ayat Per Surah */}
                            <Route path="/surah/:nomorID" component={Ayat} />
                        </Switch>
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
