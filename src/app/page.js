"use client";
import Image from "next/image";
import { Logo } from "@/components/Logo";
import { Input } from "../components/Input";
import { Continue } from "@/components/Continue";
import { useState } from "react";
export default function Home() {
  const [inputv, setInputv] = useState();
  const inputHandler = (e) => {
    setInputv(e.target.value);
  };

  return (
    <div className="flex w-[480px] h-[655px] p-[32px] flex-col justify-between items-start bg-[#FFF] rounded-[8px]">
      <div className="flex flex-col items-start gap-[12px]">
        <Logo />
        <Input
          label={"First Name"}
          placeholder={"Your First Name"}
          inputHandler={inputHandler}
        />
        <Input label={"Last Name"} placeholder={"Your Last Name"} />
        <Input label={"User Name"} placeholder={"Your User Name"} />
      </div>
      <Continue />
    </div>
  );
}
