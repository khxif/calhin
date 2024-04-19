import { AboutGlobe } from "@/components/about-globe";
import { Products } from "@/components/products";
import WhatWeDo from "@/components/sections/what-we-do";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calhin"
};

export default function AboutPage() {
  return (
    <>
      <AboutGlobe />
      <WhatWeDo />
      <Products />
    </>
  );
}
