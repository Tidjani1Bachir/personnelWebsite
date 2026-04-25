"use client"
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

// Also install this npm i --save-dev @types/react-lottie
import Lottie from "react-lottie";

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import GridGlobe from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "../MagicButton";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "Next.js", "TypeScript"];
  const rightLists = ["Tailwind CSS", "Node.js", "MongoDB", "Express"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "bachirtidjani769@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.4] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              fill
              className={cn(imgClassName, "object-cover object-center ")}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              fill
              className="object-cover object-center w-full h-full"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
            </div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {id === 5 ? (
            <div className="relative z-30 mt-1 w-full rounded-2xl border border-white/20 bg-black/60 p-4 md:p-5 shadow-[0_14px_40px_rgba(0,0,0,0.45)] backdrop-blur-md">
              <div className="font-sans text-[10px] md:text-xs text-white/80 leading-relaxed">
                {description}
              </div>
              <div className="mt-2 font-sans text-2xl md:text-3xl lg:text-4xl max-w-4xl font-bold text-white leading-tight drop-shadow-[0_3px_14px_rgba(0,0,0,0.85)]">
                {title}
              </div>
              

              <div className="mt-4 grid grid-cols-1 gap-2 text-sm md:text-base lg:text-lg">
                <p className="text-white/90">
                  <span className="font-semibold text-purple">Frontend:</span>{" "}
                  React, Next.js, TypeScript, Tailwind CSS, Redux Toolkit, RTK Query
                </p>
                <p className="text-white/90">
                  <span className="font-semibold text-purple">Backend:</span>{" "}
                  Node.js, Express.js, REST APIs, JWT Auth, Secure File Uploads
                </p>
                <p className="text-white/90">
                  <span className="font-semibold text-purple">Database:</span>{" "}
                  MongoDB, Turso (SQLite), SQL, PostgreSQL, MySQL, MariaDB
                </p>
                <p className="text-white/90">
                  <span className="font-semibold text-purple">Testing:</span>{" "}
                  Vitest, Playwright, React Testing Library, Postman
                </p>
                <p className="text-white/90">
                  <span className="font-semibold text-purple">Deployment &amp; Tools:</span>{" "}
                  Git/GitHub, Vercel, Render, Cloudinary
                </p>
                <p className="text-white/90">
                  <span className="font-semibold text-purple">OS &amp; Scripting:</span>{" "}
                  Linux (Debian), Bash scripting, WSL, VirtualBox/VMware, Vim, Ollama (local AI)
                </p>
                <p className="text-white/90">
                  <span className="font-semibold text-purple">Architecture:</span>{" "}
                  MVC, Clean Architecture, UML
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="font-sans font-extralight md:max-w-36 md:text-2xl lg:text-4xl tex-blg sm:text-xs text-[#C1C2D3] z-10 lg:text-nowrap">
                {description}
              </div>
              <div
                className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10 leading-tight`}
              >
                {title}
              </div>
            </>
          )}

          {id === 2 && <GridGlobe />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-3 lg:px-2 py-1 px-2 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
              </div>

              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3 rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                <Lottie options={defaultOptions} height={200} width={400} />
              </div>

              <MagicButton
                title={copied ? "Email is Copied!" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};