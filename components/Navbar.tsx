"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Beranda", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Program", href: "/program" },
  { label: "Berita", href: "/berita" },
  { label: "Pelatihan", href: "/pelatihan" },
  { label: "Bantuan Pendidikan", href: "/bantuan-pendidikan" },
  { label: "Info Beasiswa", href: "/beasiswa" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 sm:pt-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-white/20 bg-white/70 px-4 py-3 shadow-lg shadow-navy-deep/5 backdrop-blur-xl sm:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-sm font-bold text-white">
            B
          </span>
          <span className="text-sm font-bold leading-tight text-navy-deep sm:text-base">
            BMPS
            <br className="sm:hidden" /> Bogor
          </span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-blue-light hover:text-blue-royal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/sekolah"
            className="rounded-full px-4 py-2 text-sm font-semibold text-navy-deep transition hover:bg-blue-light"
          >
            Daftar Sekolah & Yayasan
          </Link>
          <Link
            href="/login"
            className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-royal"
          >
            Login
          </Link>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-navy-deep lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div
        className={cn(
          "mx-auto mt-2 max-w-6xl overflow-hidden rounded-3xl border border-white/20 bg-white/95 shadow-lg backdrop-blur-xl transition-all duration-300 lg:hidden",
          open ? "max-h-[32rem] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav className="flex flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-600 transition hover:bg-blue-light hover:text-blue-royal"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/sekolah"
            onClick={() => setOpen(false)}
            className="rounded-xl px-4 py-3 text-sm font-semibold text-navy-deep transition hover:bg-blue-light"
          >
            Daftar Sekolah & Yayasan
          </Link>
          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="mt-1 rounded-xl bg-navy px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition hover:bg-blue-royal"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}
