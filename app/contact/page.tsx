import React from "react";
import { Metadata } from "next";
import { MetaData } from "@/Interface/constant/metadata";
import Contact from "@/Components/Contact/Contact";
import Footer from '@/Components/Footer/Footer';

// # Contact Metadata
export const metadata: Metadata = MetaData[1];

// # Contact Page
const page = () => {
  return (
    <div>
      <Contact />
      <Footer />
    </div>
  );
};

export default page;
