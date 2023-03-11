import React from 'react';
import Blogs from '../pages/Blogs';
import Contacts from '../pages/Contacts';
import Header from '../pages/Header';


const Home = () => {
    return (
        <div>
          <Header/>
          <Blogs/>
          <Contacts/>
        </div>
    );
};

export default Home;