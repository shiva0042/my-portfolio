import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode } from 'react-icons/fa';

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        // Fetch skills from JSON file
        fetch('/skills.json')
            .then((response) => response.json())
            .then((data) => setSkills(data))
            .catch((error) => console.error('Error loading skills:', error));
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="skills" className="section-container">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-heading"
                >
                    <FaLaptopCode className="inline-block mr-4 mb-2" />
                    Skills & <span className="gradient-text">Abilities</span>
                </motion.h2>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.1,
                                rotate: [0, -5, 5, 0],
                                transition: { duration: 0.3 }
                            }}
                            className="card group cursor-pointer"
                        >
                            <div className="flex flex-col items-center justify-center space-y-4 p-4">
                                {/* Icon Container */}
                                <motion.div
                                    whileHover={{ rotate: 360 }}
                                    transition={{ duration: 0.6 }}
                                    className="relative"
                                >
                                    {/* Glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

                                    <div className="relative w-16 h-16 flex items-center justify-center bg-slate-700/50 rounded-full group-hover:bg-slate-700 transition-colors duration-300">
                                        <img
                                            src={skill.icon}
                                            alt={skill.name}
                                            className="w-12 h-12 object-contain"
                                        />
                                    </div>
                                </motion.div>

                                {/* Skill Name */}
                                <h3 className="text-center text-sm md:text-base font-semibold text-gray-300 group-hover:text-white transition-colors duration-300">
                                    {skill.name}
                                </h3>

                                {/* Animated underline */}
                                <motion.div
                                    className="h-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1, duration: 0.6 }}
                                ></motion.div>
                            </div>

                            {/* Hover border glow */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300 -z-10"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Decorative Elements */}
                <div className="relative mt-16">
                    <motion.div
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute -top-20 left-1/4 w-64 h-64 bg-primary-500/10 rounded-full blur-3xl"
                    ></motion.div>
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                        className="absolute -bottom-20 right-1/4 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl"
                    ></motion.div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
