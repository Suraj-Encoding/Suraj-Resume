import React from "react";
import { MetaData } from "@/Interface/constant/metadata";
import Contact from "@/Components/Contact/Contact";
import Man from '@/Components/Man/Man';
import Footer from '@/Components/Footer/Footer';

// # Contact Metadata
export const metadata = MetaData[1];

// # Contact Page
const page = () => {
  return (
    <div>
      <Contact />
      <Man />
      <Footer />
    </div>
  );
};

export default page;
