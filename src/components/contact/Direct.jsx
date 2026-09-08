import Image from "next/image";

export default function Direct() {

    return (
        <section className="px-5 py-12 sm:px-8 lg:px-16">
            <div className="mx-auto max-w-6xl">

                <div className="grid gap-4 md:grid-cols-2">

                    {/* Phone */}
                    <a
                        href="tel:++989375632332"
                        className="group rounded-3xl bg-blue-600 p-7 text-white transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-200 sm:p-9"
                    >

                        <div className="flex items-start justify-between">

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl relative">
                                <Image src={"/icons/phone.png"} alt=" " fill className="object-cover" />
                            </div>

                            <span className="text-xl text-blue-200 transition group-hover:translate-x-1">
                                ↗
                            </span>

                        </div>

                        <p className="mt-10 text-sm text-blue-100">
                            تماس مستقیم
                        </p>

                        <h3 className="mt-2 text-2xl font-bold tracking-tight text-end" dir="ltr">
                            0937 563 2332
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-blue-100">
                            برای رزرو و هماهنگی سریع با ما تماس بگیرید.
                        </p>

                    </a>


                    {/* Email */}
                    <a
                        href="mailto:menora.menu@gmail.com"
                        className="group rounded-3xl border border-stone-200 bg-stone-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-stone-300 hover:bg-white hover:shadow-xl sm:p-9"
                    >

                        <div className="flex items-start justify-between">

                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-xl shadow-sm relative">
                                <Image src={"/icons/gmail.png"} alt=" " fill className="object-cover" />
                            </div>

                            <span className="text-xl text-stone-300 transition group-hover:translate-x-1 group-hover:text-blue-600">
                                ↗
                            </span>

                        </div>

                        <p className="mt-10 text-sm text-stone-400">
                            ایمیل
                        </p>

                        <h3 className="mt-2 break-all text-xl font-bold tracking-tight sm:text-2xl text-primary">
                            menora.menu@gmail.com
                        </h3>

                        <p className="mt-3 text-sm leading-6 text-stone-500">
                            برای ارتباطات رسمی و ارسال درخواست‌های کاری.
                        </p>

                    </a>

                </div>
            </div>
        </section>
    )
}