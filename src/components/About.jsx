import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaFileDownload } from 'react-icons/fa';

const About = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="about" className="section-container bg-slate-900/50">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-heading"
                >
                    <FaUser className="inline-block mr-4 mb-2" />
                    About <span className="gradient-text">Me</span>
                </motion.h2>

                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* Profile Image */}
                    <motion.div variants={itemVariants} className="relative">
                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            className="relative group"
                        >
                            {/* Glow effect */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-300"></div>

                            <div className="relative">
                                <img
                                    src="/assets/images/profiletop.jpg"
                                    alt="SRK Profile"
                                    className="relative rounded-2xl w-full h-auto object-cover shadow-2xl border-2 border-slate-700"
                                />

                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </motion.div>

                        {/* Floating decorative elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl"
                        ></motion.div>
                        <motion.div
                            animate={{ y: [0, 10, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl"
                        ></motion.div>
                    </motion.div>

                    {/* Content */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold mb-2">I'm SRK</h3>
                            <p className="text-xl text-primary-400 font-semibold mb-4">Data Science Student</p>
                        </div>

                        <p className="text-gray-300 text-lg leading-relaxed">
                            I am a Data Scientist | Data Analyst based in Trichy, Tamilnadu, India.
                            I am a Computer Science UnderGraduate from BHC.
                            I am a Data Science PostGraduate from BDU.
                            I am very passionate about improving my analytical skills.
                            I make insights from analysing the data.
                            Love to analyze and make decisions through predictions.
                        </p>

                        {/* Info Cards */}
                        <div className="grid grid-cols-1 gap-4 mt-8">
                            <motion.div
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="card flex items-center gap-4 group"
                            >
                                <div className="p-3 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all duration-300">
                                    <FaEnvelope className="text-2xl text-primary-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="text-white font-semibold">shiva20048@gmail.com</p>
                                </div>
                            </motion.div>

                            <motion.div
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="card flex items-center gap-4 group"
                            >
                                <div className="p-3 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg group-hover:from-primary-500/30 group-hover:to-accent-500/30 transition-all duration-300">
                                    <FaMapMarkerAlt className="text-2xl text-accent-400" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p className="text-white font-semibold">Trichy, Tamilnadu, India - 620018</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Resume Button */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="pt-6"
                        >
                            <a
                                href="https://drive.google.com/file/d/1OmZ71YpQTdjcudm-Ik3SyQSxIwWdKiib/view?usp=drive_link"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 btn-primary"
                            >
                                <span>Download Resume</span>
                                <FaFileDownload className="text-xl" />
                            </a>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
