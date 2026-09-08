"use client"

import Clients from "@/components/about/Clients"
import CTA from "@/components/common/CTA"
import Flexibility from "@/components/about/Flexibility"
import OurJob from "@/components/about/OurJob"
import Philosophy from "@/components/about/Philosophy"
import Stats from "@/components/about/Stats"
import Story from "@/components/about/Story"
import { useEffect, useState } from "react"

export default function About() {

    const [count, setCount] = useState(0)

    useEffect(() => {

        let current = 0
        const target = 134
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
        <main className="w-full overflow-hidden pt-28 animate-fade-up-delay-1">


            <Story />

            <OurJob />

            <Flexibility />

            <Stats />

            <Clients />

            <Philosophy />

            <CTA />

        </main>
    )
}