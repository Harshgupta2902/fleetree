import useUser from "@/lib/iron-session/useUser";
import UserMenu from "@/components/Navbar/UserMenu";
import Link from "next/link";
import LocationMenu from "@/components/Navbar/parts/LocationMenu";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/Primitives/Navigation";
import { useEffect, useRef, useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import MobileActiveLink from "@/components/Navbar/parts/MobileActiveLink";
import NavSponsor from "../v4/badge/NavSponsor";
import SearchModal from "../SearchModal";
import MenuItems from "@/components/Navbar/parts/MenuItems";
import NewPostDialog from "./parts/NewPostDialog";
import { getScrollPercent } from "../StickyFooterCTA";

const Navbar = ({
  collapsed,
  hideLocaleSwitcher,
  editor,
  sponsor,
  showWriteButton,
  maxWidth,
  navType,
  navBackground,
}) => {
  const { user, isLoading, isLoggedIn } = useUser({
    redirectIfFound: false,
  });

  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen);
  };

  const [isVisible, setVisible] = useState(false);
  const [blinkyOn, setBlinkyOn] = useState(false);
  const [hideOffTop, setHideOffTop] = useState(false);
  const prevScrollPos = useRef(
    typeof window !== "undefined" && window?.pageYOffset
  );

  useEffect(() => {
    setBlinkyOn(true);
    setTimeout(() => {
      setBlinkyOn(false);
    }, 1000);
  }, [isVisible]);

  // Define the scrollListener inside useEffect or use useCallback
  useEffect(() => {
    const scrollListener = () => {
      const p = getScrollPercent(); // Assuming getScrollPercent is defined elsewhere

      if (p > 1 && isVisible !== true) {
        setVisible(true);
      } else {
        setVisible(false);
      }

      //check if page is an article page (has url with /post/)
      if (window.location.pathname.includes("/post/")) {
        const currentScrollPos = window?.pageYOffset;

        if (currentScrollPos > 750 && !hideOffTop) {
          setHideOffTop(true);
        } else {
          setHideOffTop(false);
        }

        //check if user is scrolling upward direction
        if (prevScrollPos.current > currentScrollPos) {
          setHideOffTop(false);
        }
        prevScrollPos.current = currentScrollPos;
      }
    };

    window.addEventListener("scroll", scrollListener);

    // Clean up function
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <>
      <nav
        id="main-nav"
        className={` fixed ${hideOffTop ? "-mt-20" : ""} top-0 ${
          navType == "full" ? "" : "md:top-2"
        }  w-full transition transition-all duration-1000`}
        style={{ zIndex: 99 }}
      >
        <div
          className={`w-full ${
            navType == "full"
              ? "bg-white border-b border-gray-200 "
              : `${
                  isVisible
                    ? "bg-white bg-opacity-[88%] shadow-sm md:w-[50rem] lg:w-[62rem]"
                    : "md:w-[97%] "
                }  md:rounded-2xl p-1`
          } transition transition-all duration-700 search-wide ${
            navType == "full"
              ? "max-w-full"
              : maxWidth
              ? maxWidth
              : "max-w-[1020px]"
          }  backdrop-blur-lg mx-auto p-1 px-1 pl-4`}
        >
          <div
            className={`${
              maxWidth ? maxWidth : "max-w-[1020px]"
            } mx-auto relative flex h-9 items-center justify-between`}
          >
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" as="/">
                <>
                  <img
                    className={`xl:hidden transition transition-all duration-1000 h-8 w-auto`}
                    src="/static/images/logo-small.svg"
                    alt="Prototypr Logo"
                  />
                  <img
                    className={`xl:block ${
                      isVisible
                        ? "w-[25px] object-left-top object-cover drop-shadow-md"
                        : "object-cover object-left-top w-[109px]"
                    } transition transition-all duration-1000 hidden h-7 w-auto `}
                    src={`/static/images/prototypr_logo.svg`}
                    alt="Prototypr Logo"
                  />
                </>
              </Link>
              <div
                className={`${
                  blinkyOn ? "animate-pulse" : "opacity-0"
                } h-[28px] bg-gray-500/70 w-[2px]`}
              ></div>
              <div className="">
                <SearchModal />
              </div>
            </div>
            <div className="flex items-center h-9">
              <div className="hidden sm:ml-6 lg:block">
                <MenuItems />
              </div>
            </div>
            <div
              className={`items-center sm:static sm:inset-auto flex mr-[52px] sm:mr-16`}
            >
              <NavigationMenu>
                <NavigationMenuList>
                  <LocationMenu
                    user={user}
                    hideLocaleSwitcher={hideLocaleSwitcher}
                    collapsed={collapsed}
                    showWriteButton={showWriteButton}
                  />
                </NavigationMenuList>
              </NavigationMenu>
              <div className="relative">
                <UserMenu userLoading={false} user={user} />
              </div>
              {sponsor ? <NavSponsor sponsor={sponsor} /> : null}
              <div>&nbsp;</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
