'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import TrustSignals from '@/components/TrustSignals';
import EnquiryForm from '@/components/EnquiryForm';
import HowWeWork from '@/components/HowWeWork';
import AboutUs from '@/components/AboutUs';
import Services from '@/components/Services';
import TargetAudience from '@/components/TargetAudience';

export default function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center bg-brand-950 overflow-hidden">
                {/* Full-width container port background */}
                <div className="absolute inset-0 bg-[url('/images/cargo-ship.jpg')] bg-cover bg-center bg-no-repeat z-0 pointer-events-none"></div>
                <div className="absolute inset-0 bg-brand-950/80 mix-blend-multiply z-0 pointer-events-none"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] pointer-events-none z-0"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-32 md:pb-0">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h2 className="text-brand-400 uppercase tracking-[0.2em] text-xs md:text-sm font-bold mb-6">Precision Manufacturing</h2>
                            <h1 className="font-serif font-bold text-brand-50 mb-8 leading-tight tracking-tight text-5xl md:text-6xl lg:text-7xl">
                                Indian Perfectionism. Engineered for the World.
                            </h1>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="font-serif font-medium text-brand-200 text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl leading-relaxed"
                        >
                            Trombay Trading is a premier B2B purveyor of exceptional leather goods, blending generations of Indian craftsmanship with global supply excellence.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col sm:flex-row gap-6"
                        >
                            <Link
                                href="#inquiry"
                                className="inline-flex justify-center items-center bg-brand-50 text-brand-950 border border-brand-50 hover:bg-transparent hover:text-brand-50 px-8 py-4 rounded-md text-xs font-medium uppercase tracking-widest transition-all duration-300"
                            >
                                Inquire Now
                            </Link>
                            <Link
                                href="/products"
                                className="inline-flex justify-center items-center bg-transparent border border-brand-800 text-brand-200 hover:border-brand-400 hover:text-brand-50 px-8 py-4 rounded-md text-xs font-medium uppercase tracking-widest transition-all duration-300"
                            >
                                View Collections
                                <ArrowRight className="ml-3 w-4 h-4" />
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Featured Collections */}
            {
                false && (
                    <section className="py-32 bg-brand-50">
                        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                                <div className="max-w-2xl">
                                    <h2 className="text-brand-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">Our Collections</h2>
                                    <h3 className="font-serif text-4xl md:text-5xl text-brand-900 leading-tight">
                                        Curated excellence for the discerning global market.
                                    </h3>
                                </div>
                                <Link href="/products" className="text-brand-700 hover:text-brand-900 text-xs font-medium uppercase tracking-widest border-b border-brand-300 hover:border-brand-900 pb-1 transition-all group flex items-center gap-2">
                                    Discover All <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                                {[
                                    { title: "Finished Hides", desc: "Select grades of Full-grain, Top-grain, and specialized tanning." },
                                    { title: "Leather Apparel", desc: "Sartorial elegance manufactured to precise bespoke specifications." },
                                    { title: "Accessories", desc: "Refined goods exemplifying meticulous attention to detail." }
                                ].map((item, idx) => (
                                    <div key={idx} className="group cursor-pointer">
                                        {/* Placeholder for images. */}
                                        <div className="aspect-[4/5] bg-brand-200 w-full mb-8 relative overflow-hidden group-hover:shadow-2xl transition-all duration-500">
                                            <div className="absolute inset-0 bg-brand-800/10 group-hover:bg-transparent transition-all duration-500"></div>
                                            <div className="absolute inset-0 flex items-center justify-center text-brand-500 opacity-60 font-serif tracking-wide">Trombay Trading.</div>
                                        </div>
                                        <h4 className="font-serif text-2xl text-brand-900 mb-3">{item.title}</h4>
                                        <p className="text-brand-600 font-medium text-sm leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                )
            }

            <AboutUs />

            {/* Sustainability & Trust Section */}
            {
                false && (
                    <section className="py-32 bg-brand-900 text-brand-50 relative overflow-hidden">
                        {/* Subtle texture */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(255,255,255,0.05)_0%,transparent_100%)] pointer-events-none"></div>

                        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                                <motion.div
                                    initial={{ opacity: 0, x: -30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                >
                                    <h2 className="text-brand-400 uppercase tracking-[0.2em] text-xs font-semibold mb-6">Our Commitment</h2>
                                    <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                                        Sustainable luxury, <br /><span className="font-medium text-brand-300">ethically sourced.</span>
                                    </h3>
                                    <p className="text-brand-200 text-lg font-medium mb-10 max-w-lg leading-relaxed">
                                        We believe true luxury lies in responsibility. Our tanneries employ state-of-the-art water purification and trace every hide to ensure ethical procurement.
                                    </p>

                                    <div className="grid grid-cols-2 gap-8 mb-12">
                                        <div>
                                            <h4 className="font-serif text-3xl text-brand-300 mb-2">100%</h4>
                                            <p className="text-xs uppercase tracking-widest text-brand-400">LWG Certified</p>
                                        </div>
                                        <div>
                                            <h4 className="font-serif text-3xl text-brand-300 mb-2">95%</h4>
                                            <p className="text-xs uppercase tracking-widest text-brand-400">Water Recycled</p>
                                        </div>
                                    </div>

                                    <Link
                                        href="/sustainability"
                                        className="inline-flex items-center gap-2 text-brand-50 border-b border-brand-500 hover:border-brand-50 pb-1 text-xs uppercase tracking-widest transition-all group"
                                    >
                                        Read Our Impact Report <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                    className="relative aspect-square lg:aspect-[4/5] w-full"
                                >
                                    <div className="absolute inset-0 bg-brand-800 flex items-center justify-center p-12">
                                        <div className="border border-brand-700 w-full h-full flex flex-col items-center justify-center text-center p-8">
                                            <span className="font-serif text-2xl text-brand-300 mb-4">"True quality is built on rigorous standards, transparent processes, and unwavering reliability."</span>
                                            <span className="text-xs uppercase tracking-widest text-brand-500">— Founder, Trombay Trading</span>
                                        </div>
                                    </div>
                                </motion.div>

                            </div>
                        </div>
                    </section>
                )
            }

            <Services />
            {false && <HowWeWork />}
            <TrustSignals />
            <TargetAudience />

            {/* Inquiry Section */}
            <section id="inquiry" className="py-32 bg-brand-50 relative">
                <div className="absolute inset-0 bg-brand-100/50 clip-path-polygon-[0_0,100%_10%,100%_100%,0_90%] -z-10 pt-20"></div>

                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-brand-600 uppercase tracking-[0.2em] text-xs font-semibold mb-4">Partner With Us</h2>
                        <h3 className="font-serif text-4xl md:text-5xl text-brand-900">Initiate a Conversation.</h3>
                    </div>

                    <EnquiryForm />
                </div>
            </section>
        </>
    )
}
