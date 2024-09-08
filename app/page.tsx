"use client";
import React ,{useState} from "react";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import {DisktopApp} from "@/components/DisktopApp";
import {PresentMobile} from "@/components/PresentMobile";
import UisShowCases from "@/components/UisShowCases";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import {PresentMain} from "@/components/PresentMain";
import {MobileAppsShowCase} from "@/components/MobileAppsShowCase";
import {MobileAppsShowCase2} from "@/components/MobileAppsShowCase2";
import {MainFrontendApp} from "@/components/MainFrontendApp";
import ChangeLanguage from "@/components/ChangeLanguage";


// import {PresentBestProject} from "@/components/PresentBestProject";

const Home = () => {
  const [language, setLanguage] = useState( 'english' )
  
  const changelanguage =(item:string) => {
    // ()=>setLanguage(item.title)
    setLanguage(item)
    console.log(item);
  }
  return (
    <div className="relative w-full">
       
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
    
      <div className="max-w-7xl w-full relative">
        <FloatingNav navItems={navItems} />
        {/* <ChangeLanguage language={language} setLanguage={setLanguage}/> */}
        
        
        <Hero />
        <Grid />  
        <PresentMain/> 
        <RecentProjects />
      {/* <UisShowCases/> */}
      {/* <DisktopApp/> */}
      {/* <PresentBestProject/> */}
      {/* <PresentMobile/> */}
      {/* <MobileAppsShowCase/> */}
      {/* <MobileAppsShowCase2/> */}
    {/* <MainFrontendApp/> */}
        {/* <Clients /> */}
        <Experience />
        <Approach />
        <Footer />
      </div>
    </main>
    </div>
  );
};

export default Home;
