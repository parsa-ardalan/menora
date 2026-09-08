import CTA from "@/components/common/CTA"
import ProjectCard from "@/components/projects/ProjectCard"
import projects from "@/data/projects.json"

export default function Projects() {

    return (
        <main className="min-h-screen bg-stone-50">

            {/* Hero */}
            <section className="px-5 pt-28 pb-16 md:px-10 md:pt-36 md:pb-24 animate-fade-up-delay-1">
                <div className="mx-auto max-w-7xl">

                    <div className="max-w-3xl">

                        <span className="mb-5 text-sm font-medium text-stone-500">
                            پروژه‌های منورا
                        </span>

                        <h1 className="text-4xl mt-5 text-primary font-bold">
                            چیزهایی که برای دیگران ساخته ایم
                        </h1>

                        <p className="mt-6 max-w-2xl text-base leading-8 text-gray-500 md:text-lg">
                            هر پروژه برای ما فرصتی بوده تا یک تجربه متفاوت برای
                            نمایش منو، محصولات و هویت یک کسب‌وکار خلق کنیم.
                        </p>

                    </div>

                </div>
            </section>


            {/* Projects */}
            <section className="px-5 pb-24 md:px-10 md:pb-32 animate-fade-up-delay-2">
                <div className="mx-auto max-w-7xl">

                    {/* Section header */}
                    <div className="mb-8 flex items-end justify-between gap-5 border-b border-stone-200 pb-5">

                        <h2 className="mt-1 text-2xl font-bold text-primary">
                            نمونه‌کارها
                        </h2>

                        <span className="hidden text-sm text-stone-400 sm:block">
                            {projects.length} پروژه
                        </span>

                    </div>


                    {/* Project grid */}
                    <div className="grid grid-cols-5 gap-5 animate-fade-up-delay-3">
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