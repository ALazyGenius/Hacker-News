import React from 'react';
import Header from '../Header/Header';
import NewsContainer from '../../Containers/NewsContainer';


const Home = (state) => {
    console.log(state);

    return (
        <div className="container">
            <div className="row">
                <Header />
                <NewsContainer />
            </div>
        </div>
    );
}

export default Home;