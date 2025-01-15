import { Menus } from "../Utils/utils.js";
import logo from '../../assets/images/logos/Logo.svg'
import DesktopMenu from "./DesktopMenu";
import MobMenu from "./MobMenu";
import Formpopup from "../Formpopup"
export default function HeaderComponent() {
  return (
    <div>
<div className="container">
<header className="h-16 text-[15px] fixed inset-0 flex-center  shadow">
        <nav className="px-3.5 flex-center-between w-full max-w-7xl mx-auto">
          {/* Logo Section */}
          <div className="flex-center relative logo-wrapper-main">
            <img src={logo} alt="Logo" />
          </div>

          {/* Desktop Menu */}
          <ul className="gap-x-1 lg:flex-center md:hidden sm:hidden desktop-menu d-flex">
            {Menus.map((menu) => (
              <DesktopMenu menu={menu} key={menu.name} />
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex-center gap-x-5">
            {/* Desktop Button */}
            <div className="desktop-btn-request md:hidden sm:hidden">
              <Formpopup auditName="Request Audit" buttonClassName="register-btn" />
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden xl:hidden mobile-menu">
              <MobMenu Menus={Menus} />
            </div>
          </div>
        </nav>
      </header>
</div>
    </div>
  );
}
