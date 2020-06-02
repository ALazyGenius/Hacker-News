import React from 'react';
import './Header.css';
import HackerNewsLogo from '../../assests/logo-hn-search-a822432b.jpg';

const Header = (props) => {

    const searchFunction = (event) => {
        props.newsFilterOnChange(event.target.value);
    }

    return (
        <div className="hacker-news-header">
            <div>
                <img className="hacker-news-logo" src={HackerNewsLogo} alt="Hacker-search-logo" />
            </div>
            <h5>Hacker News</h5>
            <div className="input-group md-form form-sm form-1 pl-0 search-bar">
                <div className="input-group-prepend">
                </div>
                <input className="form-control my-0 py-1" type="text" placeholder="Search stories by title, url or author" aria-label="Search" onChange={searchFunction} />
            </div>
            <div className="header-settings">
                <span className="settings">Settings</span>
            </div>

        </div>
    );

}

export default Header;


