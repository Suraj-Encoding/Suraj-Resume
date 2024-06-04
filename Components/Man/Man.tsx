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
                id="Man"
                src={SittingMan}
                style={{ width: "300px", height: "auto" }}
                alt="Man"
                className="Man"
                priority
            />
            <Image
                id="Dog"
                src={Dog}
                style={{ width: "170px", height: "auto" }}
                alt="Dog"
                className="Dog"
                priority
            />
        </div>
    );
}

export default Man;
