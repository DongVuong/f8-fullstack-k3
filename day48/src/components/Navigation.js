"use client";
import { ThemeContext } from "@/context/ThemesProvider";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import F8 from "../assets/image/F8.jpeg";
import Image from "next/image";
import "./navigation.scss";
import LanguageChange from "./LanguageChange";

function Navigation() {
  const pathname = usePathname();
  const { theme, handleTheme } = useContext(ThemeContext);
  const handleChange = () => {
    if (theme === "light") handleTheme("dark");
    else handleTheme("light");
  };
  return (
    <header className="header-main">
      <div className="container">
        <nav className="nav-main">
          <Link className="logo" href="/">
            <span>Logo</span>
          </Link>

          <ul className="nav-list">
            <li className="nav-item">
              <Link
                className={pathname === "/" ? "active" : "nav-link"}
                href={"/"}
              >
                <span>Home</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className="action-buttons">
          <a
            className="btn-website-f8"
            href="https://fullstack.edu.vn/@son-dang"
            target="_blank"
          >
            {/* <Image src={F8} alt="F8" style={{ width: "30", height: "30" }} /> */}
            F8
          </a>
          <a
            className="btn-facebook-f8"
            href="https://www.facebook.com/groups/f8official"
            target="_blank"
          >
            FB
          </a>
          <a
            className="btn-youtube-f8"
            href="https://www.youtube.com/c/F8VNOfficial"
            target="_blank"
          >
            YTB
          </a>
          <button className="btn-switch-theme" onClick={handleChange}>
            {theme === "light" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.8}
                stroke="currentColor"
                className="w-6 h-6 icon-dark"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 icon-light"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </button>
          {/* <button onClick={handleClick}>{nextLang}</button> */}
          <LanguageChange />
        </div>
      </div>
    </header>
  );
}

export default Navigation;
