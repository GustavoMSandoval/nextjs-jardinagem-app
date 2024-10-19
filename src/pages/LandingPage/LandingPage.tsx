import React from 'react';

import LandingPageHeader from '../../components/Layout/landing-page-header';
import LandingPageServices from '../../components/Layout/landing-page-services';
import LandingPageAbout from '../../components/Layout/landing-page-about';
import LandingPageProjects from '../../components/Layout/landing-page-projects';



const LandingPage = () => {
    return (
        <>
         <LandingPageHeader/>
         <LandingPageAbout/>
         <LandingPageServices/>
         <LandingPageProjects/>
        </>

    );
}

export default LandingPage;
