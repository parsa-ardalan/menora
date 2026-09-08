import Link from "next/link";

export default function Pricing() {

    return (
        <section className="mb-20 grid gap-5 md:grid-cols-2">

            {/* price */}
            <div className="rounded-3xl bg-primary p-8 text-white sm:p-10">

                <span className="text-sm text-gray-400">
                    قیمت
                </span>

                <h2 className="mt-3 text-2xl font-bold">
                    هزینه طراحی و راه‌اندازی
                </h2>

                <p className="mt-4 text-sm leading-7 text-white">
                    هزینه نهایی بر اساس امکانات، میزان شخصی‌سازی و نیازهای
                    مجموعه مشخص می‌شود. برای دریافت قیمت دقیق، با ما در تماس باشید.
                </p>

                <Link
                    href="/contact"
                    className="mt-7 inline-flex rounded-xl bg-white px-5 py-3 text-sm font-semibold text-primary transition hover:bg-gray-100"
                >
                    دریافت قیمت
                </Link>

            </div>

            {/* time */}
            <div className="rounded-3xl border border-gray-200 p-8 sm:p-10">

                <span className="text-sm text-gray-500">
                    مدت زمان
                </span>

                <h2 className="mt-3 text-2xl font-bold text-primary">
                    چقدر زمان می‌برد؟
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-500">
                    پس از نهایی شدن اطلاعات و طراحی، توسعه و آماده‌سازی منوی
                    دیجیتال انجام می‌شود. زمان دقیق اجرا با توجه به امکانات
                    موردنیاز پروژه مشخص خواهد شد.
                </p>

            </div>

        </section>
    )
}