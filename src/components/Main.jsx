import ProfileImage from "../assets/images/profile.jpg";
import { Github, Dribbble, Linkedin } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 min-h-screen flex items-center justify-center px-6 md:px-10 lg:px-16">
            <div className="container mx-auto w-full max-w-screen-2xl 2xl:max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-10">
                {/* --- LEFT CONTENT --- */}
                <div className="text-center md:text-left space-y-6">
                    <p className="text-indigo-500 font-medium">Hello, I'm</p>
                    <h1 className="font-extrabold text-gray-800 leading-tight text-[clamp(1.75rem,2.5vw+1rem,3.5rem)] md:text-6xl">
                        Creative Designer & <br /> Frontend Developer
                    </h1>
                    <p className="text-gray-600 max-w-md">
                        Passionate in creating beautiful and functional digital
                        experiences. I love blending creativity with technology
                        to make impactful solutions for users and brands.
                    </p>

                    {/* --- BUTTONS --- */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <button className="bg-gradient-to-r from-pink-500 to-indigo-500 text-white px-6 py-3 rounded-lg shadow-lg font-medium hover:opacity-90 transition">
                            See My Work
                        </button>
                        <button className="border border-indigo-400 text-indigo-500 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition">
                            Contact Me
                        </button>
                    </div>

                    {/* --- SOCIAL ICONS --- */}
                    <div className="flex justify-center md:justify-start space-x-6 pt-4 text-gray-600">
                        <a href="#" className="hover:text-pink-500 transition">
                            <Github size={22} />
                        </a>
                        <a
                            href="#"
                            className="hover:text-indigo-500 transition"
                        >
                            <Dribbble size={22} />
                        </a>
                        <a href="#" className="hover:text-blue-600 transition">
                            <Linkedin size={22} />
                        </a>
                    </div>
                </div>

                {/* --- RIGHT PHOTO --- */}
                <div className="relative mt-10 md:mt-0">
                    {/* Background Circle Glow */}
                    <div className="absolute -top-4 -left-6 w-40 h-40 bg-gray-200 rounded-full blur-3xl opacity-70"></div>
                    <div className="absolute -bottom-6 -right-8 w-44 h-44 bg-indigo-200 rounded-full blur-3xl opacity-70"></div>
                    <div className="absolute w-56 h-56 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-2xl opacity-70"></div>

                    {/* Profile Photo */}
                    <div className="relative w-56 h-56 md:w-64 md:h-64 xl:w-80 xl:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
                        <img
                            src={ProfileImage}
                            alt="Profile"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
