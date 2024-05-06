"use client";
import React from "react";
import CreateAmazingCTA from "./CreateAmazingCTA";
import { useDevice } from "../../../helpers/useDevice";
import Footer from "@/commonComponents/Footer";
import Intro from "./Intro";
import PortfolioGallery from "./PortfolioGallery";

export default function HomePage() {
  const { IsMob } = useDevice();
  return (
    <>
      <Intro />
      <PortfolioGallery />
      <CreateAmazingCTA />
      <Footer />
    </>
  );
}
