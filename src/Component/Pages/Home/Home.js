import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Review from './Review';
import Services from './Services';
import Subscribe from './Subscribe';

const Home = () => {
    return (
      <div>
        <Helmet>
          <title>Home - AutoParts</title>
        </Helmet>
        <Banner />
        <Parts />
        <Review />
        <Services />
        <BusinessSummary />
        <Subscribe />
      </div>
    );
};

export default Home;