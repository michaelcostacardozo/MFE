import { useEffect, useRef, useCallback, useState } from "react";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
  XMarkIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

import Link from "next/link";
import { useRouter } from "next/router";

import { debounce } from "@/utils/generic";
import { breakpoints, headerHeight } from "@/constants/styles";
import { getLocales } from "@/locales/index";

import { HeaderProps } from "./types";

import styles from "./styles";

import HeaderLogo from "./components/HeaderLogo";
import HeaderMenuDesktopCategories from "./components/HeaderMenuDesktopCategories";
import HeaderMenuDesktopDropdown from "./components/HeaderMenuDesktopDropdown";
import {
  CART_PAGE_LINK,
  HOME_PAGE_LINK,
  LOGIN_PAGE_LINK,
  SEARCH_PAGE_LINK,
} from "@/constants/index";

const Header: React.FC<HeaderProps> = ({global, menuCategories : categories, stickyHeader}) => {  
  const { loginText, searchText } = getLocales("en", "common");

  const [activeCategory, setActiveCategory] = useState(null);  
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openSearchbar, setOpenSearchbar] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [products, setProducts] = useState([]);
  const [showTypeahead, setShowTypeahead] = useState(false);
  const [prefetchValue, setPrefetchValue] = useState("");

  const headerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef(null);
  const inputContentRef = useRef(null);

  const router = useRouter();

  const isSticky = useCallback(() => {
    if (!stickyHeader) {
      const scrollTop = window.scrollY;

      headerRef?.current?.classList?.toggle(
        "h-header__compressed",
        scrollTop >= (isDesktop ? headerHeight.desktop : headerHeight.mobile)
      );
    }
  }, []);

  const onResize = useCallback(() => {
    if (window.innerWidth >= breakpoints.lg && !isDesktop) {
      setIsDesktop(true);
    } else if (window.innerWidth < breakpoints.lg && isDesktop) {
      setIsDesktop(false);
    }
  }, [isDesktop]);

  const onSearch = useCallback(
    (event) => {
      const { value } = event.target;
      router.push({
        pathname: SEARCH_PAGE_LINK,
        query: {
          q: value,
        },
      });
    },
    [router]
  );

  const onInput = debounce(
    useCallback((event) => {
      const { value } = event.target;

      if (value.length > 0) {
        setPrefetchValue(value);        
      } else {
        setProducts([]);
      }
    }, []),
    300
  );

  const handleClick = useCallback(
    (e: MouseEvent) => {
      if (showTypeahead && !inputContentRef.current.contains(e.target)) {
        setShowTypeahead(false);
      }

      if (!showTypeahead && inputRef.current.contains(e.target)) {
        setShowTypeahead(true);
      }
    },
    [showTypeahead]
  );

  const handleLogin = useCallback(() => {}, []);

  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    window.addEventListener("resize", onResize);

    setIsDesktop(window.innerWidth >= breakpoints.lg);

    return () => {
      window.removeEventListener("scroll", isSticky);
      window.removeEventListener("resize", onResize);
    };
  }, [isSticky, onResize]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [handleClick]);

  return (
    <>
      <header>
        <div className="h-header__">
          <div
            className={`h-header container-fluid ${
              activeCategory || openSidebar ? "h-header__dropdown-open" : ""
            } ${stickyHeader ? "h-header__sticky" : ""}`}
            ref={headerRef}
          >
            <div className="h-header__container container">
              <Link href={HOME_PAGE_LINK} aria-label="home" title="home">
                <HeaderLogo title={'title'} logo={'header?.logo'} />
              </Link>

              <div className="h-header__mobile-content">
                <MagnifyingGlassIcon
                  width={24}
                  height={24}
                  title="search"
                  onClick={() => setOpenSearchbar(!openSearchbar)}
                />

                <Link href={CART_PAGE_LINK} aria-label="cart" title="cart">
                  <ShoppingCartIcon width={24} height={24} />
                </Link>

                {openSidebar ? (
                  <XMarkIcon
                    width={24}
                    height={24}
                    title="close"
                    onClick={() => setOpenSidebar(!openSidebar)}
                  />
                ) : (
                  <Bars3Icon
                    width={24}
                    height={24}
                    title="menu bar"
                    onClick={() => setOpenSidebar(!openSidebar)}
                  />
                )}
              </div>

              <div className="h-header__desktop-content h-header__desktop-search">
                <div className="h-header__input-content" ref={inputContentRef}>
                  <MagnifyingGlassIcon
                    width={20}
                    height={20}
                    stroke="white"
                    style={{
                      marginLeft: "0.5rem",
                      marginTop: "0.5rem",
                      position: "absolute",
                      zIndex: "100",
                    }}
                  />

                  <input
                    placeholder={searchText}
                    aria-label="search"
                    className="h-header__search-input"
                    onChange={(event) => onInput(event, event.target)}
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        onSearch(event);
                      }
                    }}
                    ref={inputRef}
                  />

                  {prefetchValue.length > 0 && (
                    <Link
                      href={{
                        pathname: SEARCH_PAGE_LINK,
                        query: {
                          q: prefetchValue,
                        },
                      }}
                      className="h-header__search-prefetch"
                    />
                  )}
                </div>
              </div>

              <div className="h-header__desktop-content h-header__desktop-icons">
                <div className="h-header__login">
                    <>
                      <UserIcon width={24} height={24} strokeWidth={2} />

                      <Link
                        title="login"
                        href={LOGIN_PAGE_LINK}
                        onClick={handleLogin}
                      >
                        {loginText}
                      </Link>
                    </>
                </div>

                <Link title="cart" href={CART_PAGE_LINK}>
                  <ShoppingCartIcon width={24} height={24} />
                </Link>
              </div>
            </div>

            <div className="h-header__desktop-content container">
              <HeaderMenuDesktopCategories
                menuCategories={categories}
                headerLinks={[]}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
              />
            </div>
          </div>
          <>
            <HeaderMenuDesktopDropdown
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              stickyHeader={stickyHeader}
            />
          </>
        </div>
      </header>

      <style jsx>{styles}</style>
    </>
  );
};

export default Header;
