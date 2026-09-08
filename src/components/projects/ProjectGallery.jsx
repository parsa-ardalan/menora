"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

export default function projectGallery({ project }) {

    return (

        <section className="mt-10 px-5">

            <div className="mb-5 flex items-end justify-between px-5 lg:px-8">

                <div>

                    <h2 className="text-xl font-semibold text-primary">
                        گالری منو
                    </h2>

                </div>

                <span className="text-xs text-gray-400">
                    ورق بزنید ←
                </span>

            </div>

            <Swiper
                spaceBetween={12}
                loop
                slidesPerView={1.5}
                breakpoints={{
                    640: {
                        slidesPerView: 2.5,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >

                {project.images.map((image, index) => (

                    <SwiperSlide key={image}>

                        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl bg-gray-100 lg:h-[400px]">

                            <Image
                                src={image}
                                alt={`تصویر منو ${index + 1}`}
                                fill
                                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 40vw, 25vw"
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />

                        </div>

                    </SwiperSlide>

                ))}

            </Swiper>

        </section>
    )

}