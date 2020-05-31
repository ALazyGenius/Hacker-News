import React from "react";
import { Dropdown } from "react-bootstrap";
import "./News.css";

const News = (newsData) => {
  console.log("*******", newsData);

  const createdDateCal = (date) => {
    const date1 = new Date();
    const date2 = new Date(date);
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff / day);
    var months = Math.floor(days / 31);
    var years = Math.floor(months / 12);

    if (years > 0) {
      return years + ' years';
    }
    else if (years <= 0 && months > 0) {
      return months + ' months';
    }
    else if (years <= 0 && months <= 0) {
      return days + ' days';
    }
  }

  return (
    <div className="news-container">
      <div className="card">
        <div className="card-header">
          <div className="search-dropdowns">
            <h5 className="search-text">Search</h5>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
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
              <Dropdown.Toggle variant="link" id="dropdown-basic">
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
              <Dropdown.Toggle variant="link" id="dropdown-basic">
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
          {newsData && newsData.hits && newsData.hits.map(items => {
            return (
              <div className="story_container">
                <div className="story_data">
                  <div className="story_title">
                    <a href={items.url}>
                      <span>{items.title}</span>
                    </a>
                    <a
                      href="{items.url}"
                      target="_blank"
                      className="story_link"
                    >
                      ({items.url})
                </a>
                  </div>
                  <div className="story_meta">
                    <span>
                      <a href="https://news.ycombinator.com/item?id=16582136">
                        {items.points} points
                  </a>
                    </span>
                ,<span className="story_separator">|</span>
                    <span>
                      <a href="https://news.ycombinator.com/user?id=Cogito">
                        <span>{items.author}</span>
                      </a>
                    </span>
                    <span className="story_separator">|</span>
                    <span>
                      <a href="https://news.ycombinator.com/item?id=16582136">
                        {createdDateCal(items.created_at)} ago
                  </a>
                    </span>
                    <span className="story_separator">|</span>
                    <span>
                      <a href="https://news.ycombinator.com/item?id=16582136">
                        {items.num_comments} comments
                  </a>
                    </span>
                  </div>
                </div>
              </div>)
          })}
        </div>
        <div className="card-footer text-muted">Pagination</div>
      </div>
    </div>
  );
};

export default News;
