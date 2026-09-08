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
        <section className="w-full mt-20">

            <div className="w-full max-w-6xl mx-auto">

                {/* header */}
                <div className="mb-5 text-center">
                    <h2 className="text-3xl font-bold text-primary">
                        چرا منورا؟
                    </h2>

                    <p className="mt-2 text-lg text-gray-500">
                        امکاناتی که مدیریت منوی شما را ساده‌تر می‌کند.
                    </p>
                </div>

                {/* benefit container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 animate-fade-up-delay-4">

                    {benefits.map((benefit, index) => (

                        <div
                            key={index}
                            className="bg-stone-100 rounded-2xl p-5 shadow-md shadow-black/25"
                        >

                            {/* icon */}
                            <div className="w-10 h-10 rounded-xl bg-primary mb-3 flex items-center justify-center">
                                <Image src={"/icons/check.png"} alt=" " width={20} height={20} />
                            </div>

                            <h3 className="text-lg font-bold text-primary">
                                {benefit.title}
                            </h3>

                            <p className="mt-2 text-md leading-6 text-gray-500">
                                {benefit.description}
                            </p>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    )
}