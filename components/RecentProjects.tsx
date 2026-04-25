"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const RecentProjects = () => {
  return ( 
    <div id="projects" className="py-20">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple"> my recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-4 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[37rem] h-[29rem] flex items-center mt-7 justify-center sm:w-96 w-[80vw]"
            key={item.id}
          >
            {/* The main link for the project card */}
            <PinContainer
              title="click"
              href={item.link}
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <Image
                    src="/bg.png"
                    alt="bgimg"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 80vw, 24rem"
                  />
                </div>
                <Image
                  src={item.img}
                  alt="cover"
                  fill
                  className="z-10 absolute bottom-0 object-cover"
                  sizes="(max-width: 640px) 80vw, 24rem"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm lg:mb-3"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-5">
                {/* Primary Link: click to view Site */}
                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    click to view Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>

                    {/* Conditional rendering for the Product Manager Desktop App (ID: 2) */}
                    {/* {item.id === 2 && (
                      <a 
                        href="https://github.com/Tidjani1Bachir/product_manager/releases/download/v2.0-desktop/product-manager_0.1.0_x64-setup.exe" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="z-50 px-3 py-2 rounded-lg bg-purple text-white text-xs font-medium hover:bg-opacity-80 transition-all flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()} // Crucial: stops the click from triggering the main Link
                      >
                        Download Desktop (.exe)
                      </a>
                    )} */}
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;