import { useEffect , useState } from "react"

export default function Stats() {

    const [count, setCount] = useState(0)

    useEffect(() => {

        let current = 0
        const target = 454
        const duration = 1800
        const stepTime = duration / target

        const interval = setInterval(() => {

            current += 1
            setCount(current)

            if (current >= target) {
                clearInterval(interval)
            }

        }, stepTime)

        return () => clearInterval(interval)

    }, [])

    return (
        <section className="px-5 py-20 md:py-28 animate-fade-up-delay-4">

            <div className="mx-auto max-w-6xl">

                <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-7 py-14 md:px-14 md:py-16">

                    <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

                    <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

                    <div className="relative grid gap-12 md:grid-cols-2 md:items-center">

                        <div>

                            <span className="text-xs font-bold tracking-[0.25em] text-white/50">
                               رزومه کاری ما
                            </span>

                            <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-5xl">
                                تجربه‌ای که با هر پروژه
                                <br />
                                بیشتر می‌شود
                            </h2>

                            <p className="mt-6 max-w-lg leading-8 text-white/60">
                                هر پروژه برای ما فرصتی برای خلق یک تجربه بهتر است.
                                مسیری که با اولین منو شروع شد و همچنان ادامه دارد.
                            </p>

                        </div>


                        <div className="relative flex justify-center">

                            <div className="flex h-64 w-64 flex-col items-center justify-center rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-sm md:h-72 md:w-72">

                                <div className="text-7xl font-black tracking-tight text-white md:text-8xl">
                                    {count}
                                    <span className="text-3xl">
                                        +
                                    </span>
                                </div>

                                <div className="mt-3 text-sm text-white/50">
                                    منوی طراحی‌شده
                                </div>

                            </div>

                            <div className="absolute h-80 w-80 rounded-full border border-white/5" />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}