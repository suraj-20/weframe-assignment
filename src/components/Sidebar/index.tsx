"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome5Line } from "react-icons/ri";
import { PiNote } from "react-icons/pi";
import { TbUserSquareRounded } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { IoDesktopOutline, IoSettingsOutline } from "react-icons/io5";
import { IoIosAnalytics } from "react-icons/io";
import { LuSquarePlay } from "react-icons/lu";
import { BsArrowsMove } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { MdOutlineSubscriptions } from "react-icons/md";

const navLinks = [
  { label: "Dashboard", href: "/dashboard", icon: <RiHome5Line /> },
  { label: "Content", href: "/content", icon: <PiNote /> },
  { label: "User", href: "/user", icon: <TbUserSquareRounded /> },
  { label: "Task", href: "/task", icon: <HiOutlineUsers /> },
  { label: "App/Web", href: "/app-web", icon: <IoDesktopOutline /> },
  { label: "Analytics", href: "/analytics", icon: <IoIosAnalytics /> },
  { label: "Media", href: "/media", icon: <LuSquarePlay /> },
  { label: "Customize", href: "/customize", icon: <BsArrowsMove /> },
  { label: "Notifications", href: "/notifications", icon: <FaRegBell /> },
  {
    label: "Subscription",
    href: "/subscription",
    icon: <MdOutlineSubscriptions />,
  },
  { label: "Settings", href: "/settings", icon: <IoSettingsOutline /> },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div
      className="w-64 bg-white shadow-md flex flex-col"
      style={{
        width: "200px",
        padding: "80px 30px 0rem 30px",
        boxShadow: "0 3px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <nav className="flex flex-col gap-x-4 gap-y-4">
        {navLinks.map(({ href, label, icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center transition-colors duration-200`}
              style={{
                padding: "16px 20px",
                gap: "10px",
                backgroundColor: isActive ? "#1C1442" : "transparent",
                borderRadius: isActive ? "8px" : "0px",
                color: isActive ? "#ffffff" : "#374151",
              }}
            >
              {icon}
              <span style={{ fontSize: "14px", fontWeight: "600" }}>
                {label}
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar;
