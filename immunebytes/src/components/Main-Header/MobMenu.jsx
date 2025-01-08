import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Formpopup from "../Formpopup"
import "./DesktopMenu.css";

export default function MobMenu({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const [subClicked, setSubClicked] = useState(null);
  const [subSubClicked, setSubSubClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
    setSubClicked(null);
    setSubSubClicked(null);
  };

  const subMenuDrawer = {
    enter: { height: "auto", overflow: "hidden" },
    exit: { height: 0, overflow: "hidden" }
  };

  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <X /> : <Menu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-16 overflow-y-auto h-full   text-white p-6 pb-20 mobile-fixed-bg"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul className="main-mobile-wrapper">
          {Menus.map(({ name, link, subMenu }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;

            return (
              <li key={name}>
                <span
                  className="flex-center-between p-4 rounded-md cursor-pointer relative"
                  onClick={() => {
                    if (hasSubMenu) {
                      setClicked(isClicked ? null : i);
                      setSubClicked(null);
                      setSubSubClicked(null);
                    }
                  }}
                >
                  {link ? (
                    <a href={link} className="w-full">
                      {name}
                    </a>
                  ) : (
                    name
                  )}
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
                    className="ml-5 mob-menu-ul"
                  >
                    {subMenu.map(
                      (
                        {
                          name,
                          link,
                          icon: Icon,
                          subSubMenu1,
                          subSubMenu2,
                          subSubHeading1,
                          subSubHeading2
                        },
                        j
                      ) => {
                        const isSubClicked = subClicked === j;
                        const hasSubSubMenu = subSubMenu1 || subSubMenu2;

                        return (
                          <li key={name} className="relative">
                            <span
                              className="p-2 flex-center  rounded-md gap-x-2 cursor-pointer "
                              onClick={() => {
                                if (hasSubSubMenu) {
                                  setSubClicked(isSubClicked ? null : j);
                                }
                              }}
                            >
                              {link ? (
                                <a
                                  href={link}
                                  className="w-full flex items-center gap-x-2"
                                >
                                  {Icon && <Icon size={17} />}
                                  {name}
                                </a>
                              ) : (
                                <>
                                  {Icon && <Icon size={17} />}
                                  {name}
                                </>
                              )}
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
                                className=" border-l border-gray-600"
                              >
                                <div className="mobilemenu-ul">
                                  {/* Sub-Submenu 1 */}
                                  {subSubHeading1 && (
                                    <p className="px-4 py-2 text-sm font-bold text-white">
                                      {subSubHeading1}
                                    </p>
                                  )}
                                  {subSubMenu1?.map((item, k) => (
                                    <li
                                      key={item.name}
                                      className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer menu-ul-mobile"
                                    >
                                      <a
                                        href={item.link}
                                        className="flex items-center gap-x-2 w-full"
                                      >
                                        {item.icon && (
                                          <img
                                            src={item.icon}
                                            alt={item.name}
                                            className="rounded-full object-cover"
                                          />
                                        )}
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}

                                  {/* Sub-Submenu 2 */}
                                  {subSubHeading2 && (
                                    <p className="px-4 py-2 text-sm font-bold text-white">
                                      {subSubHeading2}
                                    </p>
                                  )}
                                  {subSubMenu2?.map((item, k) => (
                                    <li
                                      key={item.name}
                                      className="p-2 flex-center  rounded-md gap-x-2 cursor-pointer"
                                    >
                                      <a
                                        href={item.link}
                                        className="flex items-center gap-x-2 w-full"
                                      >
                                        {item.icon && (
                                          <img
                                            src={item.icon}
                                            alt={item.name}
                                            className="rounded-full object-cover"
                                          />
                                        )}
                                        {item.name}
                                      </a>
                                    </li>
                                  ))}
                                </div>
                              </motion.ul>
                            )}
                          </li>
                        );
                      }
                    )}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
        <div className="desktop-btn-request mob-request-btn">
          <Formpopup />
        </div>
      </motion.div>
    </div>
  );
}
