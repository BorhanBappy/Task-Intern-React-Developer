import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFontAwesomeFlag,
  faMagnifyingGlass,
  faPerson
} from "@fortawesome/free-solid-svg-icons";

function Header() {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="w-full py-4 bg-white">
      <div className="px-[32px] mx-[99.5px] bg-white flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center py-2 px-4">
            <FontAwesomeIcon
              icon={faFontAwesomeFlag}
              style={{ color: "#1860dc" }}
              className="w-6 h-6"
            />
          </div>
          <div className="text-[#555555] ">
            <a className="py-[10px] p-4 font-[16px] mr-4" href="">
              Start
            </a>
            <a className="py-[10px] p-4 font-[16px] mr-4" href="">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>{" "}
            <a className="py-[10px] p-4 font-[16px] mr-4" href="">
              Icon
            </a>
            <a className="py-[10px] p-4 font-[16px] mr-4" href="">
              Docs
            </a>
            <a className="py-[10px] p-4 font-[16px] mr-4" href="">
              Plan
            </a>
            <a className="py-[10px] p-4 font-[16px] mr-4" href="">
              Support
            </a>
            <a className="py-[10px] p-4 font-[16px] mr-4" href="">
              Podcast
            </a>
          </div>
        </div>
        <div
          className="flex items-center py-2 px-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {hovered ? (
            <FontAwesomeIcon
              icon={faPerson}
              style={{ color: "#1860dc" }}
              className="w-6 h-6"
            />
          ) : (
            <img
              src="right-to-bracket-solid.svg"
              alt="right-to-bracket-solid.svg"
              className="w-[24px] h-[24px] text-white"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
