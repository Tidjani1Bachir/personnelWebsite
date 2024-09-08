/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/

import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import { MdLanguage } from "react-icons/md";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";
import LanguageState from "../LanguageState";
interface LanguageState {
  language: string;
}

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
  language,
  setLanguage
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
  language:string;
  setLanguage:void;
}) => {
  
  return (
    
    <>
      {/* <FloatingDockDesktop items={items} className={desktopClassName} /> */}
      <FloatingDockMobile items={items} className={mobileClassName} language={language} setLanguage={setLanguage} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
  language, setLanguage
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
  language:string;
  setLanguage:void;

}) => {
  const [open, setOpen] = useState(false);
  
  
  

  return (
    <div className={cn("relative block ", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute bottom-full lg:-mb-14 -mb-32 inset-x-0 flex flex-col lg:flex-row   justify-center gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                  className="h-6 w-6 lg:w-7 lg:h-7 rounded-full bg-gray-50 dark:bg-neutral-900 flex items-center justify-center"
                >
                  <button onClick={()=>changelanguage(item.title)}>
                  <div className="h-2 w-2 lg:w-3 lg:h-3">{item.icon}
                    
                    </div>
                  </button>
                  
                  
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className=" rounded-full bg-gray-50 dark:bg-neutral-800 flex items-center justify-center"
      >
        <MdLanguage  className=" text-neutral-500 dark:text-neutral-400" />
      </button>
      <LanguageState language ={language} setLanguage={setLanguage} />
    </div>
  );
};

// const FloatingDockDesktop = ({
//   items,
//   className,
// }: {
//   items: { title: string; icon: React.ReactNode; href: string }[];
//   className?: string;
// }) => {
//   let mouseX = useMotionValue(Infinity);
//   return (
//     <motion.div
//       onMouseMove={(e) => mouseX.set(e.pageX)}
//       onMouseLeave={() => mouseX.set(Infinity)}
//       className={cn(
//         "mx-auto  flex  gap-4 items-end  rounded-2xl bg-gray-50 dark:bg-neutral-900 px-4 ",
//         className
//       )}
//     >
//       {items.map((item) => (
//         <IconContainer mouseX={mouseX} key={item.title} {...item} />
//       ))}
//     </motion.div>
//   );
// };

// function IconContainer({
//   mouseX,
//   title,
//   icon,
//   href,
// }: {
//   mouseX: MotionValue;
//   title: string;
//   icon: React.ReactNode;
//   href: string;
// }) {
//   let ref = useRef<HTMLDivElement>(null);

//   let distance = useTransform(mouseX, (val) => {
//     let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

//     return val - bounds.x - bounds.width / 2;
//   });

//   let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
//   let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

//   let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
//   let heightTransformIcon = useTransform(
//     distance,
//     [-150, 0, 150],
//     [20, 40, 20]
//   );

//   let width = useSpring(widthTransform, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });
//   let height = useSpring(heightTransform, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });

//   let widthIcon = useSpring(widthTransformIcon, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });
//   let heightIcon = useSpring(heightTransformIcon, {
//     mass: 0.1,
//     stiffness: 150,
//     damping: 12,
//   });

//   const [hovered, setHovered] = useState(false);

//   return (
//     <Link href={href}>
//       <motion.div
//         ref={ref}
//         style={{ width, height }}
//         onMouseEnter={() => setHovered(true)}
//         onMouseLeave={() => setHovered(false)}
//         className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800 flex items-center justify-center relative"
//       >
//         <AnimatePresence>
//           {hovered && (
//             <motion.div
//               initial={{ opacity: 0, y: 10, x: "-50%" }}
//               animate={{ opacity: 1, y: 0, x: "-50%" }}
//               exit={{ opacity: 0, y: 2, x: "-50%" }}
//               className="px-2 py-0.5 whitespace-pre rounded-md bg-gray-100 border dark:bg-neutral-800 dark:border-neutral-900 dark:text-white border-gray-200 text-neutral-700 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
//             >
//               {title}
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <motion.div
//           style={{ width: widthIcon, height: heightIcon }}
//           className="flex items-center justify-center"
//         >
//           {icon}
//         </motion.div>
//       </motion.div>
//     </Link>
//   );
// }
