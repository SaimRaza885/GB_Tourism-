"use client"

import { FaUserSecret, FaLock, FaDatabase, FaEnvelope } from "react-icons/fa"

export default function PrivacyPage() {
    return (
        <main className="min-h-screen pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-16">
                <span className="text-primary font-bold uppercase tracking-[0.3em] text-[10px] mb-4 inline-block">Security</span>
                <h1 className="text-4xl md:text-5xl font-black font-heading uppercase tracking-tight">Privacy <span className="text-primary italic">Policy</span></h1>
                <p className="text-muted-foreground mt-4">Effective Date: February 10, 2026</p>
            </div>

            <div className="space-y-12 prose prose-sm max-w-none text-muted-foreground">
                <section>
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm"><FaUserSecret /></div>
                        1. Information We Collect
                    </h2>
                    <p className="leading-relaxed mb-4">
                        We collect information that allows us to provide you with a world-class travel experience. This includes:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li><span className="font-bold text-foreground italic">Personal Details:</span> Name, email, phone number, and ID/passport details for hotel bookings.</li>
                        <li><span className="font-bold text-foreground italic">Travel Preferences:</span> Dietary restrictions, mobility needs, and interests.</li>
                        <li><span className="font-bold text-foreground italic">Usage Data:</span> How you interact with our platform to improve our services.</li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm"><FaDatabase /></div>
                        2. How We Use Data
                    </h2>
                    <p className="leading-relaxed">
                        Your data is used solely for fulfilling your travel requests, managing your account, and sending you relevant updates about your bookings. We do not sell your personal information to third parties. We may share necessary details with service providers (like hotels or drivers) only to ensure your trip runs smoothly.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm"><FaLock /></div>
                        3. Data Security
                    </h2>
                    <p className="leading-relaxed">
                        We implement industry-standard security measures to protect your information from unauthorized access, alteration, or disclosure. All financial transactions are encrypted and processed through secure payment gateways.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-black text-foreground uppercase tracking-tight flex items-center gap-3 mb-6">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center text-primary text-sm"><FaEnvelope /></div>
                        4. Your Rights
                    </h2>
                    <p className="leading-relaxed">
                        You have the right to access, update, or delete your personal information at any time. To exercise these rights, please email us at <span className="font-bold text-primary underline">support@gilgittourism.com</span>.
                    </p>
                </section>
            </div>
        </main>
    )
}
