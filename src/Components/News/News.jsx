import React from "react";
import { Dropdown } from "react-bootstrap";
import "./News.css";

const News = (state) => {
  return (
    <div className="news-container">
      <div className="card">
        <div className="card-header">
          <div className="search-dropdowns">
            <h5 className="search-text">Search</h5>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Stories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <h5 className="search-text">by</h5>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Popularity
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <h5 className="search-text">for</h5>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                All time
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="card-body">
          <div className="story_container">
            <div className="story_data">
              <div className="story_title">
                <a href="https://news.ycombinator.com/item?id=16582136">
                  <span>Stephen Hawking has died</span>
                </a>
                <a
                  href="http://www.bbc.com/news/uk-43396008"
                  target="_blank"
                  className="story_link"
                >
                  (http://www.bbc.com/news/uk-43396008)
                </a>
              </div>
              <div className="story_meta">
                <span>
                  <a href="https://news.ycombinator.com/item?id=16582136">
                    6015 points
                  </a>
                </span>
                ,<span className="story_separator">|</span>
                <span>
                  <a href="https://news.ycombinator.com/user?id=Cogito">
                    <span>Cogito</span>
                  </a>
                </span>
                <span className="story_separator">|</span>
                <span>
                  <a href="https://news.ycombinator.com/item?id=16582136">
                    2 years ago
                  </a>
                </span>
                <span className="story_separator">|</span>
                <span>
                  <a href="https://news.ycombinator.com/item?id=16582136">
                    436 comments
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer text-muted">Pagination</div>
      </div>
    </div>
  );
};

export default News;
