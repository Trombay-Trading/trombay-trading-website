import EnquiryForm from '@/components/EnquiryForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
    title: 'Contact Us - Trombay Trading LLP',
    description: 'Get in touch with Trombay Trading LLP for wholesale inquiries, custom orders, and partnerships.',
};

export default function ContactPage() {
    return (
        <div className="bg-brand-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                        alt="Professional Office Space"
                        className="object-cover w-full h-full opacity-80"
                    />
                    <div className="absolute inset-0 bg-brand-950/70 mix-blend-multiply"></div>
                </div>

                <div className="relative z-10 text-center container mx-auto px-4">
                    <h1 className="font-serif text-5xl md:text-6xl text-brand-50 mb-6 font-semibold tracking-tight">
                        Contact <span className="italic text-brand-400">Us</span>
                    </h1>
                    <p className="text-xl text-brand-200 max-w-2xl mx-auto font-light">
                        Connect with our team for bespoke manufacturing, wholesale inquiries, or to discuss a potential partnership.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-20">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">

                        {/* Contact Information */}
                        <div className="lg:col-span-5 space-y-12">
                            <div>
                                <h2 className="text-3xl font-serif text-brand-900 mb-6 font-medium">Get in Touch</h2>
                                <p className="text-brand-700 leading-relaxed mb-8">
                                    We look forward to hearing from you. Whether you are interested in our products or require custom manufacturing solutions, our dedicated team is here to assist you.
                                </p>
                            </div>

                            <div className="space-y-8 bg-white p-8 border border-brand-200 shadow-sm rounded-sm">

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <MapPin className="h-6 w-6 text-brand-500" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-brand-900 mb-2">Our Headquarters</h3>
                                        <p className="text-brand-700 leading-relaxed">
                                            Noor House, Azad Nagar, Payali Pada<br />
                                            Trombay, Mumbai, Maharashtra<br />
                                            India, 400088
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <Phone className="h-6 w-6 text-brand-500" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-brand-900 mb-2">Phone</h3>
                                        <p className="text-brand-700">
                                            <a href="tel:+919321623552" className="hover:text-brand-900 transition-colors">
                                                +91 9321623552
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <Mail className="h-6 w-6 text-brand-500" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-brand-900 mb-2">Email</h3>
                                        <p className="text-brand-700">
                                            <a href="mailto:thetrombaytradingcompany@gmail.com" className="hover:text-brand-900 transition-colors">
                                                thetrombaytradingcompany@gmail.com
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <Clock className="h-6 w-6 text-brand-500" />
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-medium text-brand-900 mb-2">Business Hours</h3>
                                        <p className="text-brand-700">
                                            3:30 AM to 3:30 PM GMT
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div className="bg-white p-8 border border-brand-200 shadow-sm rounded-sm mt-8">
                                <h3 className="text-xl font-medium text-brand-900 mb-2 font-serif">Schedule a Meeting</h3>
                                <p className="text-brand-700 mb-6">
                                    Book a 30-minute consultation directly with our team at your convenience.
                                </p>
                                <a
                                    href="https://calendly.com/thetrombaytradingcompany/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex justify-center items-center bg-brand-900 text-brand-50 hover:bg-brand-800 px-6 py-3 text-xs font-medium uppercase tracking-widest transition-all duration-300 w-full"
                                >
                                    Book on Calendly
                                </a>
                            </div>

                            <div className="relative h-64 w-full rounded-sm overflow-hidden border border-brand-200 mt-8">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80"
                                    alt="Business Meeting"
                                    className="object-cover w-full h-full"
                                />
                            </div>

                        </div>

                        {/* Enquiry Form */}
                        <div className="lg:col-span-7">
                            <div className="bg-white p-8 md:p-12 border border-brand-200 shadow-xl rounded-sm">
                                <div className="mb-8">
                                    <h2 className="text-3xl font-serif text-brand-900 mb-4 font-medium">Send an Enquiry</h2>
                                    <p className="text-brand-600">
                                        Please fill out the form below detailing your requirements, and a representative will get back to you promptly.
                                    </p>
                                </div>

                                {/* Embedded global enquiry form tailored for this page */}
                                <EnquiryForm />

                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
