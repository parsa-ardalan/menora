import Image from "next/image";
import Link from "next/link";

export default function Hero() {

    return (
        <header className="w-full min-h-[calc(100vh-80px)] grid grid-cols-1 lg:grid-cols-5">

            {/* banner */}
            <div className="col-span-1 lg:col-span-3 h-[280px] sm:h-[360px] md:h-[440px] lg:h-full relative z-10">
                <Image
                    src="/general/banner.png"
                    fill
                    priority
                    alt="banner"
                    className="object-cover"
                />
            </div>


            {/* content */}
            <div className="col-span-1 lg:col-span-2 flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 md:px-14 md:py-16 lg:px-12 xl:px-20 lg:py-20 z-20 header-content">

                {/* title */}
                <h1 className="animate-fade-up text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-black tracking-tight text-primary">
                    منورا
                </h1>


                {/* subtitle */}
                <p className="animate-fade-up-delay-1 mt-4 sm:mt-5 max-w-xl text-xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl font-bold leading-[1.8] sm:leading-[2] text-primary">
                    تجربه‌ای مدرن از منوهای دیجیتال
                    کافه و رستوران
                </p>


                {/* description */}
                <p className="animate-fade-up-delay-2 mt-4 sm:mt-5 max-w-lg text-sm sm:text-base leading-7 sm:leading-8 text-gray-500">
                    منورا به شما کمک می‌کند منوی مجموعه خود را
                    به شکلی مدرن، سریع و حرفه‌ای در اختیار مشتریان
                    قرار دهید.
                </p>


                {/* actions */}
                <div className="animate-fade-up-delay-3 mt-8 sm:mt-10 flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">

                    <Link
                        href="/contact"
                        className="rounded-full bg-primary px-6 sm:px-8 py-3.5 sm:py-4 text-center text-sm font-bold text-white transition duration-300 hover:opacity-90"
                    >
                        شروع همکاری
                    </Link>

                    <Link
                        href="/projects"
                        className="rounded-full border border-primary px-6 sm:px-8 py-3.5 sm:py-4 text-center text-sm font-bold text-primary transition hover:bg-primary hover:text-white"
                    >
                        مشاهده نمونه کارها
                    </Link>

                </div>


                {/* features */}
                <div className="animate-fade-up-delay-4 mt-10 sm:mt-12 flex items-center gap-5 sm:gap-8">

                    <div>
                        <p className="text-base sm:text-lg font-black text-primary">
                            سریع
                        </p>
                        <p className="mt-1 text-[11px] sm:text-xs text-gray-400">
                            دسترسی آسان
                        </p>
                    </div>

                    <div className="h-7 sm:h-8 w-px bg-gray-200" />

                    <div>
                        <p className="text-base sm:text-lg font-black text-primary">
                            مدرن
                        </p>
                        <p className="mt-1 text-[11px] sm:text-xs text-gray-400">
                            طراحی اختصاصی
                        </p>
                    </div>

                    <div className="h-7 sm:h-8 w-px bg-gray-200" />

                    <div>
                        <p className="text-base sm:text-lg font-black text-primary">
                            هوشمند
                        </p>
                        <p className="mt-1 text-[11px] sm:text-xs text-gray-400">
                            مدیریت ساده
                        </p>
                    </div>

                </div>

            </div>

        </header>
    )
}