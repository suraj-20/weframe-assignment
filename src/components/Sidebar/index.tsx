"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import navLinks from "./menuData";

const Sidebar = () => {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 800;
      setIsMobile(isNowMobile);
      if (!isNowMobile) setIsExpanded(false); // Reset on desktop
    };

    handleResize(); // Set initially
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsExpanded((prev) => !prev);
  };

  const isOverlay = isMobile && isExpanded;

  return (
    <>
      {/* Overlay for expanded menu on mobile */}
      {isOverlay && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={() => setIsExpanded(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`bg-white shadow-md flex flex-col top-0 left-0 z-40 transition-all duration-300 ${
          isOverlay ? "fixed h-full" : "relative"
        }`}
        style={{
          width: isMobile ? (isExpanded ? "200px" : "70px") : "200px",
          padding: isMobile
            ? isExpanded
              ? "80px 20px 0 20px"
              : "80px 10px 0 10px"
            : "80px 30px 0 30px",
          boxShadow: "0 3px 3px rgba(0, 0, 0, 0.2)",
          backgroundColor: "#ffffff",
        }}
      >
        {/* Hamburger Button */}
        {isMobile && (
          <button
            onClick={toggleSidebar}
            className="relative top-4 left-4 z-50 text-2xl p-2 bg-white shadow-md rounded-md"
            style={{
              top: "-70px",
              left: "16px",
              width: "40px",
              height: "40px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              border: "none",
              backgroundColor: "transparent",
            }}
          >
            <RxHamburgerMenu />
          </button>
        )}
        <nav className="flex flex-col gap-y-4">
          {navLinks.map(({ href, label, icon }) => {
            const isActive = pathname === href;

            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center transition-colors duration-200 ${
                  isMobile && !isExpanded ? "justify-center" : ""
                }`}
                style={{
                  padding: "16px",
                  gap: "10px",
                  backgroundColor: isActive ? "#1C1442" : "transparent",
                  borderRadius: isActive ? "8px" : "0px",
                  color: isActive ? "#ffffff" : "#374151",
                }}
              >
                {icon}
                {!isMobile || isExpanded ? (
                  <span style={{ fontSize: "14px", fontWeight: "600" }}>
                    {label}
                  </span>
                ) : null}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
