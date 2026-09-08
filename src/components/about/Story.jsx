export default function Story() {

    return (

        < section className="px-5 animate-fade-up-delay-1" >

            <div className="mx-auto max-w-6xl">

                <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

                    <div>

                        <span className="text-sm font-bold tracking-[0.25em] text-gray-400">
                           درباره ما
                        </span>

                        <h2 className="mt-5 text-2xl lg:text-3xl font-black leading-tight text-primary">
                            یک ایده ساده،
                            <br />
                            یک مسیر متفاوت
                        </h2>

                        <div className="mt-8 h-1 w-16 rounded-full bg-primary" />

                    </div>


                    <div className="relative">

                        <div className="absolute -right-4 -top-4 h-20 w-20 rounded-2xl border border-primary" />

                        <div className="relative rounded-[2rem] border border-gray-100 bg-white p-7 shadow-[0_20px_70px_rgba(0,0,0,0.05)] md:p-10">

                            <div className="flex items-start gap-5">

                                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-lg font-black text-white">
                                    ۱۴۰۵
                                </div>

                                <div>

                                    <h3 className="text-xl font-bold text-primary">
                                        شروع فعالیت منورا
                                    </h3>

                                    <p className="mt-2 text-sm text-gray-400">
                                        ۱ مهر ۱۴۰۵
                                    </p>

                                </div>

                            </div>

                            <div className="mt-8 space-y-4">

                                <p className="leading-8 text-gray-500">
                                    منورا فعالیت خودش را از
                                    <span className="font-bold text-primary">
                                        {" "}۱ مهر ۱۴۰۵{" "}
                                    </span>
                                    آغاز کرد؛ با یک ایده ساده اما متفاوت.
                                </p>

                                <p className="leading-8 text-gray-500">
                                    ما باور داریم منوی دیجیتال نباید فقط یک
                                    صفحه برای نمایش اسم و قیمت محصولات باشد.
                                    منو باید بخشی از هویت برند و تجربه مشتری باشد.
                                </p>

                                <p className="leading-8 text-gray-500">
                                    به همین دلیل منورا از ابتدا با تمرکز روی
                                    طراحی اختصاصی، تجربه کاربری و انعطاف‌پذیری
                                    ساخته شد.
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section >
    )
}