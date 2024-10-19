import React from 'react';

import LandingPageHeader from '../../components/Layout/landing-page-header';
import LandingPageServices from '../../components/Layout/landing-page-services';
import LandingPageAbout from '../../components/Layout/landing-page-about';



const LandingPage = () => {
    return (
        <>
         <LandingPageHeader/>
         <LandingPageAbout/>
         <LandingPageServices/>
        </>

    );
}

export default LandingPage;
