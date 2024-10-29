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
         <div id="sobre"><LandingPageAbout/></div>
         <div id="serviços"><LandingPageServices/></div>
         <div id="projetos"><LandingPageProjects/></div>
         <div id="terceirização"><LandingPageTerceirizacao/></div>
         <LandingPageClients/>
        </>

    );
}

export default LandingPage;
