import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import "./DesktopMenu.css";

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
      transition: { duration: 0.9 },
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
      <a
        href={menu.link || "#"}
        className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl"
      >
        {menu.name}
        {hasSubMenu && (
          <ChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </a>
      {hasSubMenu && (
        <motion.div
          className="sub-menu"
          initial="enter"
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
                <a
                  href={submenu.link || "#"}
                  className="flex-center gap-x-4 group/menubox"
                >
                  <div className="duration-300">
                    {submenu.icon && <submenu.icon />}
                  </div>
                  <div>
                    <h6 className="font-semibold text-white">{submenu.name}</h6>
                    <p className="text-sm text-gray-400">{submenu.desc}</p>
                  </div>
                </a>

                {/* Sub-submenu */}
                {submenu.subSubMenu1 &&
                  submenu.subSubMenu2 &&
                  hoveredSubMenuIndex === i && (
                    <div className="subsubmenu-wrapper">
                      <motion.ul
                        className="absolute left-full top-0 sub-submenu subsubmenu"
                        initial="enter"
                        animate="enter"
                        variants={subMenuAnimate}
                      >
                        {submenu.subSubHeading1 && (
                          <p className="px-4 py-2 text-sm font-bold text-white">
                            {submenu.subSubHeading1}
                          </p>
                        )}
                        <div className="li-wrapper">
                          {submenu.subSubMenu1.map((subSubItem, j) => (
                            <a
                              href={subSubItem.link || "#"}
                              key={subSubItem.name || j}
                              className="block px-4 py-2 hover:bg-gray-700 text-white cursor-pointer submenuitem flex items-center gap-2"
                            >
                              {subSubItem.icon && (
                                <img
                                  src={subSubItem.icon}
                                  alt={subSubItem.name}
                                  className="rounded-full object-cover"
                                />
                              )}
                              <p className="sub-item-name">{subSubItem.name}</p>
                            </a>
                          ))}
                        </div>

                        <div className="subsubmenu-2">
                          {submenu.subSubHeading2 && (
                            <p className="px-4 py-2 text-sm font-bold text-white">
                              {submenu.subSubHeading2}
                            </p>
                          )}
                          <div className="li-wrapper">
                            {submenu.subSubMenu2.map((subSubItem, j) => (
                              <a
                                href={subSubItem.link || "#"}
                                key={subSubItem.name || j}
                                className="block px-4 py-2 hover:bg-gray-700 text-white cursor-pointer submenuitem flex items-center gap-2"
                              >
                                {subSubItem.icon && (
                                  <img
                                    src={subSubItem.icon}
                                    alt={subSubItem.name}
                                    className="rounded-full object-cover"
                                  />
                                )}
                                <p className="sub-item-name">
                                  {subSubItem.name}
                                </p>
                              </a>
                            ))}
                          </div>
                        </div>
                      </motion.ul>
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
