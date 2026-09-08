import Image from "next/image"

export default function Benefits() {

    const benefits = [
        {
            title: "پشتیبانی رایگان",
            description: "همیشه در کنار شما هستیم.",
        },
        {
            title: "طراحی اختصاصی",
            description: "اختصاصی متناسب با برند شما.",
        },
        {
            title: "سرعت در توسعه",
            description: "سریع، به‌روز و آماده برای رشد.",
        },
        {
            title: "مدیریت راحت",
            description: "مدیریت ساده و سریع آیتم ها.",
        },
    ]

    return (
        <section className="w-full mt-16 sm:mt-20 md:mt-24">

            <div className="w-full max-w-6xl mx-auto px-6 sm:px-10 md:px-12 lg:px-8">

                {/* header */}
                <div className="mb-6 sm:mb-8 md:mb-10 text-center">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">
                        چرا منورا؟
                    </h2>

                    <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-gray-500">
                        امکاناتی که مدیریت منوی شما را ساده‌تر می‌کند.
                    </p>
                </div>

                {/* benefit container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 animate-fade-up-delay-4">

                    {benefits.map((benefit, index) => (

                        <div
                            key={index}
                            className="bg-stone-100 rounded-2xl p-5 sm:p-6 shadow-md shadow-black/15 transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20"
                        >

                            {/* icon */}
                            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-primary mb-3 sm:mb-4 flex items-center justify-center">
                                <Image
                                    src="/icons/check.png"
                                    alt=""
                                    width={20}
                                    height={20}
                                    className="sm:w-[22px] sm:h-[22px]"
                                />
                            </div>

                            <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary">
                                {benefit.title}
                            </h3>

                            <p className="mt-2 text-sm sm:text-base leading-6 sm:leading-7 text-gray-500">
                                {benefit.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}