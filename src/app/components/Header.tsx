"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LanguageChanger from "../components/LanguageChanger";

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link href="/">Demo for i18n</Link>
        </div>
        <div className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:text-gray-400">
            {t("home")}
          </Link>
          <Link href="/about" className="hover:text-gray-400">
            {t("join_us")}
          </Link>
          <LanguageChanger />
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <XIcon className="h-6 w-6" />
            ) : (
              <MenuIcon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-[1a202c]">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            <Link href="/" className="hover:text-gray-400">
              {t("home")}
            </Link>
            <Link href="/about" className="hover:text-gray-400">
              {t("join_us")}
            </Link>
            <LanguageChanger />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
