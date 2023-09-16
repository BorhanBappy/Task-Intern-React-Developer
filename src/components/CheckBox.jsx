import clsx from "clsx";

function CheckboxGroup({ options, name, register, watch }) {
  const selectedOptions = watch(name) || [];

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <label
          key={option.value}
          className={clsx(
            "group flex items-center rounded-xl w-[248px] py-[7px] px-[10.5px] font-light text-[#616D8A] border border-[#F0F1F3] hover:border hover:border-gray-400  shrink-0 grow-0",
            selectedOptions.includes(option.value) && "bg-blue-600 text-white"
          )}
        >
          <input
            type="checkbox"
            value={option.value}
            {...register(name)}
            className={clsx(
              "group-hover:inline-block mr-2",
              selectedOptions.includes(option.value) && "inline-block",
              !selectedOptions.includes(option.value) && "hidden"
            )}
          />
          <span
            className={clsx(
              "inline-block group-hover:hidden mr-2",
              selectedOptions.includes(option.value) && "hidden"
            )}
          >
            <img
              src={option.src}
              alt={option.src}
              className="w-[14px] h-[14px] rounded-full"
            />
          </span>
          <span className="flex justify-between w-full">
            <span>{option.label}</span>
            <span>{option.count}</span>
          </span>
        </label>
      ))}
    </div>
  );
}

export default CheckboxGroup;
