'use client'

import projects from "@/data/projects.json"
import Image from "next/image"

export default function Clients() {

    return (
        <section className="bg-gray-50 px-5 py-20 md:py-28">

            <div className="mx-auto max-w-6xl">

                <div className="text-center">

                    <span className="text-xs font-bold tracking-[0.25em] text-gray-400">
                        افتخارات ما
                    </span>

                    <h2 className="mt-5 text-xl lg:text-3xl font-black text-primary">
                        افتخار همکاری با برندهای معتبر
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-500">
                        اعتماد برندهای شناخته‌شده برای ما ارزشمند است و هر همکاری،
                        بخشی از مسیر رشد و تجربه منورا محسوب می‌شود.
                    </p>

                </div>


                <div className="mt-14 grid gap-5 md:grid-cols-3">

                    {projects.map(p => (
                        <div
                            key={p.name}
                            className="group relative flex h-56 items-center justify-center overflow-hidden rounded-[2rem] border border-gray-100 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <Image src={p.logo} fill alt="logo" />
                        </div>
                    ))}

                </div>

            </div>

        </section>
    )
}