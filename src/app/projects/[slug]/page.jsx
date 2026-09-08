import Image from "next/image"
import Link from "next/link"
import projects from "@/data/projects.json"
import ProjectGallery from "@/components/projects/ProjectGallery"
import CTA from "@/components/common/CTA"

export default async function Project({ params }) {

    const { slug } = await params

    const project = projects.find(
        (item) => item.slug === slug
    )

    if (!project) {
        return (
            <main className="flex min-h-screen items-center justify-center bg-stone-50 px-5">

                <div className="text-center">

                    <p className="text-xs text-gray-400">
                        404
                    </p>

                    <h1 className="mt-2 text-lg font-semibold text-gray-900">
                        پروژه پیدا نشد
                    </h1>

                    <Link
                        href="/projects"
                        className="mt-5 inline-flex rounded-lg bg-primary px-5 py-2.5 text-xs font-medium text-white transition hover:opacity-90"
                    >
                        بازگشت به پروژه‌ها
                    </Link>

                </div>

            </main>
        )
    }

    return (


        <main className="lg:w-1/2 min-h-screen py-20 lg:pt-32 gap-20">


            {/* Intro */}
            <section className="px-5">

                <div className="flex items-center gap-3">

                    <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-white">

                        <Image
                            src={project.logo}
                            alt={project.name}
                            fill
                            className="object-contain p-2"
                            sizes="44px"
                        />

                    </div>

                    <div>

                        <h1 className="mt-1 text-lg lg:text-xl font-bold text-primary">
                            {project.name}
                        </h1>

                    </div>

                </div>


                <p className="mt-5 max-w-xl text-xs leading-6 text-gray-500 lg:text-sm lg:leading-7">
                    {project.info}
                </p>


                <div className="mt-4 flex items-center gap-2">

                    <span className="text-[8px] text-primary">
                        ●
                    </span>

                    <span className="text-[11px] text-gray-500">
                        {project.address}
                    </span>

                </div>

            </section>


            {/* Gallery */}
            <ProjectGallery project={project} />


            {/* Description */}
            <section className="mt-10 px-5">

                <div className="border-t border-gray-200">

                    <h2 className="mt-3 text-lg lg:text-xl font-bold leading-8 text-primary">
                        طراحی شده برای

                        یک تجربه بهتر.
                    </h2>

                    <p className="mt-3 text-sm lg:text-md leading-6 text-gray-500">
                        {project.info}
                    </p>

                </div>

            </section>


            {/* Project Info */}
            <section className="px-5">

                <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-5">

                    <div>

                        <p className="text-sm text-gray-500">
                            نام پروژه
                        </p>

                        <p className="mt-2 text-sm lg:text-lg font-bold text-primary">
                            {project.name}
                        </p>

                    </div>


                    <div>

                        <p className="text-sm text-gray-500">
                            نوع پروژه
                        </p>

                        <p className="mt-2 text-sm lg:text-lg font-bold text-primary">
                            منوی دیجیتال
                        </p>

                    </div>


                    <div className="col-span-2">

                        <p className="text-sm text-gray-500">
                            آدرس
                        </p>

                        <p className="mt-2 text-sm lg:text-lg font-bold text-primary">
                            {project.address}
                        </p>

                    </div>

                </div>

            </section>


            <CTA />

        </main>
    )
}