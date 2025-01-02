import { Menus } from "../Utils/utils.js";

import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
export default function HeaderComponent() {
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center bg-[#2ce93c] ">
        <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center gap-x-3 z-[999] relative">
           
            <h3 className="text-lg font-semibold">Framer</h3>
          </div>

          <ul className="gap-x-1 lg:flex-center sm:hidden desktop-menu d-flex">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>
          <div className="flex-center gap-x-5">
            <button
              aria-label="sign-in"
              className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
            >
              Sign In
            </button>
            <div className="lg:hidden md:hidden xl:hidden mobile-menu">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}