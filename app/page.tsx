"use client";
import React ,{useState} from "react";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";

import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";

import { FloatingNav } from "@/components/ui/FloatingNavbar";
import {PresentMain} from "@/components/PresentMain";



// import {PresentBestProject} from "@/components/PresentBestProject";

const Home = () => {
  
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
