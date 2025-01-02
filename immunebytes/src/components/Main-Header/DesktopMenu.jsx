import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import "./DesktopMenu.css"

export default function DesktopMenu({ menu }) {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredSubMenuIndex, setHoveredSubMenuIndex] = useState(null);

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: { duration: 0.5 },
      display: "block",
    },
    exit: {
      opacity: 1,
      rotateX: -15,
      transition: { duration: 0.5 },
      transitionEnd: { display: "block" },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.li
      className="group/link"
      key={menu.name}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredSubMenuIndex(null);
      }}
    >
      <span className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          className="sub-menu "
          initial="exit"
          animate={isHovered ? "enter" : "exit"}
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
                key={submenu.name || i}
                onMouseEnter={() => setHoveredSubMenuIndex(i)}
                onMouseLeave={() => setHoveredSubMenuIndex(null)}
              >
                {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                  <p className="text-sm mb-4 text-gray-500">
                    {menu?.subMenuHeading?.[i]}
                  </p>
                )}
                <div className="flex-center gap-x-4 group/menubox">
                  <div className=" duration-300">
                    {submenu.icon && <submenu.icon />}
                  </div>
                  <div>
                    <h6 className="font-semibold">{submenu.name}</h6>
                    <p className="text-sm text-gray-400">{submenu.desc}</p>
                  </div>
                </div>

                {/* Sub-submenu */}
                {submenu.subSubMenu && hoveredSubMenuIndex === i && (
   <div className="subsubmenu-wrapper ">
                   <motion.div
                    className="absolute left-full top-0 sub-submenu bg-gray-800 rounded-lg shadow-lg subsubmenu"
                    initial="enter"
                    animate="enter"
                    // exit="exit"
                    variants={subMenuAnimate}
                  >
                    {submenu.subSubMenu.map((subSubItem, j) => (
                      <div
                        className="px-4 py-2 hover:bg-gray-700 text-white cursor-pointer submenuitem"
                        key={subSubItem.name || j}
                      >
                        {subSubItem.name}
                        {subSubItem.icon && (
          <subSubItem.icon size={16} className="text-gray-400" />
        )}
                        
                      </div>
                      
                    ))}
                  </motion.div>
   </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.li>
  );
}
