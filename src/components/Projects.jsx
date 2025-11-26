import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaLaptopCode, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const projectsData = [
        {
            type: 'involvement',
            title: 'Class Representative',
            organization: 'Bishop Heber College Department of Computer Science',
            period: 'July 2021 - April 2024',
            description: [
                'Acted as a bridge between faculty and classmates; resolved academic issues effectively.',
                'Coordinated classroom activities and contributed to maintaining discipline and communication.',
            ],
        },
        {
            type: 'project',
            title: 'Hand Gestures to Control Computer Volume and Cursor',
            description: [
                'Developed a computer vision system using OpenCV and MediaPipe to detect and track hand gestures.',
                'Utilized OpenCV and MediaPipe for real-time hand gesture recognition.',
                'Showcased creative application of machine learning and human-computer interaction principles.',
            ],
            tools: ['Python', 'OpenCV', 'MediaPipe', 'Machine Learning'],
            github: 'https://github.com/shiva0042/hand-gesture',
        },
        {
            type: 'project',
            title: 'NEST - Near Easy Shop Tracker',
            description: [
                'A Flutter-based grocery discovery and shopping application that helps users find nearby grocery stores and manage their shopping experience.',
                'Features include interactive map discovery, detailed shop information, product catalog browsing, shopping cart management, and integrated billing system.',
                'Implemented with Google Maps integration for location services and comprehensive inventory management for shop owners.',
            ],
            tools: ['Flutter', 'Google Maps API', 'Provider/Riverpod', 'Geolocator', 'Dart'],
            github: 'https://github.com/shiva0042/NEST',
        },
        {
            type: 'involvement',
            title: 'Joint Vice President',
            organization: 'Bishop Heber College Department of Computer Science',
            period: 'July 2023 - April 2024',
            description: [
                'Lead departmental student committees and organized events such as seminars, tech fests, and workshops.',
                'Encouraged peer engagement and supported juniors in academic and co-curricular activities.',
            ],
        },
        {
            type: 'project',
            title: 'Resume Screening AI System',
            description: [
                'Developed a web-based application using Streamlit and Natural Language Processing (NLP) techniques to automate resume screening.',
                'Used Python libraries like spaCy and scikit-learn for text extraction and similarity analysis.',
                'Created a user-friendly interface for uploading resumes and job descriptions.',
                'Achieved 85% accuracy in matching resumes with job requirements, significantly streamlining the hiring process.',
            ],
            tools: ['Python', 'NLP', 'Streamlit', 'Machine Learning'],
            github: 'https://github.com/shiva0042/resume-screening-ai',
        },
        {
            type: 'project',
            title: 'Titanic Survival Prediction',
            description: [
                'Developed a machine learning model using the Titanic dataset to predict passenger survival.',
                'Executed comprehensive data preprocessing, including handling missing values and feature engineering.',
                'Trained and evaluated models using scikit-learn, achieving 80% accuracy with Logistic Regression and Random Forest models.',
                'Demonstrated proficiency in classical machine learning workflows and model evaluation techniques.',
            ],
            tools: ['Python', 'Excel', 'scikit-learn', 'Machine Learning'],
            github: 'https://github.com/shiva0042/titanic-survival-prediction',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
        <section id="projects" className="section-container bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-heading"
                >
                    <FaLaptopCode className="inline-block mr-4 mb-2" />
                    My <span className="gradient-text">Projects & Involvement</span>
                </motion.h2>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="relative"
                >
                    {/* Timeline Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 transform md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {projectsData.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                    } items-center`}
                            >
                                {/* Timeline Dot */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 z-10"
                                >
                                    <div className="relative">
                                        <div className={`w-6 h-6 rounded-full ${item.type === 'project'
                                                ? 'bg-gradient-to-r from-primary-500 to-accent-500'
                                                : 'bg-gradient-to-r from-accent-500 to-primary-500'
                                            } animate-pulse`}></div>
                                        <div className={`absolute inset-0 rounded-full blur-md ${item.type === 'project'
                                                ? 'bg-gradient-to-r from-primary-500 to-accent-500'
                                                : 'bg-gradient-to-r from-accent-500 to-primary-500'
                                            }`}></div>
                                    </div>
                                </motion.div>

                                {/* Content Card */}
                                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                                    }`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02, y: -5 }}
                                        className={`card group ${item.type === 'project'
                                                ? 'border-primary-500/30'
                                                : 'border-accent-500/30'
                                            }`}
                                    >
                                        {/* Type Badge */}
                                        <div className="mb-4">
                                            <span className={`inline-block px-4 py-1 rounded-full text-xs font-semibold ${item.type === 'project'
                                                    ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                                                    : 'bg-accent-500/20 text-accent-400 border border-accent-500/30'
                                                }`}>
                                                {item.type === 'project' ? 'PROJECT' : 'INVOLVEMENT'}
                                            </span>
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-bold gradient-text mb-3">
                                            {item.title}
                                        </h3>

                                        {item.organization && (
                                            <div className="mb-3 space-y-1">
                                                <p className="text-gray-300 font-semibold">{item.organization}</p>
                                                <p className="text-sm text-gray-400">{item.period}</p>
                                            </div>
                                        )}

                                        <ul className="space-y-2 mb-4">
                                            {item.description.map((desc, i) => (
                                                <li key={i} className="flex items-start gap-2 text-gray-300 text-sm">
                                                    <span className={`mt-1 ${item.type === 'project' ? 'text-primary-400' : 'text-accent-400'
                                                        }`}>•</span>
                                                    <span>{desc}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {item.tools && (
                                            <div className="flex flex-wrap gap-2 mb-4">
                                                {item.tools.map((tool, i) => (
                                                    <span
                                                        key={i}
                                                        className="px-3 py-1 bg-slate-700/50 text-gray-300 text-xs rounded-full border border-slate-600"
                                                    >
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        {item.github && (
                                            <motion.a
                                                href={item.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="inline-flex items-center gap-2 btn-secondary"
                                            >
                                                <FaGithub />
                                                <span>View Project</span>
                                                <FaExternalLinkAlt className="text-sm" />
                                            </motion.a>
                                        )}

                                        {/* Hover glow */}
                                        <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl ${item.type === 'project'
                                                ? 'bg-gradient-to-r from-primary-500/20 to-accent-500/20'
                                                : 'bg-gradient-to-r from-accent-500/20 to-primary-500/20'
                                            }`}></div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Coming Soon */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <div className="inline-block card px-8 py-4">
                        <p className="text-xl gradient-text font-semibold">
                            More exciting projects coming soon...
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
