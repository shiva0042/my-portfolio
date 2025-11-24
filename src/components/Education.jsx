import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const educationData = [
        {
            degree: 'Master of Data Science',
            institution: 'Bharathidasan University | BDU',
            location: 'Trichy',
            period: '2024-2026',
            percentage: 'Current Percentage - 75.64%',
            image: `${import.meta.env.BASE_URL}assets/images/educat/pg.jpg`,
        },
        {
            degree: 'Bachelor of Computer Science',
            institution: 'Bishop Heber College | BHC',
            location: 'Trichy',
            period: '2021-2024 | Completed',
            percentage: 'Percentage - 72.65%',
            image: `${import.meta.env.BASE_URL}assets/images/educat/ug.png`,
        },
        {
            degree: 'HSC Science | Computer Science',
            institution: 'Campion Anglo Indian Higher Secondary School | State Board',
            location: 'Trichy',
            period: '2020-2021 | Completed',
            percentage: 'Percentage - 89.35%',
            image: `${import.meta.env.BASE_URL}assets/images/educat/school%20(2).jpg`,
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="education" className="section-container bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-heading"
                >
                    <FaGraduationCap className="inline-block mr-4 mb-2" />
                    My <span className="gradient-text">Education</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-400 text-lg italic mb-16 max-w-3xl mx-auto"
                >
                    "Education is not the learning of facts, but the training of the mind to think."
                </motion.p>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="relative"
                >
                    {/* Timeline Line */}
                    <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500"></div>

                    <div className="space-y-12">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`relative grid md:grid-cols-2 gap-8 items-center ${index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
                                    }`}
                            >
                                {/* Content */}
                                <div className={`${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className="card group"
                                    >
                                        <div className="space-y-3">
                                            <h3 className="text-2xl md:text-3xl font-bold gradient-text">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-lg text-gray-300 font-semibold">
                                                {edu.institution}
                                            </p>
                                            <p className="text-gray-400">{edu.location}</p>
                                            <div className="flex flex-col gap-2 pt-2">
                                                <span className="inline-flex items-center gap-2 text-primary-400 font-semibold">
                                                    <span className="w-2 h-2 bg-primary-400 rounded-full"></span>
                                                    {edu.period}
                                                </span>
                                                <span className="inline-flex items-center gap-2 text-accent-400 font-semibold">
                                                    <span className="w-2 h-2 bg-accent-400 rounded-full"></span>
                                                    {edu.percentage}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Hover effect */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                                    </motion.div>
                                </div>

                                {/* Image */}
                                <div className={`${index % 2 === 0 ? 'md:pl-12 md:col-start-2 md:row-start-1' : 'md:pr-12'}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.05, rotate: 2 }}
                                        className="relative group"
                                    >
                                        {/* Glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-300"></div>

                                        <div className="relative overflow-hidden rounded-2xl border-2 border-slate-700 group-hover:border-primary-500/50 transition-colors duration-300">
                                            <img
                                                src={edu.image}
                                                alt={edu.degree}
                                                className="w-full h-64 object-cover"
                                            />
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Timeline Dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                >
                                    <div className="relative">
                                        <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full animate-pulse"></div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full blur-md"></div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
