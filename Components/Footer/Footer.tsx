"use client";

import React from 'react';
import { Data } from '@/Interface/constant/data';

const data = Data[0];

//  # Footer Component
const Footer = () => {
  return (
    <div className="flex font-[600] justify-center gap-1 text-[16px] py-3 lg:pb-6 text-gray-500">
      <span> Copyright </span>
      <span className="text-[18px]" > &copy; </span>
      <span> {new Date().getFullYear()} {data.author} </span>
    </div >
  );
};

export default Footer;
