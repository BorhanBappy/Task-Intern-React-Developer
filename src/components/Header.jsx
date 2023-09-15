import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFontAwesomeFlag } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

<FontAwesomeIcon
  icon="fa-solid fa-font-awesome"
  style={{ color: "#1860dc" }}
/>;
function Header() {
  return (
    <div className=" w-full py-4">
      <div className="px-[32px] mx-[38.0966px] bg-white  flex justify-start items-center">
        <div className="">
          <FontAwesomeIcon
            icon={faFontAwesomeFlag}
            style={{ color: "#1860dc" }}
          />
        </div>
        <div>
          <a href="">Start</a>
          <a href="">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </a>{" "}
          <a href="">Icon</a>
          <a href="">Docs</a>
          <a href="">Plan</a>
          <a href="">Support</a>
          <a href="">Podcast</a>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
}

export default Header;
