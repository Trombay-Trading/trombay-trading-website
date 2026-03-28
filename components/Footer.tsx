import Link from 'next/link';
import { Globe } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-brand-950 text-brand-50 pt-20 pb-10 border-t border-brand-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

                    <div className="col-span-1 md:col-span-4">
                        <Link href="/" className="font-serif text-3xl font-semibold tracking-tight mb-6 inline-flex flex-col leading-none">
                            <span className="flex items-center">
                                Tr<Globe className="w-5 h-5 mx-[1px] text-brand-500 mb-1" strokeWidth={2.5} />mbay
                            </span>
                            <span className="text-brand-500">Trading.</span>
                        </Link>
                        <p className="text-brand-200 text-sm mb-6 max-w-sm leading-relaxed font-light">
                            Purveyors of fine leather manufacturing. Combining a heritage of craftsmanship with modern global supply chain excellence from Trombay, India.
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-2 md:col-start-6">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-6">Company</h3>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">About Us</Link></li>
                            <li><Link href="/sustainability" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">Sustainability</Link></li>
                            <li><Link href="/infrastructure" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">Infrastructure</Link></li>
                            <li><Link href="/contact" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-6">Products</h3>
                        <ul className="space-y-4">
                            <li><Link href="/products/leather-hides" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">Leather Hides</Link></li>
                            <li><Link href="/products/leather-goods" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">Leather Goods</Link></li>
                            <li><Link href="/products/apparel" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">Apparel</Link></li>
                            <li><Link href="/products/custom" className="text-brand-200 hover:text-brand-50 text-sm transition-colors">Custom Manufacturing</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-3">
                        <h3 className="text-xs font-semibold uppercase tracking-widest text-brand-400 mb-6">Correspond</h3>
                        <ul className="space-y-4 text-sm text-brand-200 font-light">
                            <li><a href="mailto:thetrombaytradingcompany@gmail.com" className="hover:text-brand-50 transition-colors">thetrombaytradingcompany@gmail.com</a></li>
                            <li><a href="tel:+919321623552" className="hover:text-brand-50 transition-colors">+91 9321623552</a></li>
                            <li className="leading-relaxed">Business hours: 3:30 AM to 3:30 PM GMT</li>
                            <li className="leading-relaxed">Noor House, Azad Nagar, Payali Pada<br />Trombay, Mumbai, Maharashtra<br />India, 400088</li>
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
