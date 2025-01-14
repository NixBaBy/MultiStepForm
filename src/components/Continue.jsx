export const Continue = ({
  setCurrentStep,
  currentStep,
  clickHandler,
  formError,
}) => {
  return (
    <div>
      {currentStep == "0" ? (
        <div className="px-[10px] py-[12px] rounded-[6px] bg-[#121316] w-[392px] flex justify-center items-center gap-[4px]  ">
          <button className="flex gap-[4px]" onClick={clickHandler}>
            <p className="text-[white] text-[16px] tracking-[-0.16px] ">
              Continue 1/3
            </p>
            <img src="./arrow.svg" alt="" />
          </button>
        </div>
      ) : (
        ""
      )}
      {currentStep == "1" ? (
        <div className="flex gap-[8px]">
          <button
            className="w-[128px] py-[10px] px-[12px] rounded-[6px] border-[1px] border-[#CBD5E1] border-solid bg-white"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Back
          </button>
          <button
            className="w-[256px] py-[10px] px-[12px] rounded-[6px] border-[1px] border-[#CBD5E1] border-solid bg-[#121316] text-white flex justify-center align-center gap-[4px]"
            onClick={clickHandler}
          >
            continue 2/3
            <img src="./arrow.svg" alt="" />
          </button>
        </div>
      ) : (
        ""
      )}
      {currentStep == "2" ? (
        <div className="flex gap-[8px]">
          <button
            className="w-[128px] py-[10px] px-[12px] rounded-[6px] border-[1px] border-[#CBD5E1] border-solid bg-white"
            onClick={() => setCurrentStep(currentStep - 1)}
          >
            Back
          </button>
          <button className="w-[256px] py-[10px] px-[12px] rounded-[6px] border-[1px] border-[#CBD5E1] border-solid bg-[#121316] text-white flex justify-center align-center gap-[4px]">
            continue 3/3
            <img src="./arrow.svg" alt="" />
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
