'use client';
import { Gem, Layers, PenTool, Tag, ShieldCheck, Scissors } from 'lucide-react';

export default function TrustSignals() {
    const signals = [
        {
            icon: Gem,
            title: "Premium Materials",
            desc: "Sourcing the finest full-grain and top-grain hides from elite global tanneries."
        },
        {
            icon: Layers,
            title: "Vast Product Line",
            desc: "Manufacturing a diverse range of specialty leather goods to match your specifications."
        },
        {
            icon: PenTool,
            title: "Master Craftsmanship",
            desc: "Decades of heritage expertise ready to tackle projects of any scale or complexity."
        },
        {
            icon: Tag,
            title: "Private Labeling",
            desc: "End-to-end white label manufacturing that reduces your procurement and production costs."
        },
        {
            icon: ShieldCheck,
            title: "Rigorous Quality",
            desc: "Multi-tiered inspection systems ensuring flawless conformance at every stage of production."
        },
        {
            icon: Scissors,
            title: "Bespoke Production",
            desc: "Custom manufacturing expertise designed to integrate seamlessly into your brand's existing lines."
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-y-16 max-w-6xl mx-auto">
                    {signals.map((signal, idx) => {
                        const Icon = signal.icon;
                        return (
                            <div
                                key={idx}
                                className={`flex flex-col items-center text-center px-4 sm:px-8 ${idx % 3 !== 2 ? 'md:border-r border-brand-200' : ''
                                    }`}
                            >
                                <div className="mb-6 text-brand-900">
                                    <Icon className="w-10 h-10" strokeWidth={1.5} />
                                </div>
                                <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-brand-900 mb-4">{signal.title}</h4>
                                <p className="text-brand-600 font-light text-sm leading-relaxed max-w-xs">{signal.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
