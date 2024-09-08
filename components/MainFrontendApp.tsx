"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export function MainFrontendApp() {
  const tabs = [
    {
      title: "Product",
      value: "product",
      content: (
        <div className="w-screen relative h-screen rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="-mt-40 p-9 ">Random tab</p>
          <Image
      src="/adminDashboardFrontendApp1.png"
      alt="dummy image"
      width={1000}
      height={3000}
      className="object-cover object-left-top  absolute  inset-x-0  rounded-xl mx-auto right-1/3"
    />
        </div>
      ),
    },
    {
      title: "Services",
      value: "services",
      content: (
        <div className="w-screen  relative h-screen rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="-mt-40 p-9 ">Random tab</p>
          <Image
      src="/adminDashboardFrontendApp1.png"
      alt="dummy image"
      width={1000}
      height={3000}
      className="object-cover object-left-top  absolute  inset-x-0  rounded-xl mx-auto right-1/3"
    />
        </div>
      ),
    },
    {
      title: "Playground",
      value: "playground",
      content: (
        <div className="w-screen  relative h-screen rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="-mt-40 p-9 ">Random tab</p>
          <Image
      src="/adminDashboardFrontendApp1.png"
      alt="dummy image"
      width={1000}
      height={3000}
      className="object-cover object-left-top  absolute  inset-x-0  rounded-xl mx-auto right-1/3"
    />
        </div>
      ),
    },
    {
      title: "Content",
      value: "content",
      content: (
        <div className="w-screen  relative h-screen rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="-mt-40 p-9 ">Random tab</p>
          <Image
      src="/adminDashboardFrontendApp1.png"
      alt="dummy image"
      width={1000}
      height={3000}
      className="object-cover object-left-top  absolute  inset-x-0  rounded-xl mx-auto right-1/3"
    />
        </div>
      ),
    },
    {
      title: "Random",
      value: "random",
      content: (
        <div className="w-screen  relative h-screen rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="-mt-40 p-9 ">Random tab</p>
          <Image
      src="/adminDashboardFrontendApp1.png"
      alt="dummy image"
      width={1000}
      height={3000}
      className="object-cover object-left-top  absolute  inset-x-0  rounded-xl mx-auto right-1/3"
    />
        </div>
      ),
    },
  ];

  return (
    <div className="h-screen relative b flex flex-col  mx-auto w-screen  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}


