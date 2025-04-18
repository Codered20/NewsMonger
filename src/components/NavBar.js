import { useContext } from 'react';
import { AppContext } from './context/context';
import { Link } from "react-router-dom";

function NavBar() {
    const { keyword, setKeyword, setCategory, setSearch } = useContext(AppContext);

    const handleHome = () => {
        setKeyword("");
        setCategory("");
    }

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        setSearch(keyword);
        setCategory("");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/NewsMonger/">News Monger</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/NewsMonger/" onClick={handleHome}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/NewsMonger/business" onClick={() => {
                                    setCategory("business");
                                    setKeyword("");
                                    setSearch("");
                                }}>Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/NewsMonger/entertainment" onClick={() => {
                                    setCategory("entertainment");
                                    setKeyword("");
                                    setSearch("");
                                }}>Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/NewsMonger/" onClick={() => {
                                    setCategory("general");
                                    setKeyword("");
                                    setSearch("");
                                }}>General</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/NewsMonger/health" onClick={() => {
                                    setCategory("health");
                                    setKeyword("");
                                    setSearch("");
                                    }}>Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/NewsMonger/science" onClick={() => {
                                    setCategory("science");
                                    setKeyword("");
                                    setSearch("");
                                    }
                                }>Science</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/NewsMonger/sports" onClick={() => {
                                    setCategory("sports");
                                    setKeyword("");
                                    setSearch("");
                                }}>Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/NewsMonger/technology" onClick={() => {
                                    setCategory("technology");
                                    setKeyword("");
                                    setSearch("");
                                }}>Technology</Link>
                            </li>
                        </ul>
                        <form className="d-flex" onSubmit={handleSearchSubmit} role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
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
