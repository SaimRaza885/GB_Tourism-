"use client"

import { FaRegHandshake, FaGlobe, FaShieldAlt, FaPhoneAlt } from "react-icons/fa"
import PageBanner from "@/components/PageBanner"

export default function TermsPage() {
    return (
        <main className="min-h-screen pb-20">
            <PageBanner
                height="40vh"
                badge="Legal"
                badgeIcon={FaRegHandshake}
                title="Terms & Conditions"
                image="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop"
                description="Last Updated: February 10, 2026"
            />

            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <section>
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm"><FaRegHandshake /></div>
                        1. Introduction
                    </h2>
                    <p className="leading-relaxed">
                        Welcome to Gilgit Tourism. By accessing our website and using our services, you agree to be bound by the following terms and conditions. Please read them carefully. Our platform connects travelers with local tourism services in Gilgit-Baltistan.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm"><FaGlobe /></div>
                        2. Booking & Payments
                    </h2>
                    <p className="leading-relaxed mb-4">
                        All bookings made through Gilgit Tourism are subject to availability. To confirm a booking, a deposit or full payment may be required depending on the service.
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Payment must be made through our authorized payment gateways or bank transfers.</li>
                        <li>Prices are subject to change without notice until a booking is confirmed.</li>
                        <li>Cancellations made 15 days before the trip are eligible for a 70% refund.</li>
                        <li>No refunds will be provided for cancellations made less than 7 days before the start date.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm"><FaShieldAlt /></div>
                        3. Liability & Insurance
                    </h2>
                    <p className="leading-relaxed mb-4">
                        Gilgit Tourism acts as an intermediary between travelers and service providers (hotels, transport, guides). While we vet our partners, we are not responsible for:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>Natural disasters, landslides, or weather-related delays common in mountainous regions.</li>
                        <li>Personal injury or loss of belongings during the trip.</li>
                        <li>Travelers are strongly advised to obtain comprehensive travel insurance that covers high-altitude activities and medical evacuation.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm"><FaPhoneAlt /></div>
                        4. Contact Us
                    </h2>
                    <p className="leading-relaxed text-sm">
                        If you have any questions about these Terms, please contact us at:<br />
                        <span className="font-bold text-foreground">Email:</span> legal@gilgittourism.com<br />
                        <span className="font-bold text-foreground">WhatsApp:</span> +92 300 1234567
                    </p>
                </section>
            </div>
        </main>
    )
}
