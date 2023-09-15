import React, { useState } from "react";
import clsx from "clsx";

function SidebarItem({ item, selectedItems, onItemSelect }) {

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const isSelected = selectedItems.includes(item.item);

  return (
    <div className="">
        <label
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className={clsx(
            "flex items-center border-blue-500 rounded-xl w-[248px] py-[7px] border px-[10.5px] font-light text-gray-700",
            isSelected && "bg-blue-600 text-white"
          )}
        >
          <input
            type="checkbox"
            value={item.item}
            onChange={() => onItemSelect(item.item)}
            checked={isSelected}
            className={isHovered ? "mr-2" : "hidden"}
          />
          <span className={!isHovered ? "mr-2" : "hidden"}>
            <img
              src="/circle-regular.svg"
              alt=""
              className="w-[14px] h-[14px] rounded-full bg-gray-400"
            />
          </span>
          <span className="flex justify-between w-full">
            <span>{item.item}</span>
            <span>206</span>
          </span>
        </label>
    </div>
  );
}

function Sidebar({ data, selectedItems, onItemSelect }) {
  return (
    <div className="bg-gray-100 flex flex-col w-[280px] h-full px-4">
      {data.map((item) => (
        <SidebarItem
          key={item.item}
          item={item}
          selectedItems={selectedItems}
          onItemSelect={onItemSelect}
        />
      ))}
    </div>
  );
}

export default Sidebar;
