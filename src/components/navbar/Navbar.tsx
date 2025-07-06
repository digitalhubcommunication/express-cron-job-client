import { useDispatch, useSelector } from "react-redux";
import {
  SET_EXPAND,
  updatePreventScrolling,
} from "@/redux/features/rootModyfier/Modyfier";
import SiteLogo from "../logo/SiteLogo";
import { HambergerMenuIcon } from "../icons/Icons";
import Container from "../wrapper/Container";
import { navLinks } from "@/data/NavigationLinks";
import { NavLink } from "react-router-dom";
import { TLink } from "@/types/types";
import { RootState } from "@/redux/store";
import { SidebarCloseButton } from "../sidebar/Button";
import UserProfile from "../profile/UserProfile";

const Link = ({ link: { label, to } }: { link: TLink }) => {
  const dispatch = useDispatch();

  // handler
  const handleClick = () => {
    dispatch(SET_EXPAND(null));
    return true;
  };

  return (
    <NavLink
      onClick={handleClick}
      className={({ isActive }) =>
        `font-semibold md:font-normal duration-300 md:w-full text-[18px] ${
          isActive ? "text-blue-700" : "hover:text-blue-600"
        }`
      }
      to={to}
    >
      {label}
    </NavLink>
  );
};

export default function Navbar() {
  const NAVBAR_ACTIVE_KEY = "OEPN_NAVBAR";
  // hooks
  const dispatch = useDispatch();
  const { EXPAND } = useSelector((state: RootState) => state.modyfier);
  const { authUser } = useSelector((state: RootState) => state.auth);

  // handlers
  const handleClick = () => {
    dispatch(SET_EXPAND(NAVBAR_ACTIVE_KEY));
    dispatch(updatePreventScrolling(true));
  };

  return (
    <div className="w-full bg-slate-100 fixed top-0 left-0 z-[99] dark:bg-gray-800 border-b border-gray-300 dark:border-gray-700">
      <Container className="flex justify-between items-center min-h-[63px] lg:min-h-[65px]  w-full py-2.5 md:py-3 ">
        <SiteLogo />

        {/* ====== navlink wrapper ====== */}
        <div
          className={`duration-700 fixed top-0 left-0 md:relative h-full w-full md:w-auto md:h-auto md:bg-transparent 
        ${
          EXPAND === NAVBAR_ACTIVE_KEY
            ? "translate-x-0"
            : "-translate-x-full md:translate-x-0"
        }`}
        >
          {/* ===== overlay ====== */}
          <div
            className={`w-full h-full lg:hidden absolute top-0 left-0 -z-10 ${
              EXPAND === NAVBAR_ACTIVE_KEY
                ? "backdrop-blur-xs bg-slate-800/50 duration-500 opacity-100 delay-500"
                : "opacity-0"
            }`}
          ></div>
          {/* ===== overlay ====== */}

          <div
            className={`max-w-[450px] md:max-w-screen bg-white md:p-0 h-full md:h-auto md:grow flex flex-col md:flex-row items-center gap-4 md:gap-5 lg:gap-6`}
          >
            <div className="w-full flex mb-5 md:mb-0 border-b border-gray-300 dark:border-gray-700 px-4 py-2.5 md:py-0 md:hidden">
              <SiteLogo />
              <SidebarCloseButton />
            </div>
            {navLinks.map((link, _i) => {
              return _i === 0 && !!authUser ? (
                <>
                  <Link link={link} key={link.to} />
                  <NavLink
                    onClick={handleClick}
                    className={({ isActive }) =>
                      `font-semibold md:font-normal duration-300 md:w-full text-[18px] ${
                        isActive ? "text-blue-700" : "hover:text-blue-600"
                      }`
                    }
                    to="/settings/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </>
              ) : (
                <Link link={link} key={link.to} />
              );
            })}

            {!authUser ? (
              <NavLink
                onClick={handleClick}
                className={({ isActive }) =>
                  `font-semibold md:font-normal duration-300 md:w-full text-[18px] ${
                    isActive ? "text-blue-700" : "hover:text-blue-600"
                  }`
                }
                to="/login"
              >
                Login
              </NavLink>
            ) : (
              <UserProfile/>
            )}
          </div>
        </div>

        <button
          data-prevent-body-trigger
          className="md:hidden"
          onClick={handleClick}
        >
          <HambergerMenuIcon className="w-10 h-6" />
        </button>
      </Container>
    </div>
  );
}
