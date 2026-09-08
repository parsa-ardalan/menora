import CTA from "@/components/common/CTA"
import AdminPanel from "@/components/guide/AdminPanel"
import FAQ from "@/components/guide/FAQ"
import Features from "@/components/guide/Features"
import Hero from "@/components/guide/Hero"
import Pricing from "@/components/guide/Pricing"
import QR from "@/components/guide/QR"
import Steps from "@/components/guide/Steps"
import Link from "next/link"


export default function Guide() {

    return (

        <main className="px-5 py-20 sm:px-8 lg:px-16 animate-fade-up-delay-1">

            <div className="mx-auto max-w-6xl">

                {/* Hero */}
                <Hero />


                {/* Order Steps */}
                <Steps />


                {/* QR */}
                <QR />


                {/* Admin Panel */}
                <AdminPanel />


                {/* Pricing */}
               <Pricing />


                {/* More Features */}
                <Features />


                {/* FAQ */}
               <FAQ />
               
            </div>

        </main>
    )
}