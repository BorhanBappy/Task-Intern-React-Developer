import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import clsx from "clsx";
import { data } from "../data";
import { styleOptions, featuredOptions, categoriesOptions } from "../Category";
import { BsGrid3X3GapFill, BsFillGridFill } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";

import CheckboxGroup from "./CheckBox";

function Main() {
  const { register, watch, setValue } = useForm();

  const [filteredItems, setFilteredItems] = useState([]);
  const [free, setFree] = useState(false);
  const [classic, setClassic] = useState(false);
  const [sharp, setSharp] = useState(false);
  const [brands, setBrands] = useState(false);
  const [sortingOption, setSortingOption] = useState("default");

  useEffect(() => {
    const newFilteredItems = data.filter((item) => {
      const selectedStyles = Array.from(watch("style") || []);
      const selectedFeatured = Array.from(watch("featured") || []);
      const selectedCategories = Array.from(watch("categories") || []);

      return (
        (!selectedStyles.length || selectedStyles.includes(item.style)) &&
        (!selectedFeatured.length || selectedFeatured.includes(item.feature)) &&
        (!selectedCategories.length ||
          selectedCategories.includes(item.categories)) &&
        (!free || item.free) &&
        (!classic || item.classic) &&
        (!sharp || item.sharp) &&
        (!brands || item.brands)
      );
    });

    // Apply sorting based on the selected option
    if (sortingOption === "alphabetical") {
      newFilteredItems.sort((a, b) => a.name.localeCompare(b.name));
    }

    setFilteredItems(newFilteredItems);
  }, [
    watch("style"),
    watch("featured"),
    watch("categories"),
    free,
    classic,
    sharp,
    data,
    brands,
    sortingOption, // Include sortingOption in dependencies
  ]);

  // Function to handle the sorting option change
  const handleSortingOptionChange = (event) => {
    setSortingOption(event.target.value);
  };

  return (
    <>
      <div>
        {/* Header Buttons */}
        <section className=" bg-white ">
          <div className="flex justify-between items-center border-2 border-gray-900 mx-60 p-3  rounded-full">
            <div className="flex justify-start p-2  items-center space-x-2">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <input
                type="text"
                placeholder="search 2600 icons.."
                className="w-[635px] h-full border-none outline-none focus:outline-none"
              />
            </div>

            <div>
              <p className="size-sm muted icon-search-powered-by">
                <span className="sr-only">This icon search is&nbsp;</span>
                <span className="text-capitalize">powered</span> by
                <a
                  href="https://www.algolia.com/developers/?utm_source=fontawesome&amp;utm_medium=referral"
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline secondary margin-left-4xs"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="algolia"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    className="svg-inline--fa fa-algolia fa-lg"
                  >
                    <path
                      fill="currentColor"
                      d="M256 0C116.1 0 2 112.7 0 252.1C-2 393.6 112.9 510.8 254.5 511.6c43.7 .3 85.9-10.4 123.3-30.7c3.6-2 4.2-7 1.1-9.7l-24-21.2c-4.9-4.3-11.8-5.5-17.8-3c-26.1 11.1-54.5 16.8-83.7 16.4C139 461.9 46.5 366.8 48.3 252.4C50.1 139.5 142.6 48.2 256 48.2H463.7V417.2L345.9 312.5c-3.8-3.4-9.7-2.7-12.7 1.3c-18.9 25-49.7 40.6-83.9 38.2c-47.5-3.3-85.9-41.5-89.5-88.9c-4.2-56.6 40.6-103.9 96.3-103.9c-50.4 0-91.9 38.8 96.2 88c.4 4.4 2.4 8.5 5.7 11.4l30.7 27.2c3.5 3.1 9 1.2 9.9-3.4c2.2-11.8 3-24.2 2.1-36.8c-4.9-72-63.3-130-135.4-134.4c-82.7-5.1-151.8 59.5-154 140.6c-2.1 78.9 62.6 147 141.6 148.7c33 .7 63.6-9.6 88.3-27.6L495 509.4c6.6 5.8 17 1.2 17-7.7V9.7c0-5.4-4.4-9.7-9.7-9.7H256z"
                      className=""
                    ></path>
                  </svg>
                  Algolia
                </a>
              </p>
            </div>
          </div>

          <div className="mx-[99.5px] px-8 mt-10 flex items-center justify-between">
            <div className="flex space-x-1">
              {/* Classic Button */}
              <button
                onClick={() => setClassic((value) => !value)}
                className={clsx(
                  "px-10 pt-6 pb-5  hover:border-b-4 hover:border-b-blue-500 hover:text-blue-500 flex flex-col items-center space-y-4",
                  classic && "border-b-4 border-b-blue-500 ",
                  !classic && "border-b-4 border-b-white"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={clsx(
                    "w-8 h-8 hover:text-blue-500",
                    classic && "text-blue-500"
                  )}
                >
                  <path
                    d="M500.3 7.3C507.7 13.3 512 22.4 512 32V176c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V71L352 90.2V208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V64c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM74.7 304l11.8-17.8c5.9-8.9 15.9-14.2 26.6-14.2h61.7c10.7 0 20.7 5.3 26.6 14.2L213.3 304H240c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V352c0-26.5 21.5-48 48-48H74.7zM192 408a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM478.7 278.3L440.3 368H496c6.7 0 12.6 4.1 15 10.4s.6 13.3-4.4 17.7l-128 112c-5.6 4.9-13.9 5.3-19.9 .9s-8.2-12.4-5.3-19.2L391.7 400H336c-6.7 0-12.6-4.1-15-10.4s-.6-13.3 4.4-17.7l128-112c5.6-4.9 13.9-5.3 19.9-.9s8.2 12.4 5.3 19.2zm-339-59.2c-6.5 6.5-17 6.5-23 0L19.9 119.2c-28-29-26.5-76.9 5-103.9c27-23.5 68.4-19 93.4 6.5l10 10.5 9.5-10.5c25-25.5 65.9-30 93.9-6.5c31 27 32.5 74.9 4.5 103.9l-96.4 99.9z"
                    className="fill-current"
                  />
                </svg>
                <span className={clsx("text-sm", classic && "text-blue-500")}>
                  Classic
                </span>
              </button>

              {/*Sharp Button Start*/}

              <button
                onClick={() => setSharp((value) => !value)}
                className={clsx(
                  "px-10 pt-6 pb-5  hover:border-b-4 hover:border-b-blue-500 hover:text-blue-500 flex flex-col items-center space-y-4",
                  sharp && "border-b-4 border-b-blue-500 ",
                  !sharp && "border-b-4 border-b-white"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={clsx(
                    "w-8 h-8 hover:text-blue-500",
                    sharp && "text-blue-500"
                  )}
                >
                  <path
                    d="M500.3 7.3C507.7 13.3 512 22.4 512 32V176c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V71L352 90.2V208c0 26.5-28.7 48-64 48s-64-21.5-64-48s28.7-48 64-48V64c0-15.3 10.8-28.4 25.7-31.4l160-32c9.4-1.9 19.1 .6 26.6 6.6zM74.7 304l11.8-17.8c5.9-8.9 15.9-14.2 26.6-14.2h61.7c10.7 0 20.7 5.3 26.6 14.2L213.3 304H240c26.5 0 48 21.5 48 48V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V352c0-26.5 21.5-48 48-48H74.7zM192 408a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM478.7 278.3L440.3 368H496c6.7 0 12.6 4.1 15 10.4s.6 13.3-4.4 17.7l-128 112c-5.6 4.9-13.9 5.3-19.9 .9s-8.2-12.4-5.3-19.2L391.7 400H336c-6.7 0-12.6-4.1-15-10.4s-.6-13.3 4.4-17.7l128-112c5.6-4.9 13.9-5.3 19.9-.9s8.2 12.4 5.3 19.2zm-339-59.2c-6.5 6.5-17 6.5-23 0L19.9 119.2c-28-29-26.5-76.9 5-103.9c27-23.5 68.4-19 93.4 6.5l10 10.5 9.5-10.5c25-25.5 65.9-30 93.9-6.5c31 27 32.5 74.9 4.5 103.9l-96.4 99.9z"
                    className="fill-current"
                  />
                </svg>
                <span className={clsx("text-sm", sharp && "text-blue-500")}>
                  Sharp
                </span>
              </button>

              {/* Brand Button Start */}
              <button
                onClick={() => setBrands((value) => !value)}
                className={clsx(
                  "px-10 pt-6 pb-5  hover:border-b-4 hover:border-b-blue-500 hover:text-blue-500 flex flex-col items-center space-y-4",
                  brands && "border-b-4 border-b-blue-500 ",
                  !brands && "border-b-4 border-b-white"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={clsx(
                    "w-8 h-8 hover:text-blue-500",
                    brands && "text-blue-500"
                  )}
                >
                  <path
                    d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24V64 350.5 400v88c0 13.3 10.7 24 24 24s24-10.7 24-24V388l80.3-20.1c41.1-10.3 84.6-5.5 122.5 13.4c44.2 22.1 95.5 24.8 141.7 7.4l34.7-13c12.5-4.7 20.8-16.6 20.8-30V66.1c0-23-24.2-38-44.8-27.7l-9.6 4.8c-46.3 23.2-100.8 23.2-147.1 0c-35.1-17.6-75.4-22-113.5-12.5L48 52V24zm0 77.5l96.6-24.2c27-6.7 55.5-3.6 80.4 8.8c54.9 27.4 118.7 29.7 175 6.8V334.7l-24.4 9.1c-33.7 12.6-71.2 10.7-103.4-5.4c-48.2-24.1-103.3-30.1-155.6-17.1L48 338.5v-237z"
                    className="fill-current"
                  />
                </svg>
                <span className={clsx("text-sm", brands && "text-blue-500")}>
                  Brand
                </span>
              </button>

              {/* Free Button */}

              <button
                onClick={() => setFree((value) => !value)}
                className={clsx(
                  "px-10 pt-6 pb-5  hover:border-b-4 hover:border-b-blue-500 hover:text-blue-500 flex flex-col items-center space-y-4",
                  free && "border-b-4 border-b-blue-500 ",
                  !free && "border-b-4 border-b-white"
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className={clsx(
                    "w-8 h-8 hover:text-blue-500",
                    free && "text-blue-500"
                  )}
                >
                  <path
                    d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"
                    className="fill-current"
                  />
                </svg>
                <span className={clsx("text-sm", free && "text-blue-500")}>
                  Free
                </span>
              </button>
            </div>
            <div className=" flex items-center space-x-2">
              {/* ... */}
              <div className="p-4">
                <BsFillGridFill className="bg-white w-5 h-5" />
              </div>

              <div className="p-4">
                <BsGrid3X3GapFill className="bg-white w-5 h-5" />
              </div>
              <div className="p-4">
                <TfiMenuAlt className="bg-white w-5 h-5" />
              </div>

              <select
                name="sortSelector"
                id="sortSelector"
                className="p-[12px] px-[48px] py-[12px] pl-[24px] border border-gray-300 rounded-lg"
                onChange={handleSortingOptionChange} // Handle sorting option change
              >
                <option value="default">Featured</option>
                <option value="alphabetical">Alphabetical</option>
              </select>
              <select
                name="sortSelector"
                id="sortSelector"
                className="p-[12px] px-[48px] py-[12px] pl-[24px] border border-gray-300 rounded-lg"
              >
                <option value="6.4.2">6.4.2</option>
                <option value="5.15.4">5.15.4</option>
                <option value="allversions">All Versions</option>
              </select>
            </div>
          </div>
        </section>
        {/* Main Content */}
        <div className="mt-8 mb-20">
          <form className="mx-[99.5px] px-[16px] ">
            <div className="flex justify-start w-full">
              {/* Left Section */}
              <div className=" flex flex-col w-[280px] h-full px-4 ">
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
                  FEATURED
                </div>
                <CheckboxGroup
                  options={featuredOptions}
                  name="featured"
                  register={register}
                  watch={watch}
                />

                <div className="text-left py-4 font-bold text-sm text-[#616D8A]">
                  CATEGORIES
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
                <div className="">
                  <div className="flex space-x-2 items-center justify-between">
                    <div className="flex justify-start items-center gap-4">
                      <div className="text-2xl">
                        <span>{filteredItems.length} Icons</span>
                      </div>

                      <div className="flex gap-2 items-center justify-start ">
                        {Array.from(watch("style") || []).map((item, i) => (
                          <div
                            key={i}
                            className="border px-3 py-2  flex items-center space-x-2 rounded-full bg-white font-bold hover:text-[#146EBE]  text-gray-800"
                            style={{ fontSize: "12px" }}
                          >
                            <div>{item.toUpperCase()}</div>
                            <button
                              className=""
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
                        {Array.from(watch("featured") || []).map((item, i) => (
                          <div
                            key={i}
                            className="border px-3 py-2  flex items-center space-x-2 rounded-full bg-white font-bold hover:text-[#146EBE]  text-gray-800"
                            style={{ fontSize: "12px" }}
                          >
                            <div>{item.toUpperCase()}</div>
                            <button
                              onClick={() => {
                                setValue(
                                  "featured",
                                  Array.from(watch("featured") || []).filter(
                                    (v) => v !== item
                                  )
                                );
                              }}
                            >
                              X
                            </button>
                          </div>
                        ))}
                        {Array.from(watch("categories") || []).map(
                          (item, i) => (
                            <div
                              key={i}
                              className="border px-3 py-2  flex items-center space-x-2 rounded-full bg-white font-bold hover:text-[#146EBE]  text-gray-800"
                              style={{ fontSize: "12px" }}
                            >
                              <div>{item.toUpperCase()}</div>
                              <button
                                onClick={() => {
                                  setValue(
                                    "categories",
                                    Array.from(
                                      watch("categories") || []
                                    ).filter((v) => v !== item)
                                  );
                                }}
                              >
                                X
                              </button>
                            </div>
                          )
                        )}

                        {free && (
                          <div
                            className="border px-3 py-2  flex items-center space-x-2 rounded-full bg-white font-bold hover:text-[#146EBE]  text-gray-800"
                            style={{ fontSize: "12px" }}
                          >
                            <div>FREE</div>
                            <button onClick={() => setFree((value) => !value)}>
                              X
                            </button>
                          </div>
                        )}
                        {brands && (
                          <div
                            className="border px-3 py-2  flex items-center space-x-2 rounded-full bg-white font-bold hover:text-[#146EBE]  text-gray-800"
                            style={{ fontSize: "12px" }}
                          >
                            <div>BRANDS</div>
                            <button
                              onClick={() => setBrands((value) => !value)}
                            >
                              X
                            </button>
                          </div>
                        )}
                        {classic && (
                          <div
                            className="border px-3 py-2  flex items-center space-x-2 rounded-full bg-white font-bold hover:text-[#146EBE]  text-gray-800"
                            style={{ fontSize: "12px" }}
                          >
                            <div>CLASSIC</div>
                            <button
                              onClick={() => setClassic((value) => !value)}
                            >
                              X
                            </button>
                          </div>
                        )}
                        {sharp && (
                          <div
                            className="border px-3 py-2  flex items-center space-x-2 rounded-full bg-white font-bold   text-gray-800 group"
                            style={{ fontSize: "12px" }}
                          >
                            <div className="group-hover:text-[#146EBE]">
                              SHARP
                            </div>
                            <button
                              onClick={() => setSharp((value) => !value)}
                              className=" group-hover:text-red-500"
                            >
                              X
                            </button>
                          </div>
                        )}

                        {/* Other filter buttons go here */}
                        {(free ||
                          classic ||
                          brands ||
                          sharp ||
                          Array.from(watch("style") || []).length > 0 ||
                          Array.from(watch("featured") || []).length > 0 ||
                          Array.from(watch("categories") || []).length > 0) && (
                          <button
                            onClick={() => {
                              setValue("style", []);
                              setValue("featured", []);
                              setValue("categories", []); // Reset categories
                              setFree(false);
                              setClassic(false);
                              setBrands(false);
                              setSharp(false);
                            }}
                            className="border px-3 py-2  flex items-center space-x-2 rounded-full bg-white font-bold hover:text-[#146EBE] hover:border-[#146EBE] text-gray-800"
                            style={{ fontSize: "12px" }}
                          >
                            RESET
                          </button>
                        )}
                      </div>
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
        </div>
      </div>
    </>
  );
}

export default Main;
