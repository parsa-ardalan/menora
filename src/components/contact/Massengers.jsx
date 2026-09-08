import Image from "next/image"

export default function Massengers() {


    const messengers = [
        {
            name: "تلگرام",
            username: "Telegram",
            description: "ارتباط سریع و مستقیم",
            icon: "/platforms/telegram.png",
            href: "#",
        },
        {
            name: "اینستاگرام",
            username: "Instagram",
            description: "ما را در اینستاگرام ببینید",
            icon: "/platforms/instagram.png",
            href: "#",
        },
        {
            name: "واتساپ",
            username: "WhatsApp",
            description: "گفتگو و هماهنگی",
            icon: "/platforms/whatsapp.webp",
            href: "#",
        },
        {
            name: "روبیکا",
            username: "Rubika",
            description: "پیام‌رسان داخلی",
            icon: "/platforms/rubika.png",
            href: "#",
        },
    ]

    return (
        <section className="px-5 py-12 sm:px-8 lg:px-16 animate-fade-up-delay-4">
            <div className="mx-auto max-w-6xl">

                <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">

                    <h2 className="mt-2 text-xl font-bold">
                        هر جا راحت‌تری، با ما در ارتباط باش
                    </h2>

                    <span className="hidden lg:block text-xs font-semibold text-primary">
                        پیام‌رسان‌ها
                    </span>

                </div>



                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">

                    {messengers.map((messenger) => (
                        <a
                            key={messenger.name}
                            href={messenger.href}
                            className="group rounded-2xl border border-stone-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/40"
                        >

                            <div className="flex items-start justify-between">

                                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-stone-100 text-lg transition group-hover:text-white">
                                    <Image src={messenger.icon} width={32} height={32} alt=" " />
                                </div>

                                <span className="text-stone-300 transition group-hover:text-blue-600">
                                    ↗
                                </span>

                            </div>

                            <h3 className="mt-6 text-base font-bold">
                                {messenger.name}
                            </h3>

                            <p className="mt-1 text-xs text-stone-400">
                                {messenger.username}
                            </p>

                            <p className="mt-4 text-xs leading-5 text-stone-500">
                                {messenger.description}
                            </p>

                        </a>
                    ))}

                </div>

            </div>
        </section>
    )
}