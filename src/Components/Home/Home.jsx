import React, { useEffect } from 'react';
import Header from '../Header/Header';
import News from '../News/News';

const fetchData = () => {
    fetch("http://hn.algolia.com/api/v1/search?tags=story").then(fetchSuccess).catch(fetchError);
}

const fetchSuccess = response => {
    console.log(response.json());
}

const fetchError = error => {
    console.log(error);
}

const Home = (state) => {
    console.log(state);
    const { dataReducer } = state;

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div className="container">
            <div className="row">
                <Header />
                <News />
            </div>
        </div>
    );
}

export default Home;