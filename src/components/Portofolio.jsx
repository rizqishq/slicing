import React from "react";
import Portofolio1 from "../assets/images/portofolio1.png";
import Portofolio2 from "../assets/images/portofolio2.png";
import Portofolio3 from "../assets/images/portofolio3.png";
import { ArrowRight } from "lucide-react";

const Portfolio = () => {
    const projects = [
        {
            title: "Dashboard Web App",
            category: "UI/UX, Frontend",
            tag: "UI Design",
            image: Portofolio1,
        },
        {
            title: "Mobile App Landing",
            category: "Design, Branding",
            tag: "Mobile App",
            image: Portofolio2,
        },
        {
            title: "Motion Graphic",
            category: "Animation, Branding",
            tag: "Motion",
            image: Portofolio3,
        },
    ];

    return (
        <section className="bg-gray-50 py-20" id="portfolio">
            <div className="container mx-auto max-w-screen-2xl 2xl:max-w-[1440px] px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                    Portfolio
                </h2>

                {/* Card Container */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
                        >
                            {/* Gambar */}
                            <div className="relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-52 object-cover"
                                />
                                <span className="absolute top-3 right-3 bg-purple-100 text-purple-700 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                                    {project.tag}
                                </span>
                            </div>

                            {/* Konten */}
                            <div className="p-5">
                                <h3 className="font-semibold text-gray-800 text-lg mb-1">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-gray-500">
                                    {project.category}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Tombol */}
                <div className="text-center mt-12">
                    <a
                        href="https://dribbble.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-medium px-6 py-3 rounded-lg shadow-md hover:opacity-90 transition"
                    >
                        <ArrowRight size={16} />
                        More on Dribbble
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
