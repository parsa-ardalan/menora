import Image from "next/image";
import Link from "next/link";

const footerLinks = [
    { label: "صفحه اصلی", href: "/" },
    { label: "منو", href: "/menu" },
    { label: "درباره ما", href: "/about" },
];

export default function Footer() {
    return (
        <footer className="border-t border-stone-200 bg-white px-5 pb-6 pt-10 sm:px-8">
            <div className="mx-auto max-w-6xl">

                <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-3">
                            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl">
                                <Image
                                    fill
                                    src="/general/logo.png"
                                    alt="Menora"
                                    className="object-cover"
                                />
                            </div>

                            <div>
                                <p className="text-md font-bold text-primary">
                                    Menora
                                </p>

                                <p className="mt-0.5 text-xs text-gray-500">
                                    مدیریت: اردلان
                                </p>
                            </div>
                        </div>

                        <p className="mt-5 max-w-sm text-sm leading-6 text-gray-500">
                            منورا، راهکاری ساده و مدرن برای ساخت و مدیریت
                            منوی دیجیتال کافه و رستوران شما.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <p className="mb-4 text-sm font-bold text-primary">
                            دسترسی سریع
                        </p>

                        <nav className="flex flex-col items-start gap-3">
                            {footerLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm text-gray-500 transition-colors hover:text-primary"
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Contact */}
                    <div>
                        <p className="mb-4 text-sm font-bold text-primary">
                            ارتباط با ما
                        </p>

                        <div className="flex flex-col gap-3 text-sm text-gray-500">

                            <a
                                href="tel:+989375632332"
                                className="flex items-center gap-3 transition-colors hover:text-primary"
                            >
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-stone-100 text-primary">
                                    ☎
                                </span>

                                <span dir="ltr">
                                    +98 937 563 2332
                                </span>
                            </a>

                            <a
                                href="mailto:menora.menu@gmail.com"
                                className="flex items-center gap-3 transition-colors hover:text-primary"
                            >
                                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-stone-100 text-primary">
                                    @
                                </span>

                                <span>
                                    menora.menu@gmail.com
                                </span>
                            </a>

                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-10 flex flex-col gap-3 border-t border-stone-100 pt-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between">

                    <p>
                        © {new Date().getFullYear()} Menora. تمامی حقوق محفوظ است.
                    </p>

                    <p>
                        طراحی و توسعه با ♥ برای کسب‌وکارهای مدرن
                    </p>

                </div>

            </div>
        </footer>
    );
}