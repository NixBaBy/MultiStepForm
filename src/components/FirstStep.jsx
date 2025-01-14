import { Logo } from "@/components/Logo";
import { Input } from "../components/Input";
import { Continue } from "@/components/Continue";
export const FirstStep = ({
  setCurrentStep,
  currentStep,
  handleChange,
  clickHandler,
  formError,
}) => {
  return (
    <div className="flex w-[480px] h-[655px] p-[32px] flex-col justify-between items-start bg-[#FFF] rounded-[8px]">
      <div className="flex flex-col items-start gap-[12px]">
        <Logo />
        <Input
          label={"First Name"}
          placeholder={"Your First Name"}
          handleChange={handleChange}
          error={formError.FirstName}
          name={"FirstName"}
        />
        <Input
          label={"Last Name"}
          placeholder={"Your Last Name"}
          handleChange={handleChange}
          error={formError.LastName}
          name={"LastName"}
        />
        <Input
          label={"User Name"}
          placeholder={"Your User Name"}
          handleChange={handleChange}
          error={formError.UserName}
          name={"UserName"}
        />
      </div>
      <Continue
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        clickHandler={clickHandler}
        formError={formError}
      />
    </div>
  );
};
