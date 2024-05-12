import React from 'react';
import Banner from '../../Components/Banner';
import FeaturedJobs from '../../Components/FeaturedJobs';


const Home = () => {
    return (
        <div className='lg:max-w-[90%] mx-auto'>
            <Banner></Banner>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;