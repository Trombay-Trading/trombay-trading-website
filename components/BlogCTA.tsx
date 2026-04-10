import Link from 'next/link';

export default function BlogCTA() {
    return (
        <section className="bg-brand-950 text-brand-50 py-16 lg:py-24 text-center mt-12">
            <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-3xl lg:text-4xl font-serif font-semibold tracking-tight mb-6">
                    Looking for a reliable manufacturing partner?
                </h2>
                <p className="text-brand-200 mb-10 text-lg">
                    Discover how Trombay Trading LLC can streamline your supply chain and provide elite global export solutions.
                </p>
                <Link
                    href="/#inquiry"
                    className="inline-block bg-brand-500 text-brand-950 text-sm font-medium uppercase tracking-widest rounded px-8 py-4 transition-all hover:-translate-y-0.5 hover:shadow-lg shadow-black/20"
                >
                    Request Quote
                </Link>
            </div>
        </section>
    );
}
