export default function QR() {

    const qrSteps = [
        {
            number: "01",
            title: "اسکن QR"
        },
        {
            number: "02",
            title: "ورود به منو"
        },
        {
            number: "03",
            title: "مشاهده آیتم‌ها"
        }
    ]

    return (
        <section className="mb-20 rounded-3xl bg-gray-100 p-7 sm:p-10 lg:p-14">

            <div className="max-w-3xl">

                <span className="text-sm font-medium text-primary">
                    منوی دیجیتال
                </span>

                <h2 className="mt-2 text-2xl font-bold text-primary sm:text-3xl">
                    مشتری فقط QR Code را اسکن می‌کند
                </h2>

                <p className="mt-5 text-sm leading-8 text-gray-500 sm:text-base">
                    منوی منورا کاملاً دیجیتال است. مشتری با اسکن QR Code
                    اختصاصی مجموعه، مستقیماً وارد منوی شما می‌شود و می‌تواند
                    دسته‌بندی‌ها، آیتم‌ها، قیمت‌ها و اطلاعات هر محصول را مشاهده کند.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">

                    {qrSteps.map((item) => (
                        <div key={item.number} className="rounded-2xl bg-white p-5">

                            <span className="text-xs font-bold text-primary">
                                {item.number}
                            </span>

                            <p className="mt-3 font-semibold text-primary">
                                {item.title}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}