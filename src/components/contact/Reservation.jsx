export default function Reservation() {

    return (
        <section className="px-5 pb-10 sm:px-8 lg:px-16 animate-fade-up-delay-3">
            <div className="mx-auto max-w-6xl">

                <div className="rounded-3xl border border-stone-200 bg-white px-6 py-8 sm:px-10 sm:py-10 lg:px-12">

                    <div className="flex flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">

                        <div>

                            <span className="text-xs font-semibold text-primary">
                                رزرو منو
                            </span>

                            <h2 className="mt-2 text-2xl font-bold leading-tight text-stone-950 sm:text-3xl">
                                آماده شروع همکاری هستید؟
                            </h2>

                            <p className="mt-3 max-w-lg text-sm leading-6 text-stone-500">
                                برای راه‌اندازی منوی آنلاین اختصاصی کسب‌وکارتان، با ما در ارتباط باشید.
                            </p>

                        </div>

                        <a
                            href="tel:+989046814382"
                            className="inline-flex h-12 shrink-0 items-center justify-center rounded-xl bg-stone-950 px-6 text-sm font-semibold text-white transition hover:bg-blue-600"
                        >
                            تماس برای رزرو
                        </a>

                    </div>

                </div>

            </div>
        </section>
    )
}