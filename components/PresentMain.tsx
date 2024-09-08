"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import { products2 } from "@/data";
export function PresentMain() {
  return <HeroParallax products2={products2} />;
}

