import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import { data } from "../CheckboxApp";
import React, { useState, useEffect } from "react";
import clsx from "clsx";

function CheckboxGroup({ options, name, register, watch }) {
  const selectedOptions = watch(name) || [];

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <label
          key={option.value}
          className={clsx(
            "group flex items-center rounded-xl w-[248px]  py-[7px] px-[10.5px] font-light text-gray-700",
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
              className="w-[14px] h-[14px] rounded-full bg-gray-400"
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

const styleOptions = [
  { value: "solid", label: "Solid", count: 3, src: "/circle-regular.svg" },
  { value: "regular", label: "Regular", count: 8 },
  { value: "light", label: "Light", count: 10 },
  { value: "thin", label: "Thin", count: 11 },
];

const featuredOptions = [
  { value: "sponsored", label: "Sponsored", count: 3 },
  { value: "popular", label: "Popular", count: 3 },
];

function Main() {
  const { register, watch } = useForm();
  const selectedStyles = Array.from(watch("style") || []);
  const selectedFeatured = Array.from(watch("featured") || []);

  const [filteredItems, setFilteredItems] = useState([]);
  const [free, setFree] = useState(false);
  const [classic, setClassic] = useState(false);

  useEffect(() => {
    const newFilteredItems = data.filter((item) => {
      return (
        ((!selectedStyles.length || selectedStyles.includes(item.style)) &&
          (!selectedFeatured.length || selectedFeatured.includes(item.name)) &&
          (!free || item.free) &&
          (!classic || item.classic)
      ));
    });
    setFilteredItems(newFilteredItems);
  }, [selectedStyles, selectedFeatured, free, classic]);
  

  return (
    <section className="mt-8 mb-20 bg-[#F0F1F3]">
      <div className=" px-8  flex space-x-4 bg-white">
        <button
          onClick={() => setFree((value) => !value)}
          className={clsx(" p-2 rounded", free && "bg-blue-700")}
        >
          Free
        </button>

        <button
          onClick={() => setClassic((value) => !value)}
          className={clsx(" p-2 rounded", classic && "bg-blue-700")}
        >
          Classic
        </button>
      </div>

      <form className="mx-[99.5px] px-[32px] ">
        <div className="flex justify-between">
          {/* Left Section */}
          <div className="bg-gray-100 flex flex-col w-[280px] h-full px-4">
            <div className="text-left py-4 uppercase font-bold text-sm text-gray-700 ">
              Style
            </div>
            <CheckboxGroup
              options={styleOptions}
              name="style"
              register={register}
              watch={watch}
            />
            <div className="text-left py-4 uppercase font-bold text-sm text-gray-700 ">
              Featured
            </div>
            <CheckboxGroup
              options={featuredOptions}
              name="featured"
              register={register}
              watch={watch}
            />
          </div>

          {/* Right Section */}
          <div className="w-[840px] h-[8480px] px-4">
            {/* Display filtered items */}
            <div className="grid grid-cols-3 items-center">
              {filteredItems.map((item) => (
                <div key={item.name} className="flex flex-col">
                  <span className="">
                    <FontAwesomeIcon icon={item.icon} />
                  </span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Main;
