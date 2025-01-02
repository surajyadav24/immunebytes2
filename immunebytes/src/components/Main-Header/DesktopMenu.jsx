import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function DesktopMenu({ menu }) {
  // Hover state for menu and submenus
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredSubMenuIndex, setHoveredSubMenuIndex] = useState(null);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.li
      className="group/link"
      key={menu.name}
      onMouseEnter={() => setIsHovered(true)} // Set hover state to true on hover
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredSubMenuIndex(null); // Reset subsubmenu hover state
      }} // Set hover state to false on hover leave
    >
      <span className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          className="sub-menu"
          initial="exit"
          animate={isHovered ? "enter" : "exit"} // Show or hide submenu based on hover state
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {menu.subMenu.map((submenu, i) => (
              <div
                className="relative cursor-pointer group/submenu"
                key={i}
                onMouseEnter={() => setHoveredSubMenuIndex(i)} // Show subsubmenu
                onMouseLeave={() => setHoveredSubMenuIndex(null)} // Hide subsubmenu
              >
                {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                  <p className="text-sm mb-4 text-gray-500">
                    {menu?.subMenuHeading?.[i]}
                  </p>
                )}
                <div className="flex-center gap-x-4 group/menubox">
                  <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                    {submenu.icon && <submenu.icon />}
                  </div>
                  <div>
                    <h6 className="font-semibold">{submenu.name}</h6>
                    <p className="text-sm text-gray-400">{submenu.desc}</p>
                  </div>
                </div>

                {/ Sub-submenu /}
                {submenu.subSubMenu && hoveredSubMenuIndex === i && (
                  <motion.div
                    className="absolute left-full top-0 sub-submenu bg-gray-800 rounded-lg shadow-lg"
                    initial="exit"
                    animate="enter"
                    exit="exit"
                    variants={subMenuAnimate}
                  >
                    {submenu.subSubMenu.map((subSubItem, j) => (
                      <div
                        className="px-4 py-2 hover:bg-gray-700 text-white cursor-pointer"
                        key={j}
                      >
                        {subSubItem.name}
                      </div>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
