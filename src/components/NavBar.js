import React from 'react';
import {
    Link
} from "react-router-dom";


class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    handleSearchSubmit = (event) => {
        event.preventDefault();
        // console.log(document.getElementById("but"))
        console.log(event)
        console.log(event.target)
        console.log(event.target[0].value)
        const searchQuery = "/"+event.target[0].value;
        window.location.href = searchQuery;

    };

    render() {

        return <>
            <div>
                <nav className="navbar navbar-expand-lg bg-body-tertiary ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">News Monger</a >
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="/">Home</a >
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link" to="/">About us</Link >
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link" to="/business">Business</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/entertainment">Entertainment</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/general">General</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/health">Health</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/science">Science</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/sports">Sports</Link >
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/technology">Technology</Link >
                                </li>
                            </ul>
                            <form className="d-flex" onSubmit={this.handleSearchSubmit} role="search">
                                <input className="form-control me-2" type="search" placeholder="Search"  aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit" >Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </>;
    }
}


export default NavBar;