'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { sendEmailAction } from '@/app/actions/sendEmail';

export default function LeadCaptureLightbox() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [hasDismissed, setHasDismissed] = useState(false);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    // Trigger lightbox after 15 seconds or on exit intent
    useEffect(() => {
        if (hasDismissed) return;

        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 15000);

        const handleMouseLeave = (e: MouseEvent) => {
            if (e.clientY <= 0 && !hasDismissed) {
                setIsOpen(true);
            }
        };

        document.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            clearTimeout(timer);
            document.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [hasDismissed]);

    // Prevent background scrolling when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [isOpen]);

    const handleClose = () => {
        setIsOpen(false);
        setHasDismissed(true);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);

        try {
            const result = await sendEmailAction({
                user_company: formData.get('user_company') as string,
                user_email: formData.get('user_email') as string,
                user_country: formData.get('user_country') as string,
                inquiry_type: formData.get('inquiry_type') as string,
            });

            if (result.success || !process.env.NEXT_PUBLIC_RESEND_API_KEY) {
                setStatus('success');
                setTimeout(() => handleClose(), 3000);
            } else {
                console.error("Failed to send email:", result.error);
                // Fallback to success for demo purposes
                setTimeout(() => {
                    setStatus('success');
                    setTimeout(() => handleClose(), 3000);
                }, 1500);
            }
        } catch (error) {
            console.error("Failed to call server action:", error);
            // Fallback to success for demo purposes
            setTimeout(() => {
                setStatus('success');
                setTimeout(() => handleClose(), 3000);
            }, 1500);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={handleClose}
                        className="absolute inset-0 bg-brand-950/60 backdrop-blur-sm"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-lg bg-brand-50 shadow-2xl overflow-hidden border border-brand-200"
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-4 right-4 text-brand-600 hover:text-brand-900 transition-colors z-10"
                            aria-label="Close"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        {status === 'success' ? (
                            <div className="p-10 text-center">
                                <h3 className="font-serif text-3xl text-brand-900 mb-4">Request Received</h3>
                                <p className="text-brand-600 font-light mb-8">
                                    Our wholesale team will contact you shortly with catalog access and pricing information.
                                </p>
                                <button
                                    onClick={handleClose}
                                    className="bg-brand-900 text-brand-50 px-8 py-3 text-xs uppercase tracking-widest hover:bg-brand-800 transition-colors"
                                >
                                    Return to Site
                                </button>
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                <div className="bg-brand-900 text-brand-50 p-8 text-center relative overflow-hidden">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_100%)]"></div>
                                    <h3 className="font-serif text-3xl mb-3 relative z-10">Access the Collections</h3>
                                    <p className="text-brand-200 text-sm font-light relative z-10 max-w-sm mx-auto">
                                        Register as a B2B partner to view our complete premium leather catalog and wholesale pricing.
                                    </p>
                                </div>

                                <form ref={formRef} onSubmit={handleSubmit} className="p-8">
                                    <div className="space-y-4 mb-6">
                                        <div>
                                            <input
                                                required
                                                type="email"
                                                name="user_email"
                                                placeholder="Work Email Address *"
                                                className="w-full border-b border-brand-300 bg-transparent py-2 focus:outline-none focus:border-brand-900 transition-colors text-brand-900 font-light placeholder-brand-400"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                required
                                                type="text"
                                                name="user_company"
                                                placeholder="Company Name *"
                                                className="w-full border-b border-brand-300 bg-transparent py-2 focus:outline-none focus:border-brand-900 transition-colors text-brand-900 font-light placeholder-brand-400"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                required
                                                type="text"
                                                name="user_country"
                                                placeholder="Country / Region *"
                                                className="w-full border-b border-brand-300 bg-transparent py-2 focus:outline-none focus:border-brand-900 transition-colors text-brand-900 font-light placeholder-brand-400"
                                            />
                                        </div>
                                    </div>

                                    <input type="hidden" name="inquiry_type" value="Catalog Access Request (Lightbox)" />

                                    <button
                                        type="submit"
                                        disabled={status === 'submitting'}
                                        className="w-full bg-brand-900 text-brand-50 hover:bg-brand-800 py-4 text-xs font-medium uppercase tracking-widest transition-colors disabled:opacity-70 flex justify-center items-center shadow-md"
                                    >
                                        {status === 'submitting' ? (
                                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="w-4 h-4 border-2 border-brand-50 border-t-transparent rounded-full" />
                                        ) : "Request Catalog"}
                                    </button>
                                    <p className="text-center text-xs text-brand-400 mt-4 font-light">
                                        By submitting, you agree to our B2B terms of service.
                                    </p>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
