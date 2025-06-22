"use client";

import siteInfo from "@/config/site.info";
import useScrollDirection from "@/hooks/use-scroll-direction";
import useScrollVisibility from "@/hooks/use-scroll-visibility";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "../container";
import { Button } from "../ui/button";
import { NavUser } from "./nav-user";

const Navbar = ({
  isHidable = true,
  transparent = false,
}: {
  isHidable?: boolean;
  transparent?: boolean;
}) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const { isVisible } = useScrollVisibility(150);
  const { data } = useSession();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about-us" },
    { name: "How It works", href: "/how-it-works" },
    { name: "Contact Us", href: "/contact-us" },
  ];
  return (
    <motion.nav
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: isHidable ? (scrollDirection === "down" ? 0 : 1) : 1,
        y: isHidable ? (scrollDirection === "down" ? -100 : 0) : 0,
        transition: { duration: 0.5, ease: "easeInOut" },
      }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 bg-white ",
        {
          "shadow-md": isHidable && scrollDirection === "down",
        },
        // { "bg-transparent duration-500": transparent && !isVisible },
        { "shadow-md": transparent && isVisible }
      )}
    >
      <Container className="relative">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex items-center justify-center text-primary-foreground"
            >
              <Image
                className="h-[80px] w-full py-1"
                src={siteInfo.logo}
                alt={siteInfo.name}
                height={306}
                width={500}
              />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="focus:outline-none"
              aria-label="toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 8h16M4 16h16"}
                />
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden lg:flex gap-4 items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className={cn(
                  "px-4 py-2 transition-colors duration-300 transform",
                  pathname === link.href
                    ? "bg-secondary text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
              >
                {link.name}
              </Link>
            ))}

            {data?.user ? (
              <NavUser side="bottom" />
            ) : (
              <Link href="/login">
                <Button size="lg" className="rounded-none">
                  LOGIN
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="lg:hidden absolute z-50 top-full left-0 w-full bg-white dark:bg-gray-800 shadow-md py-4 px-4">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className={cn(
                    "block px-4 py-2 text-sm font-medium transition-colors duration-200",
                    pathname === link.href
                      ? "bg-secondary text-white"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  )}
                >
                  {link.name}
                </Link>
              ))}

              {data?.user ? (
                <NavUser side="bottom" />
              ) : (
                <Link href="/login">
                  <Button size="lg" className="w-full rounded-none">
                    LOGIN
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </Container>
    </motion.nav>
  );
};

export default Navbar;
