// // "use client"
// // import React ,{ useState, useEffect ,useRef} from 'react';
// // import { MdLanguage } from "react-icons/md";
// // import { DisplayLanguages } from "./DisplayLanguages";


// // const ChangeLanguage = ({language,setLanguage}) => {
// //   const [showButton, setShowButton] = useState(false);
// //   const [ShowLangugaes, setShowLangugaes] = useState(false);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       if (window.innerWidth >= 768) { // Adjust the breakpoint as needed
// //         setShowButton(true);
// //       } else {
// //         setShowButton(false);
// //       }
// //     };

// //     handleResize(); // Initial check
// //     window.addEventListener('resize', handleResize);

// //     return () => {
// //       window.removeEventListener('resize', handleResize);   

// //     };
// //   }, []);
// //   return (
// //     <div className="absolute lg:text-2xl text-xl top-20  right-1 z-50">
    
// //       <DisplayLanguages language= {language} setLanguage={setLanguage}/>
    
// //     </div>

   
    
    
    
// //   );
  
// // };

// // export default ChangeLanguage;
