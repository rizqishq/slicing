import React from "react";
import {
    Mail,
    Phone,
    Instagram,
    Github,
    Dribbble,
    Linkedin,
} from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="bg-purple-50 py-20">
            <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
                {/* Left Content */}
                <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        Contact Me
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-md">
                        Interested working together? Let’s talk about your
                        project and make something amazing!
                    </p>

                    <div className="space-y-4">
                        {/* Email */}
                        <div className="flex items-center gap-3">
                            <Mail className="text-purple-600 w-5 h-5" />
                            <a
                                href="mailto:hello@email.com"
                                className="text-purple-600 font-medium hover:underline"
                            >
                                hello@email.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="flex items-center gap-3">
                            <Phone className="text-purple-600 w-5 h-5" />
                            <a
                                href="tel:+6281234567890"
                                className="text-purple-600 font-medium hover:underline"
                            >
                                +62 812-3456-7890
                            </a>
                        </div>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-5 mt-8">
                        <a
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-pink-500 hover:opacity-75 transition"
                            aria-label="Instagram"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href="https://github.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-gray-800 hover:opacity-75 transition"
                            aria-label="GitHub"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://dribbble.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-purple-500 hover:opacity-75 transition"
                            aria-label="Dribbble"
                        >
                            <Dribbble className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-600 hover:opacity-75 transition"
                            aria-label="LinkedIn"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Right Form */}
                <form className="bg-white rounded-2xl shadow-lg p-8 space-y-5">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="you@email.com"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-1">
                            Message
                        </label>
                        <textarea
                            placeholder="Type your message..."
                            rows="4"
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium py-3 rounded-md shadow-md hover:opacity-90 transition"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
