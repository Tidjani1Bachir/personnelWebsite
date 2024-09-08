import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  
  IconBrandX,
  IconExchange,
  IconHome,
  
  IconTerminal2,
} from "@tabler/icons-react";
import { RiEnglishInput } from "react-icons/ri";
import Image from "next/image";


export function DisplayLanguages({language,setLanguage}) {
  const links = [
    

    
    
    {
      title: "Francais",
      icon: (
        <Image
          src="/FrenchFlag.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "English",
      icon: (
        <Image
          src="/AmericanFlag.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    {
      title: "Arabic",
      icon: (
        <Image
          src="/SaudiFlag.png"
          width={20}
          height={20}
          alt="Aceternity Logo"
        />
      ),
      href: "#",
    },
    

    
    
  ];
  return (
    <div className="flex absolute lg:-top-20 -top-36  sm:-right-2 z-50 ">
      
      <FloatingDock
        mobileClassName="translate-y-20" // only for demo, remove for production
        items={links}
        language={language}
        
  setLanguage={setLanguage}






          

      />
      
      
    </div>
  );
}
