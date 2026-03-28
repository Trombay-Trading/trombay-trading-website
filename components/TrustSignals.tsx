'use client';
import { Globe, Truck, Tag, ShieldCheck, Layers, FileText, Handshake } from 'lucide-react';
import { GlareCard } from '@/components/ui/glare-card';

export default function TrustSignals() {
    const signals = [
        {
            icon: Globe,
            title: "Trusted Sourcing Network",
            desc: "Access to certified tanneries and specialized manufacturers across India."
        },
        {
            icon: Truck,
            title: "Export-Ready Supply Chain",
            desc: "Structured procurement, production coordination, and global shipping support."
        },
        {
            icon: Tag,
            title: "Custom & Private Label",
            desc: "Manufacturing tailored to your technical packs, branding, and market standards."
        },
        {
            icon: ShieldCheck,
            title: "Consistent Quality Assurance",
            desc: "Multi-level inspection and strict material selection at every stage."
        },
        {
            icon: Layers,
            title: "Scalable Order Capacity",
            desc: "From small batches to large wholesale volumes, delivered with reliability."
        },
        {
            icon: Handshake,
            title: "Long-Term Partnership",
            desc: "We work as a sourcing and production partner — not just a supplier."
        }
    ];

    return (
        <section className="py-24 bg-brand-50 border-y border-brand-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="font-serif text-4xl md:text-5xl text-brand-900 mb-6">Why Partner With Us?</h2>
                    <div className="flex items-center justify-center gap-2 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400"></div>
                        <div className="w-16 h-px bg-brand-400"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {signals.map((signal, idx) => {
                        const Icon = signal.icon;
                        return (
                            <GlareCard key={idx} className="flex flex-col items-center justify-center p-8 text-center h-full">
                                <div className="mb-6 text-brand-900">
                                    <Icon className="w-10 h-10" strokeWidth={1.5} />
                                </div>
                                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-900 mb-4">{signal.title}</h4>
                                <p className="text-brand-600 font-medium text-sm leading-relaxed max-w-xs">{signal.desc}</p>
                            </GlareCard>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
