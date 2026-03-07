import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-brand-950 text-brand-50 pt-20 pb-10 border-t border-brand-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    <div className="col-span-1 md:col-span-4">
                        <Link href="/" className="font-serif text-3xl font-semibold tracking-tight mb-6 inline-block">
                            Trombay<span className="text-brand-500 italic">Trading.</span>
                        </Link>
                        <p className="text-brand-200 text-sm mb-6 max-w-sm leading-relaxed font-light">
                            Purveyors of fine leather manufacturing. Combining a heritage of craftsmanship with modern global supply chain excellence from Trombay, India.
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-2 md:col-start-6">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-6">Maison</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">Our Story</Link></li>
                            <li><Link href="/sustainability" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">Heritage</Link></li>
                            <li><Link href="/careers" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">Atelier</Link></li>
                            <li><Link href="/blog" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">Journal</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-6">Collections</h3>
                        <ul className="space-y-4">
                            <li><Link href="/products/leather-goods" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">Finished Hides</Link></li>
                            <li><Link href="/products/accessories" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">Goods</Link></li>
                            <li><Link href="/products/apparel" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">Sartorial</Link></li>
                            <li><Link href="/products/custom" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">Bespoke</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-6">Correspond</h3>
                        <ul className="space-y-4 text-sm text-brand-200 font-light">
                            <li><a href="mailto:contact@trombaytrading.com" className="hover:text-brand-50 transition-colors">contact@trombaytrading.com</a></li>
                            <li>+91 (0) 123 456 7890</li>
                            <li className="leading-relaxed">Trombay Trading Post<br />Trombay, Mumbai<br />India</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-400/80 uppercase tracking-widest">
                    <p>&copy; {new Date().getFullYear()} Trombay Trading LLP. All rights reserved.</p>
                    <div className="flex space-x-8 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-brand-200 transition-colors">Privacy</Link>
                        <Link href="/terms" className="hover:text-brand-200 transition-colors">Terms</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
