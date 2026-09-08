import CTA from "@/components/common/CTA"
import Hero from "@/components/projects/Hero"
import ProjectCard from "@/components/projects/ProjectCard"
import projects from "@/data/projects.json"

export default function Projects() {

    return (
        <main className="min-h-screen py-20">

            {/* Hero */}
            <Hero />


            {/* Projects */}
            <section className="px-6 pb-16 sm:px-10 sm:pb-24 md:px-12 md:pb-28 lg:px-10 lg:pb-32 animate-fade-up-delay-2">
                <div className="mx-auto max-w-7xl">

                    {/* Section header */}
                    <div className="my-10 flex items-end justify-between gap-4">

                        <h2 className="mt-1 text-xl sm:text-2xl md:text-3xl font-bold text-primary">
                            نمونه‌کارها
                        </h2>

                        <span className="text-xs sm:text-sm text-stone-400">
                            {projects.length} پروژه
                        </span>

                    </div>


                    {/* Project grid */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-5 lg:grid-cols-3 xl:grid-cols-4 animate-fade-up-delay-3">
                        {projects.map((project) => (
                            <ProjectCard
                                key={project.name}
                                project={project}
                            />
                        ))}
                    </div>

                </div>
            </section>


            {/* CTA */}
            <CTA />

        </main>
    )
}