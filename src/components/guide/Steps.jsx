export default function Steps() {

    const orderSteps = [
        {
            number: 1,
            title: "ثبت درخواست",
            description: "اطلاعات مجموعه و نیازهای خودتان را با ما در میان می‌گذارید."
        },
        {
            number: 2,
            title: "طراحی و توسعه",
            description: "منوی دیجیتال شما با ظاهر اختصاصی و متناسب با برندتان ساخته می‌شود."
        },
        {
            number: 3,
            title: "تحویل و راه‌اندازی",
            description: "منو آماده استفاده می‌شود و QR Code اختصاصی در اختیار شما قرار می‌گیرد."
        }
    ]

    return (

        <section className="mb-20">

            <div className="mb-8">
                <span className="text-sm font-medium text-primary">
                    شروع کار
                </span>

                <h2 className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
                    مراحل سفارش منورا
                </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-3">

                {orderSteps.map((item) => (
                    <div key={item.number} className={`rounded-3xl border border-gray-200 bg-white p-7 animate-fade-up-delay-${item.number}`}>

                        <span className="text-sm font-bold text-primary">
                            {item.number}
                        </span>

                        <h3 className="mt-5 text-lg font-bold text-primary">
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