import { Logo } from "@/components/Logo";
import { Input } from "../components/Input";
import { Continue } from "@/components/Continue";
export const ThridStep = ({
  setCurrentStep,
  currentStep,
  clickHandler,
  formError,
  clickHandler3,
  handleChange,
}) => {
  return (
    <div className="flex w-[480px] h-[655px] p-[32px] flex-col justify-between items-start bg-[#FFF] rounded-[8px]">
      <div className="flex flex-col items-start gap-[12px]">
        <Logo />
        <div>
          <p>Date of Birth</p>
          <input
            name="date"
            onChange={handleChange}
            type="date"
            className="w-[392px] h-[20px] border-solid border-[1px] border-[#8B8E95] rounded-md p-[12px] "
          />
          <p className="text-[red]">{formError.date}</p>
        </div>
      </div>
      <Continue
        setCurrentStep={setCurrentStep}
        currentStep={currentStep}
        clickHandler={clickHandler}
        formError={formError}
        clickHandler3={clickHandler3}
      />
    </div>
  );
};
