import React from 'react';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Review from './Review';
import Services from './Services';
import Subscribe from './Subscribe';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Parts/>
            <Review/>
            <Services/>
            <BusinessSummary/>
            <Subscribe/>
        </div>
    );
};

export default Home;