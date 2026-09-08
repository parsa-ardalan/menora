export default function AdminPanel() {

    const adminFeatures = [
        "افزودن و حذف آیتم‌ها",
        "ویرایش قیمت‌ها",
        "مدیریت دسته‌بندی‌ها",
        "تغییر وضعیت موجودی",
        "مدیریت تخفیف‌ها",
        "تغییر تصاویر محصولات",
        "مدیریت اطلاعات مجموعه",
        "مدیریت منوی دیجیتال"
    ]

    return (
        <section className="mb-20">

            <div className="mb-8 max-w-2xl">

                <span className="text-sm font-medium text-primary">
                    مدیریت آسان
                </span>

                <h2 className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
                    همه چیز از پنل مدیریت
                </h2>

                <p className="mt-4 text-sm leading-7 text-gray-500 sm:text-base">
                    برای مدیریت منو نیازی به تماس با طراح یا برنامه‌نویس ندارید.
                    امکانات اصلی مجموعه از طریق پنل مدیریت در اختیار ادمین قرار می‌گیرد.
                </p>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

                {adminFeatures.map((item) => (
                    <div key={item} className="rounded-2xl border border-gray-200 p-5">

                        <div className="mb-4 h-2 w-2 rounded-full bg-primary" />

                        <p className="text-sm font-semibold text-primary">
                            {item}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    )
}