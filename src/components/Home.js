import React from 'react';
import AllPosts from './AllPosts';
import Banner from './Banner';
import PostSection from './PostSection';
import TopNav from './TopNav';

const Home = () => {
    return (
        <div>
            <TopNav/>
            <Banner/>
            <PostSection/>
            <AllPosts/>
        </div>
    );
};

export default Home;