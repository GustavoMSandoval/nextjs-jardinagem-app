import React from 'react';

import LandingPageAbout from '../../components/layout/landing-page-about'
import LandingPageHeader from '../../components/layout/landing-page-header'
import LandingPageClients from '../../components/layout/landing-page-clients';
import LandingPageCases from '../../components/layout/landing-page-cases';
import LandingPageFooter from '../../components/layout/landing-page-footer';



const LandingPage = () => {
    return (
        <>
         <LandingPageHeader />
         <LandingPageAbout />
         <LandingPageCases/>
         <LandingPageClients/>
         <LandingPageFooter/>
        </>

    );
}

export default LandingPage;
