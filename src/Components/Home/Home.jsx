import React from 'react';
import Header from '../Header/Header';
import NewsContainer from '../../Containers/NewsContainer';
import CONSTANTS from '../../CONSTANTS/constants';

const Home = (newsData) => {
    let searchDataArray = [];

    const newsFilterOnChange = (searchData) => {
        if (newsData.api.result) {
            searchDataArray = newsData.api.result.filter(item => {
                if ((item.title && item.title.toLowerCase().includes(searchData)) || (item.author && item.author.toLowerCase().includes(searchData)) || (item.url && item.url.toLowerCase().includes(searchData))) {
                    return item;
                }
            });
            newsData.dispatch({
                type: CONSTANTS.SEARCH_DATA,
                payload: {
                    data: searchDataArray
                }
            })
        }
    }
    return (
        <div className="container">
            <div className="row">
                <Header newsData={newsData} newsFilterOnChange={newsFilterOnChange} />
                <NewsContainer />
            </div>
        </div>
    );
}

export default Home;