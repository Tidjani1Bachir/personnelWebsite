"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";

export function PresentMobile() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed  text-center mx-auto  "
      >
        I can also{" "}
        <Highlight className="text-black dark:text-white ">
         convert your app design into either a scalable React Native or optimized native Android app
        </Highlight>

        
      </motion.h1>

      {/* 
      

            <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed  text-center mx-auto  "
      >
        يمكنني أيضًا{" "}
        <Highlight className="text-black dark:text-white ">
          تحويل تصميم التطبيق الخاص بك إلى تطبيق React Native قابل للتطوير أو تطبيق Android أصلي محسّن
        </Highlight>

        
      </motion.h1>
      */}

      {/* 
      

            <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed  text-center mx-auto  "
      >
        Je peux également{" "}
        <Highlight className="text-black dark:text-white ">
          convertir la conception de votre application en une application React Native évolutive ou en une application Android native optimisée
        </Highlight>

        
      </motion.h1>
      */}
    </HeroHighlight>
  );
}
