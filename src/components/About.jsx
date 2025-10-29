import React from "react";
import ProfileImage from "../assets/images/profile.jpg";
import { Check, Send } from "lucide-react";

const AboutSection = () => {
    return (
        <section id="about" className="bg-gray-50 py-16">
            <div className="container mx-auto max-w-screen-lg md:max-w-screen-xl 2xl:max-w-[1440px] px-6 flex flex-col md:flex-row items-center gap-10">
                {/* Gambar */}
                <div className="flex-shrink-0">
                    <img
                        src={ProfileImage}
                        alt="Profile"
                        className="w-64 h-64 md:w-72 md:h-72 xl:w-80 xl:h-80 rounded-2xl shadow-lg object-cover"
                    />
                </div>

                {/* Konten */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        About Me
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        Hi! I'm <span className="font-semibold">Rama</span>, a
                        passionate designer and frontend developer based in
                        Jakarta. With a background in visual design and a love
                        for coding, I specialize in <em>building websites</em>{" "}
                        and apps that are not only stunning but also
                        user-friendly.
                    </p>

                    {/* Skill Badges */}
                    <div className="flex flex-wrap gap-3 mb-8">
                        {[
                            "UI/UX Design",
                            "Web Development",
                            "Branding",
                            "Motion Graphics",
                        ].map((skill) => (
                            <span
                                key={skill}
                                className="bg-purple-100 text-purple-700 text-sm font-medium px-3 py-1 rounded-lg flex items-center gap-2"
                            >
                                <Check size={14} /> {skill}
                            </span>
                        ))}
                    </div>

                    {/* Tombol */}
                    <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:opacity-90 transition"
                    >
                        <Send size={16} /> Let's Connect
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
