'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutUs() {
    return (
        <section id="about" className="py-32 bg-brand-50 relative overflow-hidden">
            {/* Subtle texture */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.4)_0%,transparent_70%)] pointer-events-none"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                    {/* Text Content */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        >
                            <h2 className="text-brand-500 uppercase tracking-[0.2em] text-xs font-semibold mb-6">Who We Are</h2>
                            <h3 className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-900 mb-8 leading-tight">
                                Your Trusted Partner in <br /><span className="font-medium text-brand-500">Global Trade.</span>
                            </h3>

                            <div className="space-y-6 text-brand-700 font-medium text-lg leading-relaxed max-w-2xl">
                                <p>
                                    Trombay Trading is a specialized B2B procurement and export firm headquartered in India. Built on a foundation of operational transparency and rigorous manufacturing standards, we provide global brands seamless access to elite Indian production lines.
                                </p>
                                <p>
                                    Our hands-on approach acts as your dedicated quality-control gatekeeper in India. We do not just source; we actively engineer and monitor the entire manufacturing lifecycle. By bridging the gap between exceptional Indian manufacturing capabilities and strict global specifications, we mitigate risk, eliminate communication barriers, and guarantee compliance.
                                </p>
                                <p>
                                    At Trombay Trading, we deliver defect-free, world-class goods to your port, on time and with absolute precision.
                                </p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image / Visual Elements */}
                    <div className="lg:col-span-5 relative">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                            className="relative aspect-[4/5] w-full"
                        >
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border border-brand-200 z-0 hidden sm:block"></div>

                            {/* Image Placement */}
                            <div className="absolute inset-0 bg-brand-200 overflow-hidden shadow-2xl z-10 flex items-center justify-center">
                                <Image src="/images/port-containers-2.jpg" alt="Procurement Excellence" fill className="object-cover transition-transform duration-700 hover:scale-105" />
                                <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply z-20 pointer-events-none"></div>
                            </div>

                            {/* Accent Block */}
                            <div className="absolute -bottom-8 -left-8 bg-brand-900 text-brand-50 p-8 z-20 hidden md:block max-w-[240px] shadow-xl">
                                <p className="font-serif text-xl mb-3">"Bridging exceptional Indian manufacturing with global buyers."</p>
                                <div className="w-12 h-px bg-brand-500"></div>
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
