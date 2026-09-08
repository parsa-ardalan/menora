export default function Features() {

    const features = [
        {
            title: "پشتیبانی",
            description: "برای استفاده و مدیریت بهتر، در کنار شما هستیم."
        },
        {
            title: "طراحی اختصاصی",
            description: "ظاهر منو می‌تواند متناسب با هویت بصری مجموعه طراحی شود."
        },
        {
            title: "تخفیف‌ها",
            description: "محصولات تخفیف‌دار را به شکل مشخص در منو نمایش دهید."
        },
        {
            title: "مدیریت موجودی",
            description: "آیتم‌های ناموجود را بدون حذف از منو غیرفعال کنید."
        },
        {
            title: "دسته‌بندی محصولات",
            description: "آیتم‌ها را مرتب و قابل دسترس برای مشتری نمایش دهید."
        },
        {
            title: "قابل توسعه",
            description: "امکانات موردنیاز مجموعه می‌تواند در ادامه به سیستم اضافه شود."
        }
    ]

    return (
        <section className="mb-20">

            <div className="mb-8">

                <span className="text-sm font-medium text-primary">
                    امکانات بیشتر
                </span>

                <h2 className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
                    فقط یک منوی ساده نیست
                </h2>

            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {features.map((item) => (
                    <div key={item.title} className="rounded-3xl border border-gray-200 p-6">

                        <h3 className="font-bold text-primary">
                            {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-gray-500">
                            {item.description}
                        </p>

                    </div>
                ))}

            </div>

        </section>
    )
}