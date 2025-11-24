import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaArrowDown } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Hero = () => {
    const socialLinks = [
        { icon: FaEnvelope, href: 'mailto:shiva20048@gmail.com', label: 'Email', color: 'hover:text-red-400' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/-shiva-rama', label: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: FaGithub, href: 'https://github.com/shiva0042', label: 'GitHub', color: 'hover:text-purple-400' },
        { icon: FaWhatsapp, href: 'https://wa.me/918610874606', label: 'WhatsApp', color: 'hover:text-green-400' },
        { icon: FaInstagram, href: 'https://www.instagram.com/__.s_r_k.___', label: 'Instagram', color: 'hover:text-pink-400' },
    ];

    // Floating particles background
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        size: Math.random() * 4 + 2,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: Math.random() * 10 + 10,
        delay: Math.random() * 5,
    }));

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden">
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute rounded-full bg-gradient-to-r from-primary-500/20 to-accent-500/20 blur-sm"
                        style={{
                            width: particle.size,
                            height: particle.size,
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                        }}
                        animate={{
                            y: [0, -30, 0],
                            x: [0, 15, -15, 0],
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3],
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                ))}
            </div>

            {/* Gradient Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-2xl md:text-3xl text-gray-300"
                        >
                            Hi There, 👋
                        </motion.h2>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold"
                        >
                            I'm <span className="gradient-text">Shivaramakrishnan D</span>
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="text-xl md:text-2xl lg:text-3xl text-gray-300 h-12"
                        >
                            <span>I am </span>
                            <span className="gradient-text font-semibold">
                                <Typewriter
                                    words={['a Data Scientist', 'a Data Analyst', 'a Python Developer']}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="text-gray-400 text-lg max-w-xl"
                        >
                            Passionate about transforming data into actionable insights and making data-driven decisions.
                        </motion.p>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                        >
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                offset={-80}
                            >
                                <button className="btn-primary group">
                                    <span className="flex items-center gap-2">
                                        About Me
                                        <FaArrowDown className="group-hover:animate-bounce" />
                                    </span>
                                </button>
                            </Link>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 }}
                            className="flex gap-4 pt-4"
                        >
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.2 + index * 0.1 }}
                                    className={`text-3xl text-gray-400 ${social.color} transition-colors duration-300`}
                                >
                                    <social.icon />
                                </motion.a>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative flex justify-center items-center"
                    >
                        <motion.div
                            animate={{
                                rotate: 360,
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear',
                            }}
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 blur-2xl opacity-50"
                        ></motion.div>

                        animate={{ rotate: 360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 border-2 border-primary-500/30 rounded-full"
                        style={{ transform: 'scale(1.1)' }}
                            ></motion.div>
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                        className="absolute inset-0 border-2 border-accent-500/30 rounded-full"
                        style={{ transform: 'scale(1.2)' }}
                    ></motion.div>
                </motion.div>
            </motion.div>
        </div>
            </div >

    {/* Scroll Indicator */ }
    < motion.div
initial = {{ opacity: 0 }}
animate = {{ opacity: 1 }}
transition = {{ delay: 2 }}
className = "absolute bottom-10 left-1/2 transform -translate-x-1/2"
    >
    <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-gray-400 text-sm flex flex-col items-center gap-2"
    >
        <span>Scroll Down</span>
        <FaArrowDown className="text-primary-400" />
    </motion.div>
            </motion.div >
        </section >
    );
};

export default Hero;
