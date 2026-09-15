import Link from "next/link"
import projects from "@/data/projects.json"
import ProjectCard from "../projects/ProjectCard"

export default function Projects() {

    return (
        <section className="w-full h-fit mt-16 sm:mt-20 md:mt-24 grid grid-cols-1 lg:grid-cols-5" id="projects">

            {/* info */}
            <div className="col-span-1 lg:col-span-2 h-fit px-6 sm:px-10 md:px-14 lg:px-10 xl:px-16 py-8 sm:py-10 lg:py-16">
                <h2 className="text-primary font-bold text-lg md:text-4xl lg:text-3xl xl:text-4xl leading-[1.8]">
                    نمونه منوهای ساخته شده با منورا
                </h2>

                <p className="text-base sm:text-lg md:text-xl text-gray-500 leading-8 mt-4 sm:mt-5 max-w-xl">
                    کافه و رستوران های زیادی با <span className="font-bold text-primary">منورا</span> منوی دیجیتال خود را راه اندازی کرده اند.
                    شما هم به خانواده ما بپیوندید
                </p>

                <a href="/contact" className="block w-fit">
                    <button className="text-primary border border-primary text-sm sm:text-base md:text-lg font-bold w-fit h-fit py-3 px-5 sm:px-6 rounded-full mt-7 sm:mt-10 flex items-center gap-1 hover:mr-2 sm:hover:mr-5 duration-300">
                        همین الان سفارش بده

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 sm:size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </a>
            </div>


            {/* cards */}
            <div className="col-span-1 lg:col-span-3 h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-6 sm:px-10 md:px-14 lg:px-8 xl:px-16 pb-8 lg:pb-16">
                {projects.slice(0, 3).map((p) => (
                    <ProjectCard key={p.name} project={p} />
                ))}
            </div>

        </section>
    )
}