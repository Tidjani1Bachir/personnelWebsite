"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import admin from "@/public/admin-dashboard---2.png"

export function DisktopApp() {
  return (
    <div className="pt-80 flex flex-col pb-[600px] ">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
            My Best Frontend Application   <br />
              <span style={{color:"rgb(203, 172, 249)"}} className="text-sm font-bold mt-1 leading-none ">
              this is a React admin dashboard application fully mobile responsive and costomieablz you ca choose anu theme color u want and toggle between the dark and the light mode includes ine dashboard 3 pages of orders witch includes pagination system  and customers with is fully editable u can select multiple custumer and delete them and edit each filed individually and employees witch includes a complitly functionnal search and filtering functionnality  and four integrated applications a fully fonctionnal calander and u can change the calander view to be day week month and a genda list, the seconde app is a kanban board  and fully editor to edit text ,and a color picker to choose a spesific color seven fully functionnal charts using the first char is aline chart u can hover over it to get information and area chart u can click over a spesific value to show or hide it from the graph thir c lassif pie chart fourth bar chart fifth costum financial chart sixth color-mapping chart seventh the pyramid chart users also can colobs the side bar to view the content and we will creat costum widget like the shopping cart the chat notifications and a user profile all this using syncfusion ui components for building all mobile web and disktop apllications
              </span>
            </h1>
          </>
        }
      >
        <Image
          src={admin}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
