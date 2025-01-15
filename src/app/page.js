"use client";
import Image from "next/image";

import { useState } from "react";
import { FirstStep } from "@/components/FirstStep";
import { SecondStep } from "../components/SecondStep";
import { ThridStep } from "@/components/ThirdStep";
import { FourtStep } from "@/components/FourtStep";
export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const Allsteps = [FirstStep, SecondStep, ThridStep, FourtStep][currentStep];
  const [formValue, setFormValue] = useState({
    FirstName: "",
    LastName: "",
    UserName: "",
    Email: "",
    phone: "",
    password: "",
    confpassword: "",
    date: "",
  });
  const [formError, setFormError] = useState({
    FirstName: "",
    LastName: "",
    UserName: "",
    Email: "",
    phone: "",
    password: "",
    confpassword: "",
    date: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormError((prev) => ({ ...prev, [name]: "" }));
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };
  const clickHandler = () => {
    let errorHave = false;
    const { FirstName, LastName, UserName } = formValue;
    if (!FirstName.trim()) {
      setFormError((prev) => ({
        ...prev,
        FirstName: "Please enter your first name",
      }));
      errorHave = true;
    }
    if (!LastName.trim()) {
      setFormError((prev) => ({
        ...prev,
        LastName: "Please enter your last name",
      }));
      errorHave = true;
    }
    if (!UserName.trim()) {
      setFormError((prev) => ({
        ...prev,
        UserName: "Please enter your user name",
      }));
      errorHave = true;
    }
    if (!errorHave) {
      setCurrentStep(currentStep + 1);
    }
  };
  const clickHandler2 = () => {
    const { Email, confpassword, password, phone } = formValue;
    let errorHave = false;
    if (!Email.trim()) {
      setFormError((prev) => ({
        ...prev,
        Email: "PLease enter your email",
      }));
      errorHave = true;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValue.Email)) {
      setFormError((prev) => ({
        ...prev,
        Email: "PLease provide a valid email adress",
      }));
      errorHave = true;
    }
    if (!password.trim()) {
      setFormError((prev) => ({
        ...prev,
        password: "please enter your password",
      }));
      errorHave = true;
    } else if (password.length < 6) {
      setFormError((prev) => ({
        ...prev,
        password: "6orontoi too oruulna uu",
      }));
      errorHave = true;
    }
    if (!confpassword.trim()) {
      setFormError((prev) => ({
        ...prev,
        confpassword: "Please enter your confirmpassword",
      }));
      errorHave = true;
    } else if (password !== confpassword) {
      setFormError((prev) => ({
        ...prev,
        confpassword: "tanii oruulsan nuuts ug taarahgui bn",
      }));
      errorHave = true;
    }
    if (!phone.trim()) {
      setFormError((prev) => ({
        ...prev,
        phone: "Please enter your phone",
      }));
      errorHave = true;
    } else if (!/^\+?\d{8}$/.test(formValue.phone)) {
      setFormError((prev) => ({
        ...prev,
        phone: "please enter a valid phone number",
      }));
      errorHave = true;
    }
    if (!errorHave) {
      setCurrentStep(currentStep + 1);
    }
  };
  const clickHandler3 = () => {
    let errorHave = false;
    const { date } = formValue;
    console.log(date);
    if (!date.trim()) {
      setFormError((prev) => ({
        ...prev,
        date: "Please enter your date",
      }));
      errorHave = true;
    }
    if (!errorHave) {
      setCurrentStep(currentStep + 1);
    }
  };
  return (
    <div>
      <Allsteps
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        handleChange={handleChange}
        clickHandler={clickHandler}
        clickHandler2={clickHandler2}
        formError={formError}
        clickHandler3={clickHandler3}
        formValue={formValue}
        setFormError={setFormError}
      />
    </div>
  );
}
