import Image from "next/image"
import Link from "next/link"

export default function ProjectCard({ project }) {

    return (
        <div className="col-span-1 h-full bg-stone-100 shadow-md shadow-black/25 rounded-xl p-5">

            {/* background */}
            <div className="w-full h-40 relative overflow-hidden rounded-lg flex items-center justify-center py-3">

                {/* blurred background */}
                <div
                    className="absolute inset-0 bg-center bg-cover bg-no-repeat brightness-50 blur-xs"
                    style={{ backgroundImage: `url("${project.images?.[0]}")` }}
                />

                {/* iPhone screen */}
                <div className="relative z-10 w-20 h-full rounded-[14px] border-[3px] border-neutral-900 bg-black overflow-hidden shadow-xl">

                    {/* screen */}
                    <div className="absolute inset-[2px] rounded-[11px] overflow-hidden bg-white">
                        <Image
                            fill
                            alt="project preview"
                            src={project.images[0]}
                            className="object-cover"
                        />
                    </div>

                    {/* right side buttons */}
                    <div className="absolute -right-[4px] top-8 w-[2px] h-7 bg-neutral-800 rounded-r-full" />

                    {/* left buttons */}
                    <div className="absolute -left-[4px] top-7 w-[2px] h-4 bg-neutral-800 rounded-l-full" />
                    <div className="absolute -left-[4px] top-13 w-[2px] h-7 bg-neutral-800 rounded-l-full" />

                </div>

            </div>

            {/* logo */}
            <div className="w-fit h-fit rounded-full bg-yellow-950 mx-auto relative z-20 -mt-10">
                <Image src={project.logo} width={50} height={50} alt="logo" />
            </div>

            {/* name */}
            <h3 className="text-center text-lg mt-3 text-primary font-bold"> {project.name} </h3>

            <Link href={`/projects/${project.slug}`}>
                <button className="w-full h-11 bg-primary mt-5 rounded-lg text-white text-md">
                    مشاهده منو
                </button>
            </Link>

        </div>
    )
}