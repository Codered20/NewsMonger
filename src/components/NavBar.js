import { useContext, useState } from 'react';
import { AppContext } from './context/context';
import { Link } from "react-router-dom";

function NavBar() {
    const { setKeyword, setCategory } = useContext(AppContext);
    const [searchInput, setSearchInput] = useState("");

    const handleHome = () => {
        setKeyword("");
        setCategory("");
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault(); // Prevent page reload
        setKeyword(searchInput);
        setCategory("");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">News Monger</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" onClick={handleHome}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/business" onClick={() => {
                                    setCategory("business");
                                    setKeyword("");
                                }}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/entertainment" onClick={() => {
                                    setCategory("entertainment");
                                    setKeyword("");
                                }}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/general" onClick={() => {
                                    setCategory("general");
                                    setKeyword("");
                                }}>General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/health" onClick={() => {
                                    setCategory("health");
                                    setKeyword("");
                                    }}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/science" onClick={() => {
                                    setCategory("science");
                                    setKeyword("");
                                    }
                                }>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/sports" onClick={() => {
                                    setCategory("sports");
                                    setKeyword("");
                                }}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/technology" onClick={() => {
                                    setCategory("technology");
                                    setKeyword("");
                                }}>Technology</Link>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={handleSearchSubmit} role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={searchInput}
                                onChange={(e) => setSearchInput(e.target.value)}
                            />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default NavBar;
