export const Input = ({ label, placeholder, inputHandler }) => {
  return (
    <div className="flex flex-col gap-[8px]">
      {label}
      <input
        type="text"
        onChange={inputHandler}
        placeholder={placeholder}
        className="p-[12px] rounded-[8px] border-[1px] border-solid border-[#gray] w-[416px] focus:outline-none focus:border-sky-500"
      />
    </div>
  );
};
