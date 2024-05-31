"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { toast } from "react-toastify";
import { Data } from '@/Interface/constant/data';
import { Toast } from '@/Interface/types/toast';
import { ToolTip } from '@/Interface/types/tooltip';
import Tooltip from '../Tooltip/Tooltip';
import createTooltip from '../Tooltip/createTooltip';
import emailjs from "@emailjs/browser";
import Image from "next/image";
import BG from "../BG/BG";
// import "./Contact.css";
// import "../Viewer/Viewer.css";
import Profile from "@/public/Profile.png";


// # Contact Component
const Contact = () => {

  // # Current System Date In DD-MM-YYYY Format
  const getTodayDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const dd = String(today.getDate()).padStart(2, '0');
    const date = `${dd}-${mm}-${yyyy}`;
    return date;
  };

  // # Form Data
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    date: getTodayDate(),
    email: '',
    phone: '',
    city: '',
    country: '',
    subject: '',
    message: '',
    feedback: ''
  });

  // # Border Style Object
  const borderStyle = {
    borderLeft: "6px solid #059669"
  };

  // # Reset Form Data
  const resetFormData = () => {
    setFormData({
      fname: '',
      lname: '',
      date: getTodayDate(),
      email: '',
      phone: '',
      city: '',
      country: '',
      subject: '',
      message: '',
      feedback: ''
    });
  }

  // # Handle Input Change
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // # Toast Modification Objects
  const errorToast: Toast = {
    className: "font-bold",
    style: { color: "#eab308" },
    theme: "dark"
  };
  const successToast: Toast = {
    className: "font-bold",
    style: { color: "#f9fafb" },
    theme: "dark"
  };
  const infoToast: Toast = {
    className: "font-bold",
    style: { color: "#14b8a6" },
    theme: "dark"
  };

  // # Send Email
  const form: any = useRef();
  const [send, setSend] = useState(false);
  const sendEmail = (e: any) => {
    // # Prevent Default Form Submission
    e.preventDefault();

    // # Focus the first empty input field
    for (let { ref, name } of refs) {
      if (formData[name as keyof typeof formData] === '') {
        ref.current?.focus();
        return;
      }
    }

    // # Send Form
    if (send) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          form.current,
          process.env.NEXT_PUBLIC_USER_ID!
        )
        .then(
          (result: any) => {
            if (result.status === 200) {
              toast.success("Message Sent Successfully !", successToast);
              setTimeout(() => {
                toast.info("Thank you for contacting me. I'll get back to you soon.", infoToast);
              }, 5000);
              form.current.reset();
              resetFormData();
              setSend(false);  // # Reset Send State
            }
          },
          () => {
            toast.error("Something Went Wrong !", errorToast);
          }
        );
    }
  };

  // # Router
  const router = useRouter();

  // # Reset Form
  const resetForm = () => {
    form.current.reset();
    resetFormData();
    setSend(false);  // # Reset Send State
    toast.error("Form Reset Successfully !", errorToast);
  };

  // # Form Input References
  const fnameInputRef: any = useRef();
  const lnameInputRef: any = useRef();
  const dateInputRef: any = useRef();
  const emailInputRef: any = useRef();
  const phoneInputRef: any = useRef();
  const cityInputRef: any = useRef();
  const countryInputRef: any = useRef();
  const subjectInputRef: any = useRef();
  const messageInputRef: any = useRef();
  const feedbackInputRef: any = useRef();

  // # Form Input References Array
  const refs = [
    { ref: fnameInputRef, name: 'fname' },
    { ref: lnameInputRef, name: 'lname' },
    { ref: emailInputRef, name: 'email' },
    { ref: phoneInputRef, name: 'phone' },
    { ref: cityInputRef, name: 'city' },
    { ref: countryInputRef, name: 'country' },
    { ref: subjectInputRef, name: 'subject' },
    { ref: messageInputRef, name: 'message' },
    { ref: feedbackInputRef, name: 'feedback' }
  ];

  // # Focus Form Input
  const focusInput = () => {
    const input = form.current;
    let count = 0;
    if (input.fname.value == "") {
      count++;
    }
    if (input.lname.value == "") {
      count++;
    }
    if (input.email.value == "") {
      count++;
    }
    if (input.phone.value == "") {
      count++;
    }
    if (input.city.value == "") {
      count++;
    }
    if (input.country.value == "") {
      count++;
    }
    if (input.subject.value == "") {
      count++;
    }
    if (input.message.value == "") {
      count++;
    }
    if (input.feedback.value == "") {
      count++;
    }
    if (count == 0) {
      setSend(true); // # Set Send State
    }
    else if (count == 9) {
      toast.info("Please Fill Up The Form First !", infoToast);
    }
    else if (count > 1 && count < 9) {
      toast.info("Please Fill Up All The Details !", infoToast);
    }
    else {
      if (input.fname.value == "") {
        fnameInputRef.current.focus();
        toast.info("Please Tell Me Your Good Name !", infoToast);
      }
      if (input.lname.value == "") {
        lnameInputRef.current.focus();
        toast.info("Please Enter Your Surname !", infoToast);
      }
      if (input.email.value == "") {
        emailInputRef.current.focus();
        toast.info("Please Give Your Email !", infoToast);
      }
      if (input.phone.value == "") {
        phoneInputRef.current.focus();
        toast.info("Please Give Your Phone Number !", infoToast);
      }
      if (input.city.value == "") {
        cityInputRef.current.focus();
        toast.info("Please Mention Your City !", infoToast);
      }
      if (input.country.value == "") {
        countryInputRef.current.focus();
        toast.info("Please Mention Your Country !", infoToast);
      }
      if (input.subject.value == "") {
        subjectInputRef.current.focus();
        toast.info("Su !", infoToast);
      }
      if (input.message.value == "") {
        messageInputRef.current.focus();
        toast.info("Please Write Some Message !", infoToast);
      }
      if (input.feedback.value == "") {
        feedbackInputRef.current.focus();
        toast.info("Please Give Your Valuable Feedback OR Suggestion !", infoToast);
      }
    }
  };

  // # Tooltips Data
  const TooltipsData: ToolTip[] = [
    { id: "fname", place: "left", offset: { left: 5 }, text: "First Name", show: formData.fname === "" },
    { id: "lname", place: "right", offset: { right: 5 }, text: "Last Name", show: formData.lname === "" },
    { id: "email", place: "right", offset: { right: 5 }, text: "Email", show: formData.email === "" },
    { id: "phone", place: "left", offset: { left: 5 }, text: "Phone Number", show: formData.phone === "" },
    { id: "date", place: "right", offset: { right: 5 }, text: "System Date", rank: 3, show: true },
    { id: "city", place: "left", offset: { left: 5 }, text: "City", show: formData.city === "" },
    { id: "country", place: "right", offset: { right: 5 }, text: "Country", show: formData.country === "" },
    { id: "subject", place: "right", offset: { right: 5 }, text: "Subject", show: formData.subject === "" },
    { id: "message", place: "right", offset: { right: 5 }, text: "Message", show: formData.message === "" },
    { id: "feedback", place: "right", offset: { right: 5 }, text: "Feedback", show: formData.feedback === "" },
    { id: "send", place: "left", offset: { left: 5, top: 2 }, text: "Submit Form", rank: 2, show: true },
    { id: "reset", place: "right", offset: { right: 5, top: 2 }, text: "Reset Form", rank: 2, show: true }
  ];

  // # Tooltip Components
  const TooltipComponents = TooltipsData.map(createTooltip);

  // # Tooltip Bug Logic
  const [toolTip, setToolTip] = useState(false);
  const delay = 500;
  useEffect(() => {
    setToolTip(false);
    setTimeout(() => {
      setToolTip(true);
    }, delay);
  }, []);

  return (
    <div className="containerContact" >
      <BG />
      <div className="head">
        <h1
          className="logo ml-4 mt-3 text-[35px] flex flex-row font-bold"
          style={{ fontFamily: "Brush Script MT, cursive" }}
          onClick={() => router.push('/')}
        >
          <Image
            src={Profile}
            width={70}
            height={40}
            alt="Profile"
          />
          <span className="my-1 mr-2" > {Data[0].name} </span>
        </h1>

        <div className="btnContainer">
          <button
            data-tip
            data-for="resume"
            className="contactBtn"
            onClick={() => router.push('/')}
          >
            <span className="button_top"> Resume </span>
          </button>
        </div>
      </div>

      {/* # Resume Tooltip */}
      {toolTip && (
        <Tooltip rank={1} id="resume" place="bottom" offset={{ bottom: 5 }} text='Resume Page' />
      )}

      {/* # Tooltips */}
      {toolTip && (
        <> {TooltipComponents} </>
      )}

      {/* # Form */}
      <div className="formPage">
        <div className="form-container glass">
          <form className="form" ref={form} onSubmit={sendEmail}>
            <span className="heading">Get In Touch</span>
            <div className="flex gap-3 flex-row">
              <input
                data-tip
                data-for="fname"
                className="input"
                placeholder="First Name"
                id="fname"
                type="text"
                name="fname"
                defaultValue={""}
                value={formData.fname}
                onChange={handleInputChange}
                ref={fnameInputRef}
                style={formData.fname !== "" ? borderStyle : {}}
              />
              <input
                data-tip
                data-for="lname"
                className="input"
                placeholder="Last Name"
                id="lname"
                type="text"
                name="lname"
                defaultValue={""}
                value={formData.lname}
                onChange={handleInputChange}
                ref={lnameInputRef}
                style={formData.lname !== "" ? borderStyle : {}}
              />
            </div>
            <input
              data-tip
              data-for="email"
              className="input"
              placeholder="Email"
              id="email"
              type="email"
              name="email"
              defaultValue={""}
              value={formData.email}
              onChange={handleInputChange}
              ref={emailInputRef}
              style={formData.email !== "" ? borderStyle : {}}
            />
            <div className="flex gap-3 flex-row">
              <input
                data-tip
                data-for="phone"
                className="input"
                placeholder="Phone Number"
                id="phone"
                type="text"
                name="phone"
                defaultValue={""}
                value={formData.phone}
                onChange={handleInputChange}
                ref={phoneInputRef}
                style={formData.phone !== "" ? borderStyle : {}}
              />
              <input
                data-tip
                data-for="date"
                className="input"
                placeholder="Date"
                id="date"
                type="text"
                name="date"
                defaultValue={getTodayDate()}
                value={getTodayDate()}
                onChange={handleInputChange}
                ref={dateInputRef}
                style={getTodayDate() !== "" ? borderStyle : {}}
              />
            </div>
            <div className="flex gap-3 flex-row">
              <input
                data-tip
                data-for="city"
                className="input"
                placeholder="City"
                id="city"
                type="text"
                name="city"
                defaultValue={""}
                value={formData.city}
                onChange={handleInputChange}
                ref={cityInputRef}
                style={formData.city !== "" ? borderStyle : {}}
              />
              <input
                data-tip
                data-for="country"
                className="input"
                placeholder="Country"
                id="country"
                type="text"
                name="country"
                defaultValue={""}
                value={formData.country}
                onChange={handleInputChange}
                ref={countryInputRef}
                style={formData.country !== "" ? borderStyle : {}}
              />
            </div>
            <input
              data-tip
              data-for="subject"
              className="input"
              placeholder="Subject"
              id="subject"
              type="text"
              name="subject"
              defaultValue={""}
              value={formData.subject}
              onChange={handleInputChange}
              ref={subjectInputRef}
              style={formData.subject !== "" ? borderStyle : {}}
            />
            <textarea
              data-tip
              data-for="message"
              className="textarea"
              placeholder="Message"
              rows={4}
              cols={5}
              id="message"
              name="message"
              defaultValue={""}
              value={formData.message}
              onChange={handleInputChange}
              ref={messageInputRef}
              style={formData.message !== "" ? borderStyle : {}}
            />
            <textarea
              data-tip
              data-for="feedback"
              className="textarea"
              placeholder="Feedback"
              rows={2}
              cols={5}
              id="feedback"
              name="feedback"
              defaultValue={""}
              value={formData.feedback}
              onChange={handleInputChange}
              ref={feedbackInputRef}
              style={formData.feedback !== "" ? borderStyle : {}}
            />
            <div className="button-container">
              <>
                <button
                  data-tip
                  data-for="send"
                  onClick={() => focusInput()}
                  className="send-button rounded-full" type="submit">
                  Send
                </button>

              </>
              <div className="reset-button-container">
                <div
                  data-tip
                  data-for="reset"
                  id="reset-btn"
                  className="reset-button cursor-pointer rounded-full"
                  onClick={resetForm}
                >
                  Reset
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
};

export default Contact;
