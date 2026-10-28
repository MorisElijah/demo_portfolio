"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/book", label: "Book Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed top-0 w-full z-40 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-bold text-lg">Moris.dev</span>
        <ul className="flex gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={
                  pathname === l.href
                    ? "text-indigo-400 font-semibold"
                    : "text-gray-300 hover:text-white transition"
                }
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}