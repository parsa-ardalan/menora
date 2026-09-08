export default function Flexibility() {

    return (
        <section className="px-5 py-20 md:py-28 animate-fade-up-delay-3">

            <div className="mx-auto max-w-6xl">

                <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">

                    <div>

                        <span className="text-xs font-bold tracking-[0.25em] text-gray-400">
                            طراحی منعطف
                        </span>

                        <h2 className="mt-5 text-3xl font-black text-primary md:text-5xl">
                            یک منو،
                            <br />
                            متناسب با نیاز شما
                        </h2>

                    </div>

                    <p className="max-w-md leading-8 text-gray-500">
                        منورا شما را به یک مدل خاص محدود نمی‌کند. ساختار منو
                        بر اساس نیاز و نوع کسب‌وکار شما انتخاب و توسعه داده می‌شود.
                    </p>

                </div>


                <div className="mt-14 grid gap-5 md:grid-cols-2">

                    <div className="relative overflow-hidden rounded-[2rem] border border-gray-100 bg-gray-50 p-8 md:p-10">

                        <div className="relative">

                            <h3 className="mt-12 text-2xl font-black text-primary">
                                منوی استاتیک
                            </h3>

                            <p className="mt-4 max-w-lg leading-8 text-gray-500">
                                یک منوی سریع، ساده و حرفه‌ای برای نمایش محصولات،
                                دسته‌بندی‌ها، قیمت‌ها و اطلاعات مورد نیاز مشتری.
                            </p>

                            <div className="mt-10 flex gap-2">

                                <span className="h-2 w-16 rounded-full bg-primary" />
                                <span className="h-2 w-8 rounded-full bg-primary/20" />
                                <span className="h-2 w-4 rounded-full bg-primary/10" />

                            </div>

                        </div>

                    </div>

                    <div className="relative overflow-hidden rounded-[2rem] bg-primary p-8 md:p-10">

                        <div className="relative">

                            <h3 className="mt-12 text-2xl font-black text-white">
                                منوی تعاملی و پرداخت آنلاین
                            </h3>

                            <p className="mt-4 max-w-lg leading-8 text-white/60">
                                تجربه‌ای کامل‌تر که می‌تواند شامل ثبت سفارش،
                                امکانات تعاملی و پرداخت آنلاین باشد.
                            </p>

                            <div className="mt-10 flex gap-2">

                                <span className="h-2 w-16 rounded-full bg-white" />
                                <span className="h-2 w-8 rounded-full bg-white/30" />
                                <span className="h-2 w-4 rounded-full bg-white/20" />

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}