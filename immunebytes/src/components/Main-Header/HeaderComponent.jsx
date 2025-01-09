import { Menus } from "../Utils/utils.js";
import logo from '../../assets/images/logos/Logo.svg'
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import Formpopup from "../Formpopup"
export default function HeaderComponent() {
  return (
    <div>
      <header className="h-16 text-[15px] fixed inset-0 flex-center ">
        <nav className=" px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          <div className="flex-center  relative logo-wrapper">
           
            <img src={logo} alt="" />
          </div>

          <ul className="gap-x-1 lg:flex-center sm:hidden desktop-menu d-flex">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}

          </ul>

          <div className="flex-center gap-x-5">
          <div className="desktop-btn-request md:hidden sm:hidden">
          <Formpopup auditName="Request Audit" buttonClassName=" register-btn"  />

        </div>
            <div className="lg:hidden md:hidden xl:hidden mobile-menu">
              <MobMenu Menus={Menus} />
            </div>
          </div>
         
        </nav>
      </header>
    </div>
  );
}