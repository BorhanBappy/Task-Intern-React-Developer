import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const data = [
  {
    name: "Youtube",
    style: "solid",
    icon: faYoutube,
    classic: true,
    sharp: true,
    brands: true,
    free: true,
  },
  {
    name: "home",
    style: "light",
    icon: faHome,
    classic: true,
    sharp: true,
    brands: true,
    free: true,
  },
  {
    name: "faImage",
    style: "regular",
    icon: faImage,
    classic: true,
    sharp: true,
    brands: true,
    free: true,
  },
];

function Main() {
  const [items, setItems] = useState(data);
  // handle events
  const { register, watch } = useForm();

  const selectedStyledArray = watch("style");
  const selectedFeaturedArray = watch("featured");

  // handle submit
  console.log(selectedStyledArray, selectedFeaturedArray);

  // Handle checkbox changes
  const selectedStyles = Array.from(watch("style") || []);
  const selectedFeatured = Array.from(watch("featured") || []);

  // Filter items based on selected checkboxes
  const filteredItems = data.filter((item) => {
    return (
      (!selectedStyles.length || selectedStyles.includes(item.style)) &&
      (!selectedFeatured.length || selectedFeatured.includes(item.name))
    );
  });

  return (
    <>
      <section>
        <form>
          <div className="bg-white  h-auto pb-10 mt-16 mx-5 rounded-lg w-full md:w-4/5 md:mx-auto lg:w-2/5 lg:x-auto">
            {/* Display filtered items */}
            <div className="mt-4">
              {filteredItems.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <FontAwesomeIcon icon={item.icon} />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
            {/* body section */}
            <div>
              <div className="bg-gray-100 flex flex-col space-y-2">
                <div className="text-left py-4 px-4 uppercase font-bold text-2xl">
                  style
                </div>
                <div className="flex ">
                  <input
                    type="checkbox"
                    value="solid"
                    className="w-8 h-8"
                    {...register("style")}
                  />
                  <span>solid</span>
                </div>
                <div className="flex ">
                  <input
                    type="checkbox"
                    value="regular"
                    className="w-8 h-8"
                    {...register("style")}
                  />
                  <span>regular</span>
                </div>
                <div className="flex ">
                  <input
                    type="checkbox"
                    value="light"
                    className="w-8 h-8"
                    {...register("style")}
                  />
                  <span>light</span>
                </div>

                <div className="text-left py-4 px-4 uppercase font-bold text-2xl">
                  Featured
                </div>
                <div className="flex ">
                  <input
                    type="checkbox"
                    value="sponsored"
                    className="w-8 h-8"
                    {...register("featured")}
                  />
                  <span>sponsored</span>
                </div>
                <div className="flex ">
                  <input
                    type="checkbox"
                    value="popular"
                    className="w-8 h-8"
                    {...register("featured")}
                  />
                  <span>popular</span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}

export default Main;
