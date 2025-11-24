import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [flippedCards, setFlippedCards] = useState({});

    const certificationsData = [
        {
            id: 1,
            title: 'Marcello Tech In Backend Development',
            image: '/assets/images/certifications/certificate (1).jpeg',
            description: [
                'Completed a 5-day intensive internship focused on Backend Development.',
                'Gained hands-on experience in real-world backend concepts and practical implementation.',
                'Strengthened fundamentals in server-side technologies through guided training.',
            ],
        },
        {
            id: 2,
            title: 'Research Paper Writing Tools (LaTeX & Overleaf) CBIT, Hyderabad',
            image: '/assets/images/certifications/certificate (2).jpeg',
            description: [
                'Participated in a national-level workshop on professional research paper writing.',
                'Learnt LaTeX and Overleaf for academic documentation and publication-quality formatting.',
                'Enhanced research and technical writing skills under the guidance of CSE experts.',
            ],
        },
        {
            id: 3,
            title: 'Introduction to Cloud Computing – IBM (Coursera)',
            image: '/assets/images/certifications/certificate (3).jpeg',
            description: [
                'Completed IBM\'s foundational course on Cloud Computing concepts and architecture.',
                'Covered cloud models, deployment techniques, and real-world applications.',
                'Strengthened understanding of modern cloud technologies used across industries.',
            ],
        },
        {
            id: 4,
            title: 'PowerBI Workshop',
            image: '/assets/images/certifications/certificate(6).png',
            description: [
                'AI-powered interactive dashboards',
                'Real-time analytics & insights',
                'AI visualizations & data storytelling',
            ],
        },
        {
            id: 5,
            title: 'Data Analytics Job Simulation Deloitte (Forage)',
            image: '/assets/images/certifications/certificate (4).png',
            description: [
                'Finished Deloitte\'s virtual job simulation focused on Data Analytics and Forensic Technology.',
                'Completed tasks involving data cleaning, insight generation, and real-case analysis.',
                'Gained practical exposure to Deloitte\'s workflow and analytical problem-solving approach.',
            ],
        },
        {
            id: 6,
            title: 'SQL for Data Science LinkedIn Learning',
            image: '/assets/images/certifications/certificate (5).png',
            description: [
                'Completed a hands-on SQL Data Science program with practical coding exercises.',
                'Developed strong skills in querying, data manipulation, and analytical SQL operations.',
                'Applied SQL to real data scenarios relevant to data science workflows.',
            ],
        },
    ];

    const toggleFlip = (id) => {
        console.log('Flipping card:', id, 'Current state:', flippedCards[id]);
        setFlippedCards((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="certifications" className="section-container">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-heading"
                >
                    <FaCertificate className="inline-block mr-4 mb-2" />
                    Certifications & <span className="gradient-text">Achievements</span>
                </motion.h2>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {certificationsData.map((cert) => (
                        <motion.div
                            key={cert.id}
                            variants={itemVariants}
                            className="relative h-96"
                        >
                            <div
                                className="relative w-full h-full cursor-pointer"
                                style={{
                                    perspective: '1000px',
                                }}
                            >
                                <div
                                    className="relative w-full h-full transition-all duration-700"
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        transform: flippedCards[cert.id] ? 'rotateY(180deg)' : 'rotateY(0deg)',
                                    }}
                                    onClick={() => toggleFlip(cert.id)}
                                >
                                    {/* Front of Card */}
                                    <div
                                        className="absolute w-full h-full rounded-2xl overflow-hidden border-2 border-slate-700 group"
                                        style={{
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden',
                                        }}
                                    >
                                        {/* Glow effect */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition duration-300"></div>

                                        <div className="relative w-full h-full">
                                            <img
                                                src={cert.image}
                                                alt={cert.title}
                                                className="w-full h-full object-cover"
                                            />
                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent flex items-end p-6">
                                                <h3 className="text-white font-bold text-lg line-clamp-2">
                                                    {cert.title}
                                                </h3>
                                            </div>
                                            {/* Flip indicator */}
                                            <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-gray-300">
                                                Click to flip
                                            </div>
                                        </div>
                                    </div>

                                    {/* Back of Card */}
                                    <div
                                        className="absolute w-full h-full rounded-2xl overflow-hidden border-2 border-primary-500/50 bg-slate-800/95 backdrop-blur-sm p-6"
                                        style={{
                                            backfaceVisibility: 'hidden',
                                            WebkitBackfaceVisibility: 'hidden',
                                            transform: 'rotateY(180deg)',
                                        }}
                                    >
                                        <div className="h-full flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-xl font-bold gradient-text mb-4">
                                                    {cert.title}
                                                </h3>
                                                <ul className="space-y-2 text-gray-300 text-sm">
                                                    {cert.description.map((item, index) => (
                                                        <li key={index} className="flex items-start gap-2">
                                                            <span className="text-primary-400 mt-1">•</span>
                                                            <span>{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <a
                                                href={cert.image}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={(e) => e.stopPropagation()}
                                                className="btn-secondary text-center flex items-center justify-center gap-2"
                                            >
                                                <span>View Certificate</span>
                                                <FaExternalLinkAlt />
                                            </a>
                                        </div>

                                        {/* Decorative gradient */}
                                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
