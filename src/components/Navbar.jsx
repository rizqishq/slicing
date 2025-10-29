import { useState } from "react";
import { Send, Menu, X } from "lucide-react";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <section className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
            <div className="container mx-auto max-w-screen-2xl 2xl:max-w-[1440px] flex items-center justify-between px-6 md:px-12 py-4">
                {/* Logo */}
                <h1 className="text-lg font-bold text-gray-800">MyProfile</h1>

                {/* Tombol hamburger (mobile) */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setOpen(!open)}
                >
                    {open ? (
                        <X className="w-6 h-6" />
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </button>

                {/* Menu navigasi */}
                <ul
                    className={`absolute md:static left-0 top-full w-full md:w-auto bg-white md:bg-transparent flex flex-col md:flex-row md:items-center text-sm font-semibold text-gray-700
            space-y-4 md:space-y-0 md:space-x-8 px-8 md:px-0 py-4 md:py-0 transition-all duration-300 shadow-md md:shadow-none
            ${open ? "opacity-100 visible" : "opacity-0 invisible md:visible md:opacity-100"}`}
                >
                    <li>
                        <a href="#about" className="hover:text-indigo-500">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#skills" className="hover:text-indigo-500">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="#portfolio" className="hover:text-indigo-500">
                            Portfolio
                        </a>
                    </li>
                    <li>
                        <a href="#contact" className="hover:text-indigo-500">
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Tombol Hire Me */}
                <button className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition">
                    <Send className="w-4 h-4" />
                    <span>Hire Me</span>
                </button>
            </div>
        </section>
    );
}
