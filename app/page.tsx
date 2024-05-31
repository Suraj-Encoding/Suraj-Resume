"use client";

import React from "react";
import BG from "@/Components/BG/BG";
import Viewer from "@/Components/Viewer/Viewer";
import Footer from '@/Components/Footer/Footer';

// # Resume Page - Entry Point
const page = () => {
  return (
    <>
      <BG />
      <Viewer />
      <Footer />
    </>
  );
};

export default page;
