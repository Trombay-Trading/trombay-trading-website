'use client';
import { motion } from 'framer-motion';

export default function HowWeWork() {
    const steps = [
        {
            num: "01",
            title: "Sampling",
            desc: "We work closely with brands to understand their vision. Using advanced CAD systems, digital pattern making, and high-precision machinery, we create accurate prototypes and product samples."
        },
        {
            num: "02",
            title: "Production & Quality Control",
            desc: "Once the sample is approved, production begins. Our integrated manufacturing process ensures efficiency, traceability, and consistent quality at every stage."
        },
        {
            num: "03",
            title: "Packaging & Export",
            desc: "Finished products undergo final inspection and are packed to international export standards. We manage documentation, logistics coordination, and dispatch as per client requirements."
        }
    ];

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-20">
                    <h2 className="text-brand-400 uppercase tracking-[0.2em] text-xs font-semibold mb-4">Who We Are</h2>
                    <h3 className="font-serif text-4xl md:text-5xl text-brand-900">How We Work</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[4/3] w-full bg-brand-100 overflow-hidden shadow-2xl"
                    >
                        <div className="absolute inset-0 bg-brand-900/10 transition-all duration-700 z-10"></div>
                        <div className="absolute inset-0 flex items-center justify-center bg-brand-200">
                            <span className="font-serif italic text-brand-500 opacity-60">Craftsmanship Imagery</span>
                        </div>
                        {/* Outline accent */}
                        <div className="absolute top-4 left-4 bottom-4 right-4 border border-brand-50/30 z-20 pointer-events-none"></div>
                    </motion.div>

                    {/* Steps Side */}
                    <div className="space-y-12">
                        {steps.map((step, idx) => (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 * idx }}
                                key={idx}
                                className="relative flex gap-6 md:gap-8"
                            >
                                {/* Connecting Line */}
                                {idx !== steps.length - 1 && (
                                    <div className="absolute left-[31px] sm:left-[39px] top-[80px] bottom-[-48px] w-px border-l-[1.5px] border-dashed border-brand-300"></div>
                                )}

                                {/* Number Circle */}
                                <div className="relative z-10 flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-brand-900 text-brand-50 flex items-center justify-center font-serif text-2xl sm:text-3xl shadow-lg">
                                    {step.num}
                                </div>

                                {/* Content */}
                                <div className="pt-2 sm:pt-4">
                                    <h4 className="font-serif text-2xl text-brand-900 mb-3">{step.title}</h4>
                                    <p className="text-brand-600 font-light text-sm leading-relaxed max-w-md">{step.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
