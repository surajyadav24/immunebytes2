import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const [subClicked, setSubClicked] = useState(null); // State for subsubmenu

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
    setSubClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full bg-[#18181A] backdrop-blur text-white p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name}>
                <span
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => {
                    setClicked(isClicked ? null : i);
                    setSubClicked(null); // Reset subsubmenu when toggling submenu
                  }}
                >
                  {name}
                  {hasSubMenu && (
                    <ChevronDown
                      className={`ml-auto ${isClicked ? "rotate-180" : ""}`}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, icon: Icon, subSubMenu }, j) => {
                      const isSubClicked = subClicked === j;
                      const hasSubSubMenu = subSubMenu?.length;
                      return (
                        <li key={name} className="relative">
                          <span
                            className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                            onClick={() =>
                              setSubClicked(isSubClicked ? null : j)
                            }
                          >
                            {Icon && <Icon size={17} />}
                            {name}
                            {hasSubSubMenu && (
                              <ChevronDown
                                className={`ml-auto ${
                                  isSubClicked ? "rotate-180" : ""
                                }`}
                              />
                            )}
                          </span>
                          {hasSubSubMenu && (
                            <motion.ul
  initial="exit"
  animate={isSubClicked ? "enter" : "exit"}
  variants={subMenuDrawer}
  className="ml-5 pl-4 border-l border-gray-600"
>
  {subSubMenu.map(({ name, icon }, k) => (
    <li
      key={name}
      className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
    >
      {icon && (
        <img
          src={icon}
          alt={name}
          className=" rounded-full object-cover"
        />
      )}
      {name}
    </li>
  ))}
</motion.ul>

                          )}
                        </li>
                      );
                    })}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}
