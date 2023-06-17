import React from 'react';
import Blogs from '../pages/Blogs';
import Contacts from '../pages/Contacts';
import Header from '../pages/Header';
import Experience from '../pages/Experience';


const Home = () => {
    return (
        <div>
          <Header/>
        
          <Blogs/>
          <Experience/>
          <Contacts/>
        </div>
    );
};

export default Home;