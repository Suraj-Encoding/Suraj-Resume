"use client";

import React, { useState, useCallback, useEffect } from "react";
import { useResizeObserver } from "@wojtekmaj/react-hooks";
import { pdfjs, Document, Page } from "react-pdf";
import type { PDFDocumentProxy } from "pdfjs-dist";
import { Data } from '@/Interface/constant/data';
import Tooltip from '../Tooltip/Tooltip';
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import Link from "next/link";
import Image from "next/image";
import FileSaver from "file-saver";
import "./Viewer.css";
import Profile from "@/public/Profile.png";
import SittingMan from "@/public/SittingMan.svg";
import Dog from "@/public/Dog.gif"

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const options = {
  cMapUrl: "/cmaps/",
  standardFontDataUrl: "/standard_fonts/",
};

const resizeObserverOptions = {};

const maxWidth = 900;

const fileURL = `./Resume.pdf`;

const fileName = "Suraj_Resume.pdf";

type PDFFile = string | File | null;

// # Resume Component
const Resume = () => {
  const [file] = useState<PDFFile>(fileURL);
  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;
    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

  // # Tooltip Bug Logic
  const [toolTip, setToolTip] = useState(false);
  const delay = 500;
  useEffect(() => {
    setToolTip(false);
    setTimeout(() => {
      setToolTip(true);
    }, delay);
  }, []);

  const [visibleMan, setVisibleMan] = useState(false);
  function onDocumentLoadSuccess({
    numPages: nextNumPages,
  }: PDFDocumentProxy): void {
    setNumPages(nextNumPages);
    setVisibleMan(true);
  }
  const handleDownloadPDF = () => {
    FileSaver.saveAs(fileURL, fileName);
  };

  return (
    <div className="Example">
      <div className="head">
        <Link href="/">
          <h1
            className="logo flex flex-row font-bold"
            style={{ fontFamily: "Brush Script MT, cursive" }}
          >
            <Image
              className="profile"
              src={Profile}
              alt="Profile"
            />
            <span className="name" > {Data.name} </span>
          </h1>
        </Link>

        <div className="btnContainer">
          <button
            data-tip
            data-for="download"
            className="Btn"
            onClick={handleDownloadPDF}>
            <svg
              className="svgIcon"
              viewBox="0 0 384 512"
              height="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
            </svg>
            <span className="icon2"></span>
          </button>

          {/* # Download Tooltip */}
          {toolTip && (
            <Tooltip rank={1} id="download" place="left" offset={{ left: 5 }} text="Download Resume" />
          )}

          <Link href="/contact">
            <button
              data-tip
              data-for="contact"
              className="contactBtn"
            >
              <span className="button_top"> Contact </span>
            </button>
          </Link>

          {/* # Contact Tooltip */}
          {toolTip && (
            <Tooltip rank={1} id="contact" place="bottom" offset={{ bottom: 5 }} text='Contact Form' />
          )}

        </div>
      </div>
      <div className="Example__container">
        <div
          className="Example__container__document"
          ref={setContainerRef}
          style={{ position: "relative" }}
        >
          {visibleMan && (
            <>
              <Image
                id="man"
                src={SittingMan}
                width={300}
                height={300}
                alt="SittingMan"
                className="manSvg"
                priority
              />
              <Image
                id="reverse-gif"
                src={Dog}
                style={{ width: "170px", height: "auto" }}
                alt="Dog"
                className="dog reverse"
              />
            </>
          )}

          <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
          >
            {Array.from(new Array(numPages), (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                width={
                  containerWidth ? Math.min(containerWidth, maxWidth) : maxWidth
                }
              />
            ))}
          </Document>
        </div>
      </div>
    </div>
  );
}

export default Resume;
