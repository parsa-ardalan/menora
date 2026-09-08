import Link from "next/link"
import projects from "@/data/projects.json"
import ProjectCard from "../projects/ProjectCard"
export default function Projects() {

    return (
        <section className="w-screen h-fit mt-20 grid grid-cols-5" id="projects">

            {/* info */}
            <div className="col-span-2 h-fit p-10">
                <h2 className="text-primary font-bold text-3xl"> نمونه منوهای ساخته شده با منورا</h2>

                <p className="text-xl text-gray-500 leading-7 mt-5">
                    کافه و رستوران های زیادی با <span className="font-bold text-primary"> منورا </span> منوی دیجیتال خود را راه اندازی کرده اند.
                    شما هم به خانواده ما بپیوندید
                </p>

                <a href={"#contact"}>
                    <button className="text-primary border border-primary text-lg font-bold w-fit h-fit py-3 px-5 rounded-full mt-10 flex items-center gap-1 hover:mr-5 duration-300">
                       همین الان سفارش بده

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                        </svg>

                    </button>
                </a>


            </div>

            {/* cards */}
            <div className="col-span-3 h-full grid grid-cols-3 gap-5 items-center justifty-center px-40">
                {projects.slice(0, 3).map((p) => <ProjectCard key={p.name} project={p} />)}
            </div>

        </section>
    )
}