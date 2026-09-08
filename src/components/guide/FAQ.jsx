export default function FAQ() {

    const faqs = [
        {
            question: "آیا مشتری برای استفاده از منو نیاز به نصب برنامه دارد؟",
            answer: "خیر. مشتری فقط QR Code را اسکن می‌کند و منوی دیجیتال را در مرورگر خود مشاهده می‌کند."
        },
        {
            question: "آیا می‌توانم قیمت محصولات را تغییر دهم؟",
            answer: "بله. مدیریت قیمت و اطلاعات آیتم‌ها از طریق پنل مدیریت انجام می‌شود."
        },
        {
            question: "اگر یک محصول موجود نباشد چه کاری باید انجام دهم؟",
            answer: "می‌توانید وضعیت محصول را از پنل مدیریت تغییر دهید تا در صورت نیاز از دسترس مشتری خارج شود."
        },
        {
            question: "آیا ظاهر منو برای هر مجموعه اختصاصی است؟",
            answer: "بله. امکان طراحی و شخصی‌سازی منو متناسب با برند و نیاز مجموعه وجود دارد."
        },
        {
            question: "آیا امکان اضافه کردن امکانات جدید وجود دارد؟",
            answer: "بله. منورا قابلیت توسعه دارد و امکانات موردنیاز مجموعه می‌توانند به سیستم اضافه شوند."
        }
    ]

    return (
        <section>

            <div className="mb-8">

                <span className="text-sm font-medium text-primary">
                    سوالات متداول
                </span>

                <h2 className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
                    سوالی دارید؟
                </h2>

            </div>

            <div className="divide-y divide-gray-200 rounded-3xl border border-gray-200 px-6">

                {faqs.map((item) => (
                    <details key={item.question} className="group py-5">

                        <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold text-primary text-sm lg:text-md">

                            {item.question}

                            <span className="text-xl text-gray-500 transition group-open:rotate-45">
                                +
                            </span>

                        </summary>

                        <p className="mt-4 max-w-3xl text-sm leading-6 text-gray-500">
                            {item.answer}
                        </p>

                    </details>
                ))}

            </div>

        </section>
    )
}