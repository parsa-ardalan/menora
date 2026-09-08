"use client"

import Image from "next/image"
import Link from "next/link";
import { useState } from "react"

export default function Header() {

    const pages = [
        {
            name: "خانه",
            link: "/"
        },
        {
            name: "نمونه کار",
            link: "/projects"
        },
        {
            name: "تماس با ما",
            link: "/contact"
        },
        {
            name: "درباره منورا",
            link: "/about"
        },
        {
            name: "راهنمایی",
            link: "/guide"
        }
    ]

    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => {
        setIsOpen(false)
    }

    return (
        <>

            {/* Desktop Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 hidden h-20 items-center  px-6 backdrop-blur-xl md:flex lg:px-16">

                {/* Logo */}
                <div className="relative h-20 w-20 shrink-0">
                    <Image
                        src="/general/logo.png"
                        fill
                        alt="منورا"
                        className="object-contain"
                    />
                </div>


                {/* Navigation */}
                <div className="mr-auto flex items-center gap-8 text-sm font-medium text-[#12304a]">
                    {
                        pages.map((page) => (
                            <Link
                                key={page.name}
                                href={page.link}
                                className="transition-colors hover:text-[#2878c8]"
                            >
                                {page.name}
                            </Link>
                        ))
                    }
                </div>

            </nav>


            {/* Mobile Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between  px-5 backdrop-blur-xl md:hidden">

                {/* Logo */}
                <div className="relative h-20 w-20 shrink-0">
                    <Image
                        src="/general/logo.png"
                        fill
                        alt="منورا"
                        className="object-contain"
                    />
                </div>


                <div className="flex items-center gap-3">

                    {/* Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "بستن منو" : "باز کردن منو"}
                        className="flex h-10 w-10 items-center justify-center text-[#12304a]"
                    >

                        {isOpen ? (

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 6l12 12M18 6L6 18"
                                />
                            </svg>

                        ) : (

                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                className="h-6 w-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>

                        )}

                    </button>

                </div>


                {/* Mobile Menu */}
                <div
                    className={`absolute left-5 right-5 top-[76px] z-[100] overflow-hidden rounded-3xl border border-black/5 bg-white/90 shadow-xl backdrop-blur-xl transition-all duration-300 ${isOpen
                        ? "visible max-h-[500px] translate-y-0 opacity-100"
                        : "invisible max-h-0 -translate-y-2 opacity-0"
                        }`}
                >

                    <div className="p-3">
                        {
                            pages.map(page => (
                                <a
                                    key={page.link}
                                    href={page.link}
                                    onClick={closeMenu}
                                    className="block rounded-2xl px-4 py-3 text-sm font-medium text-[#12304a] transition hover:bg-[#f5f8fb]"
                                >
                                    {page.name}
                                </a>
                            ))
                        }
                    </div>

                </div>

            </nav>

        </>
    )
}