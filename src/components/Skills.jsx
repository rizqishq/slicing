import { Brush, Code, PenTool, Zap } from "lucide-react";

export default function Skills() {
    const skills = [
        {
            icon: <Brush className="w-8 h-8 text-pink-500" />,
            title: "UI/UX Design",
            desc: "Figma, Adobe XD, Sketch",
            bg: "bg-pink-100",
        },
        {
            icon: <Code className="w-8 h-8 text-purple-500" />,
            title: "Frontend Dev",
            desc: "React, Vue, Tailwind",
            bg: "bg-blue-100",
        },
        {
            icon: <PenTool className="w-8 h-8 text-yellow-500" />,
            title: "Branding",
            desc: "Logo, Identity, Print",
            bg: "bg-yellow-100",
        },
        {
            icon: <Zap className="w-8 h-8 text-indigo-500" />,
            title: "Motion Graphic",
            desc: "After Effects, Lottie",
            bg: "bg-indigo-100",
        },
    ];

    return (
        <section id="skills" className="bg-white text-center py-16 flex justify-center">
            {/* Container lebar untuk layar besar */}
            <div className="container mx-auto w-full max-w-screen-2xl 2xl:max-w-[1440px] px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                    My Skills
                </h2>

                {/* max-w-[1024px] meniru frame hijau */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[1200px] mx-auto">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`${skill.bg} rounded-2xl p-8 shadow-sm hover:shadow-lg transition duration-300`}
                        >
                            <div className="flex flex-col items-center space-y-4">
                                {skill.icon}
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {skill.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {skill.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
