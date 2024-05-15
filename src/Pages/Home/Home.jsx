import React from 'react';
import Banner from '../../Components/Banner';
import FeaturedJobs from '../../Components/FeaturedJobs';
import GetJobSection from '../../Components/GetJobSection';
import MoreFeature from '../../Components/MoreFeature';


const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <div className='max-w-[90%] mx-auto'>
                <FeaturedJobs></FeaturedJobs>
                <GetJobSection></GetJobSection>
            </div>
            <MoreFeature></MoreFeature>
        </div>
    );
};

export default Home;