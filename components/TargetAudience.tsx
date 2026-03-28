'use client';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Store, Factory, Building2 } from 'lucide-react';
import Link from 'next/link';

export default function TargetAudience() {
    const clients = [
        {
            title: "International Wholesalers & Distributors",
            desc: "Seeking consistent, high-volume supply chains for premium goods.",
            icon: Globe
        },
        {
            title: "Overseas Retail Chains & Supermarkets",
            desc: "Looking to source quality Indian products directly, bypassing intermediaries.",
            icon: Store
        },
        {
            title: "Global Manufacturers",
            desc: "In need of dependable raw materials or intermediary components.",
            icon: Factory
        },
        {
            title: "Import Agencies",
            desc: "Requiring a trusted partner on the ground in India to manage sourcing and compliance.",
            icon: Building2
        }
    ];

    return (
        <section id="clients" className="py-32 bg-brand-950 text-brand-50 relative overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 bg-[url('/images/kalamkari.png')] bg-repeat opacity-[0.03] mix-blend-color-dodge z-0 pointer-events-none"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.03)_0%,transparent_60%)] pointer-events-none z-0"></div>
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-500/50 to-transparent opacity-50 z-0"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">

                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-brand-400 uppercase tracking-[0.2em] text-xs font-semibold mb-4">Our Target Audience</h2>
                        <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
                            Connecting India to the <span className="font-medium text-brand-300">Global Market.</span>
                        </h3>
                        <p className="text-brand-200 text-lg font-medium leading-relaxed max-w-2xl mx-auto">
                            We cater exclusively to B2B clients across the globe who are looking for a reliable, long-term trade partner in India.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {clients.map((client, idx) => {
                        const Icon = client.icon;
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                key={idx}
                                className="group bg-brand-900 border border-brand-800 rounded-xl p-6 hover:bg-brand-800/80 transition-all duration-500 flex flex-row items-center gap-6 h-full text-left"
                            >
                                <div className="flex-shrink-0">
                                    <div className="w-12 h-12 rounded-lg border border-brand-600 flex items-center justify-center text-brand-300 group-hover:scale-110 transition-transform duration-500 bg-brand-950">
                                        <Icon className="w-5 h-5" strokeWidth={1.5} />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-serif text-lg text-brand-50 mb-2">{client.title}</h4>
                                    <p className="text-brand-300 font-medium text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity duration-300 m-0">
                                        {client.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            href="#inquiry"
                            className="inline-flex items-center gap-3 text-brand-50 border border-brand-600 px-8 py-4 rounded-md hover:bg-brand-50 hover:text-brand-950 text-xs uppercase tracking-widest transition-all duration-300 group"
                        >
                            Become a Partner <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
