import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Review from './Review';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <Review/>
            <BusinessSummary/>
        </div>
    );
};

export default Home;