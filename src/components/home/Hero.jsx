import Image from "next/image";

export default function Hero() {

    return (
        <header className="w-screen h-2/3 grid grid-cols-5 mt-20">

            {/* banner */}
            <div className="col-span-5 lg:col-span-3 h-full relative z-10">
                <Image
                    src="/general/banner.png"
                    fill
                    alt="banner"
                    className="object-cover"
                />
            </div>


            {/* content */}
            <div className="col-span-5 lg:col-span-2 h-full flex flex-col justify-center p-20 z-20 header-content">

                {/* title */}
                <h1 className="animate-fade-up text-4xl font-black tracking-tight text-primary">
                    منورا
                </h1>


                {/* subtitle */}
                <p className="animate-fade-up-delay-1 mt-5 max-w-xl text-2xl font-bold leading-[2] text-primary">
                    تجربه‌ای مدرن از منوهای دیجیتال
                    کافه و رستوران
                </p>


                {/* description */}
                <p className="animate-fade-up-delay-2 mt-5 max-w-lg text-base leading-8 text-gray-500">
                    منورا به شما کمک می‌کند منوی مجموعه خود را
                    به شکلی مدرن، سریع و حرفه‌ای در اختیار مشتریان
                    قرار دهید.
                </p>


                {/* actions */}
                <div className="animate-fade-up-delay-3 mt-10 flex items-center gap-4">

                    <a
                        href="/contact"
                        className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-white transition duration-300"
                    >
                        شروع همکاری
                    </a>

                    <a
                        href="/projects"
                        className="rounded-full border border-primary px-8 py-4 text-sm font-bold text-primary transition"
                    >
                        مشاهده نمونه کارها
                    </a>

                </div>


                {/* features */}
                <div className="animate-fade-up-delay-4 mt-12 flex items-center gap-8">

                    <div>
                        <p className="text-lg font-black text-primary">
                            سریع
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                            دسترسی آسان
                        </p>
                    </div>

                    <div className="h-8 w-px bg-gray-200" />

                    <div>
                        <p className="text-lg font-black text-primary">
                            مدرن
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                            طراحی اختصاصی
                        </p>
                    </div>

                    <div className="h-8 w-px bg-gray-200" />

                    <div>
                        <p className="text-lg font-black text-primary">
                            هوشمند
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                            مدیریت ساده
                        </p>
                    </div>

                </div>

            </div>

        </header>
    )
}