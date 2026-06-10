"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "首頁", en: "HOME" },
  { href: "/about", label: "關於我們", en: "ABOUT" },
  { href: "/services", label: "服務項目", en: "SERVICE" },
  { href: "/contact", label: "聯絡我們", en: "CONTACT" },
  { href: "/booking", label: "預約諮詢", en: "BOOKING" },
  { href: "/partner-login", label: "工作夥伴登入", en: "PARTNER" },
  { href: "/parent-login", label: "家長登入", en: "PARENT" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8C08F]/25 bg-[linear-gradient(180deg,rgba(14,20,52,0.96)_0%,rgba(28,36,84,0.94)_55%,rgba(34,42,87,0.92)_100%)] text-[#F7EED8] shadow-[0_12px_40px_rgba(8,12,30,0.42)] backdrop-blur-xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#F1D9A6]/70 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-[#CBAE6E]/40 to-transparent" />
      <div className="pointer-events-none absolute left-[8%] top-3 h-1.5 w-1.5 rounded-full bg-[#F8E7B6]/80 blur-[1px]" />
      <div className="pointer-events-none absolute left-[22%] top-6 h-1 w-1 rounded-full bg-[#F6D98E]/70" />
      <div className="pointer-events-none absolute right-[18%] top-4 h-1.5 w-1.5 rounded-full bg-[#F8E7B6]/70 blur-[1px]" />
      <div className="pointer-events-none absolute right-[9%] top-7 h-1 w-1 rounded-full bg-[#E9CC88]/70" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link href="/" className="flex items-center gap-3" onClick={closeMenu}>
          <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-[#D8C08F]/60 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.14),rgba(255,255,255,0.03)_45%,rgba(255,255,255,0.02)_100%)] shadow-[0_0_0_1px_rgba(255,240,200,0.08),0_0_18px_rgba(216,192,143,0.18),inset_0_0_12px_rgba(255,245,220,0.06)] sm:h-16 sm:w-16">
            <Image
              src="/logo.png"
              alt="希構整合工作室 Logo"
              width={56}
              height={56}
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
              priority
            />
          </div>

          <div>
            <p className="text-base font-semibold tracking-[0.08em] text-[#F8F0DD] drop-shadow-[0_0_10px_rgba(255,240,210,0.08)] sm:text-lg sm:tracking-[0.14em]">
              希構整合工作室
            </p>
            <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#DCC38F] sm:text-[11px] sm:tracking-[0.38em]">
              XIGOU STUDIO
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 xl:flex">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className="group relative text-center"
              >
                <p
                  className={`text-sm font-medium tracking-[0.08em] transition duration-300 ${
                    isActive
                      ? "text-[#FFF3D5]"
                      : "text-[#E8DDC0]/88 group-hover:text-[#FFF6DE]"
                  }`}
                >
                  {item.label}
                </p>
                <p
                  className={`mt-1 text-[10px] uppercase tracking-[0.24em] transition duration-300 ${
                    isActive
                      ? "text-[#E4C98F]"
                      : "text-[#CDB98A]/75 group-hover:text-[#E9D29D]"
                  }`}
                >
                  {item.en}
                </p>
                <div
                  className={`mx-auto mt-2 h-[2px] rounded-full bg-gradient-to-r from-[#CDA85A] via-[#F5DEAA] to-[#CDA85A] transition-all duration-300 ${
                    isActive
                      ? "w-10 opacity-100"
                      : "w-0 opacity-0 group-hover:w-10 group-hover:opacity-100"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="hidden xl:block">
          <Link
            href="/contact"
            className="rounded-full border border-[#D8C08F] bg-[linear-gradient(180deg,#FFF8ED_0%,#F4E8D7_100%)] px-5 py-2.5 text-sm font-semibold tracking-[0.14em] text-[#2D2B4A] shadow-[0_6px_18px_rgba(216,192,143,0.22),inset_0_1px_0_rgba(255,255,255,0.65)] transition duration-300 hover:-translate-y-[1px] hover:bg-[linear-gradient(180deg,#FFFDF6_0%,#F7EBDC_100%)]"
          >
            聯絡我們
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#D8C08F]/50 bg-white/5 text-[#F8F0DD] shadow-[0_0_18px_rgba(216,192,143,0.12)] transition hover:bg-white/10 xl:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="切換選單"
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col items-center justify-center gap-1.5">
            <span
              className={`block h-[2px] w-5 rounded-full bg-[#F3E6C6] transition ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-[#F3E6C6] transition ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-[#F3E6C6] transition ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-[#D8C08F]/20 bg-[linear-gradient(180deg,rgba(18,24,58,0.98)_0%,rgba(28,36,84,0.96)_100%)] xl:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={`rounded-2xl border px-4 py-3 transition ${
                      isActive
                        ? "border-[#E4C98F]/70 bg-white/10 text-[#FFF3D5]"
                        : "border-white/10 bg-white/[0.03] text-[#E8DDC0]/90 hover:border-[#D8C08F]/40 hover:bg-white/[0.06]"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-medium tracking-[0.08em]">
                        {item.label}
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.24em] text-[#DCC38F]">
                        {item.en}
                      </span>
                    </div>
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-[#D8C08F] bg-[linear-gradient(180deg,#FFF8ED_0%,#F4E8D7_100%)] px-5 py-3 text-sm font-semibold tracking-[0.14em] text-[#2D2B4A] shadow-[0_6px_18px_rgba(216,192,143,0.22),inset_0_1px_0_rgba(255,255,255,0.65)] transition hover:bg-[linear-gradient(180deg,#FFFDF6_0%,#F7EBDC_100%)]"
            >
              聯絡我們
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}