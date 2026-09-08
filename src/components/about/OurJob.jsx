export default function OurJob() {

    return (

        <section className="relative bg-gray-50 px-5 py-20 md:py-28 animate-fade-up-delay-2">

            <div className="absolute left-0 top-0 h-full w-1/3 bg-primary/[0.02]" />

            <div className="relative mx-auto max-w-6xl">

                <div className="max-w-2xl">

                    <span className="text-xs font-bold tracking-[0.25em] text-gray-400">
                        کار ما چیست؟
                    </span>

                    <h2 className="mt-5 text-3xl font-black text-primary md:text-5xl">
                        تخصص ما،
                        <br />
                        طراحی منوی دیجیتال است
                    </h2>

                    <p className="mt-6 leading-8 text-gray-500">
                        مجموعه منورا به‌صورت اختصاصی روی طراحی و توسعه منوهای
                        دیجیتال آنلاین برای کافه‌ها، رستوران‌ها و کسب‌وکارهای
                        حوزه غذا و نوشیدنی فعالیت می‌کند.
                    </p>

                </div>


                {/* tabs */}
                <div className="mt-14 grid gap-5 md:grid-cols-3">


                    <div className="group relative overflow-hidden rounded-[2rem] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                            ✦
                        </div>

                        <h3 className="mt-7 text-xl font-bold text-primary">
                            طراحی اختصاصی
                        </h3>

                        <p className="mt-3 leading-7 text-gray-500">
                            هر منو متناسب با هویت بصری و نیاز کسب‌وکار شما
                            طراحی می‌شود.
                        </p>

                        <div className="mt-7 h-px w-full bg-gray-100" />

                        <span className="mt-4 block text-xs font-semibold text-primary">
                            متناسب با مجموعه
                        </span>

                    </div>


                    <div className="group relative overflow-hidden rounded-[2rem] bg-primary p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-xl text-white">
                            ◇
                        </div>

                        <h3 className="mt-7 text-xl font-bold text-white">
                            انعطاف‌پذیر
                        </h3>

                        <p className="mt-3 leading-7 text-white/60">
                            از منوهای ساده و استاتیک تا منوهای تعاملی و
                            دارای پرداخت آنلاین.
                        </p>

                        <div className="mt-7 h-px w-full bg-white/10" />

                        <span className="mt-4 block text-xs font-semibold text-white/70">
                            طراحی منعطف
                        </span>

                    </div>


                    <div className="group relative overflow-hidden rounded-[2rem] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary">
                            ∞
                        </div>

                        <h3 className="mt-7 text-xl font-bold text-primary">
                            بدون محدودیت UI
                        </h3>

                        <p className="mt-3 leading-7 text-gray-500">
                            طراحی منوی شما به یک قالب تکراری و آماده محدود
                            نمی‌شود.
                        </p>

                        <div className="mt-7 h-px w-full bg-gray-100" />

                        <span className="mt-4 block text-xs font-semibold text-primary">
                            طبق سلیفه شما
                        </span>

                    </div>

                </div>

            </div>

        </section>
    )
}