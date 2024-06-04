"use client";

import React from "react";
import Image from "next/image";
import "./Man.css";
import SittingMan from "@/public/SittingMan.svg";
import Dog from "@/public/Dog.gif"

// # Man Component
const Man = () => {
    return (
        <div>
            <Image
                id="man"
                src={SittingMan}
                width={300}
                height={300}
                alt="Man"
                className="man"
                priority
            />
            <Image
                id="dog"
                src={Dog}
                width={170}
                height={170}
                alt="Dog"
                className="dog"
            />
        </div>
    );
}

export default Man;
