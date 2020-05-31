import React from "react";
import { Dropdown } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import "./News.css";
import createdDateCal from "../../Helpers/helpers";

const News = (newsData) => {
  const handlePageClick = (event) => {
    // const pageSelected = event.selected;
  };

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
          {newsData &&
            newsData.hits &&
            newsData.hits.map((items) => {
              return (
                <div className="story_container" key={items.objectID}>
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
                </div>
              );
            })}
        </div>
        {newsData && newsData.hits && (
          <div className="card-footer text-muted">
            <ReactPaginate
              previousLabel={"prev"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={newsData.nbPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={3}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default News;
