import React from 'react';

import LandingPageHeader from '../../components/Layout/landing-page-header';
import LandingPageServices from '../../components/Layout/landing-page-services';
import LandingPageAbout from '../../components/Layout/landing-page-about';
import LandingPageProjects from '../../components/Layout/landing-page-projects';
import LandingPageTerceirizacao from '../../components/Layout/landing-page-terceirizacao';
import LandingPageClients from '../../components/Layout/landing-page-clients';



const LandingPage = () => {
    return (
        <>
         <LandingPageHeader/>
         <LandingPageAbout/>
         <LandingPageServices/>
         <LandingPageProjects/>
         <LandingPageTerceirizacao/>
         <LandingPageClients/>
        </>

    );
}

export default LandingPage;
