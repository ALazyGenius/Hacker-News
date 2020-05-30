import React from 'react';
import Header from '../Header/Header';
import News from '../News/News';

function Home() {
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