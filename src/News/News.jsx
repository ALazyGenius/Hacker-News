import React from "react";
import "./News.css";

const News = (state) => {
  return (
    <div className="news-container">
      <div className="card">
        <div className="card-header">Featured</div>
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
