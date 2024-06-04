"use client";

import React from "react";
import BG from "@/Components/BG/BG";
import Resume from '@/Components/Resume/Resume';
import Footer from '@/Components/Footer/Footer';

// # Resume Page - Entry Point
const page = () => {
  return (
    <>
      <BG />
      <Resume />
      <Footer />
    </>
  );
};

export default page;
