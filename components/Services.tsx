'use client';
import { motion } from 'framer-motion';
import { Search, ShieldCheck, Truck, FileText } from 'lucide-react';

export default function Services() {
    const services = [
        {
            icon: Search,
            title: "Strategic Sourcing & Procurement",
            desc: "Identifying and vetting top-tier manufacturers across India to source premium Leather Goods at highly competitive rates."
        },
        {
            icon: ShieldCheck,
            title: "Quality Assurance & Compliance",
            desc: "Conducting rigorous quality control checks and ensuring all products meet the specific regulatory standards of the destination country."
        },
        {
            icon: Truck,
            title: "Seamless Logistics & Supply Chain Management",
            desc: "Handling all aspects of freight forwarding, warehousing, and shipping to ensure timely and safe delivery globally."
        },
        {
            icon: FileText,
            title: "Customs & Documentation",
            desc: "Managing all export/import documentation, letter of credit processing, and customs clearances for a frictionless cross-border transaction."
        }
    ];

    return (
        <section id="services" className="py-32 bg-white relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">

                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-brand-500 uppercase tracking-[0.2em] text-xs font-semibold mb-4">services we offer to our clients at the present</h2>
                        <h3 className="font-serif text-4xl md:text-5xl text-brand-900 leading-tight mb-6">
                            End-to-End Merchant <br /><span className="italic font-light">Exporting Solutions.</span>
                        </h3>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="max-w-md"
                    >
                        <p className="text-brand-600 font-light text-base leading-relaxed">
                            We manage the complexities of international trade so our clients can focus on their core business. Our present services include:
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 lg:gap-x-20">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.15 }}
                                key={idx}
                                className="group relative"
                            >
                                {/* Decorative line */}
                                <div className="absolute -left-6 top-0 bottom-0 w-px bg-brand-100 group-hover:bg-brand-400 transition-colors duration-500 hidden sm:block"></div>

                                <div className="flex gap-6 relative z-10">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-12 h-12 flex items-center justify-center bg-brand-50 border border-brand-200 text-brand-800 rounded-sm group-hover:bg-brand-900 group-hover:text-brand-50 transition-all duration-500">
                                            <Icon className="w-5 h-5" strokeWidth={1.5} />
                                        </div>
                                    </div>

                                    <div>
                                        <h4 className="font-serif text-2xl text-brand-900 mb-3 group-hover:text-brand-700 transition-colors duration-300">{service.title}</h4>
                                        <p className="text-brand-600 font-light text-sm md:text-base leading-relaxed">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
