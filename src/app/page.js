"use client";
import Image from "next/image";

import { useState } from "react";
import { FirstStep } from "@/components/FirstStep";
import { SecondStep } from "../components/SecondStep";
import { ThridStep } from "@/components/ThirdStep";
export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const Allsteps = [FirstStep, SecondStep, ThridStep][currentStep];
  const [formValue, setFormValue] = useState({
    FirstName: "",
    LastName: "",
    UserName: "",
    Email: "",
    phone: "",
    password: "",
    confpassword: "",
  });
  const [formError, setFormError] = useState({
    FirstName: "",
    LastName: "",
    UserName: "",
    Email: "",
    phone: "",
    password: "",
    confpassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
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
  return (
    <div>
      <Allsteps
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        handleChange={handleChange}
        clickHandler={clickHandler}
        formError={formError}
      />
    </div>
  );
}
