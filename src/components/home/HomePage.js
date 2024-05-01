"use client";
import React from "react";
import Landing from "./Landing";
import CreateAmazingCTA from "./CreateAmazingCTA";
import ItemPFS from "../portfolio/ItemPFS";
import ItemExp from "../experience/ItemExp";
import Contact from "../about/Contact";
import { useDevice } from "../../../helpers/useDevice";
import Footer from "@/commonComponents/Footer";

export default function HomePage() {
  const { IsMob } = useDevice();
  return (
    <>
      <Landing />
      <div className="container">
        <div
          className="row"
          style={{ flexDirection: IsMob ? "column-reverse" : "" }}
        >
          <div className="col-md-4  mt-4">
            <ItemPFS />
          </div>
          <div className="col-md-4 mt-4">
            <ItemExp />
          </div>
          <div className="col-md-4 mt-4">
            <Contact />
          </div>
        </div>
      </div>
      <CreateAmazingCTA />
      <Footer />
    </>
  );
}
