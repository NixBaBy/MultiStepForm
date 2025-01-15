import { Logo } from "@/components/Logo";
import { Input } from "../components/Input";
import { Continue } from "@/components/Continue";
export const SecondStep = ({
  clickHandler2,
  clickHandler,
  setCurrentStep,
  currentStep,
  formError,
  handleChange,
  formValue,
}) => {
  return (
    <div className="flex w-[480px] h-[655px] p-[32px] flex-col justify-between items-start bg-[#FFF] rounded-[8px]">
      <div className="flex flex-col items-start gap-[12px]">
        <Logo />
        <Input
          label={"Email"}
          placeholder={"Your Email"}
          handleChange={handleChange}
          error={formError.Email}
          name={"Email"}
        />
        <Input
          label={"Phone Number"}
          placeholder={"Your phone"}
          handleChange={handleChange}
          error={formError.phone}
          name={"phone"}
        />
        <Input
          label={"Password"}
          placeholder={"Your Password"}
          handleChange={handleChange}
          error={formError.password}
          name={"password"}
        />
        <Input
          label={"Confirm Password"}
          placeholder={"Your Password"}
          handleChange={handleChange}
          error={formError.confpassword}
          name={"confpassword"}
        />
      </div>
      <Continue
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        clickHandler2={clickHandler2}
        formError={formError}
        clickHandler={clickHandler}
      />
    </div>
  );
};
