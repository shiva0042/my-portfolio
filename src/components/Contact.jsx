import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaGithub, FaWhatsapp, FaInstagram, FaHeart } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Contact = () => {
    const quickLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Education', to: 'education' },
        { name: 'Certifications', to: 'certifications' },
        { name: 'Projects', to: 'projects' },
    ];

    const contactInfo = [
        {
            icon: FaPhone,
            label: 'Phone',
            value: '+91 8610874606',
            href: 'tel:+918610874606',
        },
        {
            icon: FaEnvelope,
            label: 'Email',
            value: 'shiva20048@gmail.com',
            href: 'mailto:shiva20048@gmail.com',
        },
        {
            icon: FaMapMarkerAlt,
            label: 'Location',
            value: 'Trichy, Tamilnadu, India - 620018',
            href: null,
        },
    ];

    const socialLinks = [
        { icon: FaPhone, href: 'tel:+918610874606', label: 'Phone', color: 'hover:text-green-400' },
        { icon: FaLinkedin, href: 'https://www.linkedin.com/in/-shiva-rama/', label: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: FaGithub, href: 'https://github.com/shiva0042', label: 'GitHub', color: 'hover:text-purple-400' },
        { icon: FaEnvelope, href: 'mailto:shiva20048@gmail.com', label: 'Email', color: 'hover:text-red-400' },
        { icon: FaWhatsapp, href: 'https://wa.me/918610874606', label: 'WhatsApp', color: 'hover:text-green-400' },
        { icon: FaInstagram, href: 'https://www.instagram.com/__.s_r_k.__/', label: 'Instagram', color: 'hover:text-pink-400' },
    ];

    return (
        <footer id="contact" className="relative bg-slate-900 border-t border-slate-800">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* About Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="space-y-4"
                    >
                        <h3 className="text-2xl font-bold gradient-text">SRK's Portfolio</h3>
                        <p className="text-gray-400 leading-relaxed">
                            Thank you for visiting my personal portfolio website. Connect with me over socials.
                            <br /><br />
                            Keep Rising. Exploring. Learning. Building.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider">Quick Links</h3>
                        <div className="space-y-2">
                            {quickLinks.map((link) => (
                                <Link
                                    key={link.to}
                                    to={link.to}
                                    spy={true}
                                    smooth={true}
                                    offset={-80}
                                    duration={500}
                                    className="flex items-center gap-2 text-gray-400 hover:text-primary-400 cursor-pointer transition-colors duration-300 group"
                                >
                                    <span className="text-primary-400 group-hover:translate-x-1 transition-transform duration-300">›</span>
                                    <span>{link.name}</span>
                                </Link>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold text-white uppercase tracking-wider">Contact Info</h3>
                        <div className="space-y-3">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-start gap-3 text-gray-400">
                                    <info.icon className="text-primary-400 text-xl mt-1 flex-shrink-0" />
                                    {info.href ? (
                                        <a
                                            href={info.href}
                                            className="hover:text-primary-400 transition-colors duration-300"
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <span>{info.value}</span>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-4 pt-4">
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`text-2xl text-gray-400 ${social.color} transition-colors duration-300`}
                                >
                                    <social.icon />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
                        <span>Designed with</span>
                        <motion.span
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        >
                            <FaHeart className="text-red-500 inline" />
                        </motion.span>
                        <span>by</span>
                        <a
                            href="https://www.linkedin.com/in/-shiva-rama/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gradient-text font-semibold hover:underline"
                        >
                            Shiva
                        </a>
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </motion.div>
            </div>

            {/* Scroll to Top Button */}
            <Link
                to="home"
                spy={true}
                smooth={true}
                duration={500}
            >
                <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full shadow-lg hover:shadow-primary-500/50 transition-shadow duration-300 z-40"
                    aria-label="Scroll to top"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                        />
                    </svg>
                </motion.button>
            </Link>
        </footer>
    );
};

export default Contact;
