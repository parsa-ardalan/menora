import CTA from "@/components/common/CTA"
import Direct from "@/components/contact/Direct"
import Hero from "@/components/contact/Hero"
import Massengers from "@/components/contact/Massengers"
import Reservation from "@/components/contact/Reservation"

export default function Contact() {

    return (
        <main className="min-h-screen bg-white text-stone-900 pt-20 animate-fade-up-delay-1">

            {/* Hero */}
            <Hero />

            {/* Reservation */}
            <Reservation />

            {/* Messengers */}
            <Massengers />

            {/* Direct Contact */}
            <Direct />

            {/* Final CTA */}
            <CTA />

        </main>
    )
}