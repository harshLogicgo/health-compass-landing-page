"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useState } from "react";
import { Menu, X } from "lucide-react";
import { Images } from "@/data/images";
import { navItems } from "@/data/navItems";
import { usePathname } from "next/navigation";
import MailchimpForm from "./MailChimpForm";
import { ROUTES } from "@/constants/route";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const pathname = usePathname(); // ✅ get current path

  const handleCloseMenu = useCallback(() => setMobileMenuOpen(false), []);
  const handleOpenModal = useCallback(() => {
    setIsModal(true), handleCloseMenu();
  }, []);
  const handleCloseModal = useCallback(() => setIsModal(false), []);

  const isActive = (path) => pathname.includes(path);
  return (
    <>
      <header className="w-full bg-primary z-[50]">
        <div className="container mx-auto px-4">
          <div className="py-2  text-xs text-white flex justify-center items-center font-semibold">
            <p>
              Supplements Simplified for You -{" "}
              <Link href="#" className="underline">
                Learn More
              </Link>
            </p>
          </div>
        </div>
        <nav className="bg-white relative top-0 shadow-lg">
          <div className="relative">
            <div className="container mx-auto px-4 py-4">
              <div className="flex justify-between items-center">
                <Link href="/" className="flex items-center">
                  <img
                    src={Images.logo}
                    alt="Health Compass Logo"
                    className="mr-2 w-[75%]"
                  />
                </Link>

                {/* Mobile menu button */}
                <button
                  className="md:hidden text-text-primary"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Desktop navigation */}
                <div className="hidden md:flex items-center space-x-8">
                  <ul className="flex space-x-6 md:me-[60px] xl:me-[100px]">
                    {navItems.map((item, index) => {
                      const title = item.title;
                      const path = item.path;
                      return (
                        <li key={index}>
                          <Link
                            onClick={handleCloseMenu}
                            href={path}
                            className={`${
                              isActive(path)
                                ? "nav-link text-primary"
                                : "nav-link text-black"
                            } `}
                          >
                            {title}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="hidden md:flex space-x-3">
                  <Link
                    target="_blank"
                    href={ROUTES.LOGIN}
                    className="btn-outline border-primary text-primary"
                  >
                    Log in
                  </Link>
                  {/* <Link href="/signup" className="btn-primary">
                  Sign up
                </Link> */}
                  <button
                    onClick={handleOpenModal}
                    className="btn-primary cursor-pointer"
                  >
                    Sign up
                  </button>
                </div>
              </div>

              {/* Mobile navigation */}
            </div>
            <div
              className={`md:hidden absolute left-0 top-full w-full bg-white z-[20] transition-all duration-200 ${
                mobileMenuOpen
                  ? "translate-y-0 opacity-100 pointer-events-auto"
                  : "-translate-y-4 opacity-0 pointer-events-none"
              }`}
            >
              <ul className="flex flex-col space-y-4 px-4 pt-5">
                {navItems.map((item, index) => {
                  const title = item.title;
                  const path = item.path;
                  return (
                    <li key={index}>
                      <Link
                        onClick={handleCloseMenu}
                        href={path}
                        className={`${
                          isActive(path)
                            ? "nav-link text-primary"
                            : "nav-link text-black"
                        } block`}
                      >
                        {title}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="flex space-x-3 mt-7 px-4 pb-5">
                <Link
                  target="_blank"
                  href={ROUTES.LOGIN}
                  className="btn-outline border-primary text-primary"
                >
                  Log in
                </Link>
                <button
                  onClick={handleOpenModal}
                  className="btn-primary cursor-pointer"
                >
                  Sign up
                </button>
                {/* <Link href="/signup" className="btn-primary">
                Sign up
              </Link> */}
              </div>
            </div>
          </div>
        </nav>
      </header>
      <MailchimpForm isOpen={isModal} onHide={handleCloseModal} />
    </>
  );
};

export default Header;
