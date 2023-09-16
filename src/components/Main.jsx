import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { data } from "../CheckboxApp";
import { styleOptions, featuredOptions, categoriesOptions } from "../Category";

function CheckboxGroup({ options, name, register, watch }) {
  const selectedOptions = watch(name) || [];

  return (
    <div className="flex flex-col space-y-2">
      {options.map((option) => (
        <label
          key={option.value}
          className={clsx(
            "group flex items-center rounded-xl w-[248px] py-[7px] px-[10.5px] font-light text-[#616D8A]",
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

function Main() {
  const { register, watch, setValue } = useForm();

  const [filteredItems, setFilteredItems] = useState([]);
  const [free, setFree] = useState(undefined);
  const [classic, setClassic] = useState(undefined);
  const [sharp, setSharp] = useState(undefined);
  const [brands, setBrands] = useState(undefined);

  useEffect(() => {
    const newFilteredItems = data.filter((item) => {
      const selectedStyles = Array.from(watch("style") || []);
      const selectedFeatured = Array.from(watch("featured") || []);
      return (
        (!selectedStyles.length || selectedStyles.includes(item.style)) &&
        (!selectedFeatured.length || selectedFeatured.includes(item.name)) &&
        (!free || item.free) &&
        (!classic || item.classic) &&
        (!sharp || item.sharp) &&
        (!brands || item.brands)
      );
    });
    setFilteredItems(newFilteredItems);
  }, [watch("style"), watch("featured"), free, classic, sharp, data, brands]);

  return (
    <>
      {/* Header Buttons */}
      <div className="px-8 flex space-x-4 bg-white">
        <button
          onClick={() => setClassic((value) => !value)}
          className={clsx("p-2 rounded", classic && "bg-blue-700")}
        >
          Classic
        </button>
        <button
          onClick={() => setSharp((value) => !value)}
          className={clsx("p-2 rounded", sharp && "bg-blue-700")}
        >
          Sharp
        </button>
        <button
          onClick={() => setBrands((value) => !value)}
          className={clsx("p-2 rounded", brands && "bg-blue-700")}
        >
          Brands
        </button>
        <button
          onClick={() => setFree((value) => !value)}
          className={clsx("p-2 rounded", free && "bg-blue-700")}
        >
          <div>
            <span>
              <FontAwesomeIcon icon={faBolt} />
            </span>
            <span>Free</span>
          </div>
        </button>
        <div></div>
      </div>

      {/* Main Content */}
      <section className="mt-8 bg-[#F0F1F3] h-screen">
        <form className="mx-[99.5px] px-[16px] ">
          <div className="flex justify-start w-full">
            {/* Left Section */}
            <div className="bg-gray-100 flex flex-col w-[280px] h-full px-4">
              <div className="text-left py-4 font-bold text-sm text-[#616D8A]">
                STYLE
              </div>
              <CheckboxGroup
                options={styleOptions}
                name="style"
                register={register}
                watch={watch}
              />
              <div className="text-left py-4 font-bold text-sm text-[#616D8A]">
                FEATURED{" "}
              </div>
              <CheckboxGroup
                options={featuredOptions}
                name="featured"
                register={register}
                watch={watch}
              />

              <div className="text-left py-4 font-bold text-sm text-[#616D8A]">
                CATEGORIES{" "}
              </div>
              <CheckboxGroup
                options={categoriesOptions}
                name="categories"
                register={register}
                watch={watch}
              />
            </div>

            {/* Right Section */}
            <div className="px-4">
              {/* Filters */}
              <div>
                <div className="flex space-x-2 items-center">
                  <div>
                    <span>{filteredItems.length} Icons</span>
                  </div>
                  <div>
                    {Array.from(watch("style") || []).map((item, i) => (
                      <div
                        key={i}
                        className="border p-2 flex items-center space-x-2 rounded-lg"
                      >
                        <div>{item}</div>
                        <button
                          onClick={() => {
                            setValue(
                              "style",
                              Array.from(watch("style") || []).filter(
                                (v) => v !== item
                              )
                            );
                          }}
                        >
                          X
                        </button>
                      </div>
                    ))}
                    {/* Other filter buttons go here */}
                    {(free ||
                      classic ||
                      brands ||
                      sharp ||
                      Array.from(watch("style") || []).length > 0 ||
                      Array.from(watch("featured") || []).length > 0) && (
                      <button
                        onClick={() => {
                          setValue("style", []);
                          setValue("featured", []);
                          setFree(false);
                          setClassic(false);
                          setBrands(false);
                          setSharp(false);
                        }}
                      >
                        RESET
                      </button>
                    )}
                  </div>
                  <div>Page 1 of 20 </div>
                </div>
              </div>

              {/* Icon Grid */}
              <div className="grid grid-cols-4 gap-6 justify-between items-center w-[840px] mb-12 mt-5">
                {filteredItems.map((item) => (
                  <button
                    key={item.name}
                    className="flex flex-col items-center p-10 bg-white hover:bg-[#FFD43B] rounded-lg"
                  >
                    <span className="w-[45px] h-[36px] flex justify-center items-center">
                      <FontAwesomeIcon
                        icon={item.icon}
                        className="w-[22.5] h-[37px]"
                      />
                    </span>
                    <span
                      className="mt-[21px] w-40 text-center text-[#667B91]"
                      style={{ fontSize: "14px" }}
                    >
                      {item.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Main;
