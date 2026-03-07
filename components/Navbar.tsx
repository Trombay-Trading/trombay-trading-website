'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: 'Maison', href: '/about' },
        { name: 'Collections', href: '/products' },
        { name: 'Heritage', href: '/sustainability' },
        { name: 'Journal', href: '/blog' },
    ];

    return (
        <header className="bg-brand-50 border-b border-brand-200 sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-24">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link href="/" className="font-serif text-3xl font-semibold text-brand-900 tracking-tight">
                            Trombay<span className="text-brand-500 font-serif italic ml-1">Trading.</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-brand-700 hover:text-brand-500 font-medium uppercase tracking-widest transition-colors text-xs"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Actions */}
                    <div className="hidden md:flex items-center space-x-6">
                        <div className="flex items-center space-x-4 text-xs text-brand-600 uppercase tracking-widest">
                            <a href="mailto:contact@trombaytrading.com" className="hover:text-brand-400 flex items-center gap-2 transition-colors">
                                <span>Enquire</span>
                            </a>
                        </div>
                        <Link
                            href="#inquiry"
                            className="bg-brand-900 border border-brand-900 hover:bg-transparent hover:text-brand-900 text-brand-50 px-6 py-2.5 rounded font-medium text-xs uppercase tracking-widest transition-all duration-300"
                        >
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-brand-800 hover:text-brand-500 focus:outline-none p-2 transition-colors z-[60]"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-brand-50 border-b border-brand-200 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block px-3 py-4 text-base font-serif text-brand-900 border-b border-brand-200/50 hover:bg-brand-100 hover:text-brand-500 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mt-6 px-3">
                                <Link
                                    href="#inquiry"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="block w-full text-center bg-brand-900 text-brand-50 px-6 py-4 rounded font-medium text-xs uppercase tracking-widest"
                                >
                                    Get a Quote
                                </Link>
                                <div className="mt-6 text-center">
                                    <a href="mailto:contact@trombaytrading.com" className="text-xs text-brand-500 uppercase tracking-widest">
                                        contact@trombaytrading.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
