import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Skills', to: 'skills' },
        { name: 'Education', to: 'education' },
        { name: 'Certifications', to: 'certifications' },
        { name: 'Projects', to: 'projects' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-slate-900/95 backdrop-blur-md shadow-lg shadow-primary-500/10'
                    : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="text-3xl font-bold gradient-text cursor-pointer"
                    >
                        SRK
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navItems.map((item, index) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                spy={true}
                                smooth={true}
                                offset={-80}
                                duration={500}
                                className="relative px-4 py-2 text-gray-300 hover:text-white cursor-pointer transition-colors duration-300 group"
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 group-hover:w-full transition-all duration-300"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-white text-3xl focus:outline-none"
                    >
                        {isOpen ? <HiX /> : <HiMenu />}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-slate-900/98 backdrop-blur-md border-t border-slate-800"
                    >
                        <div className="px-4 py-6 space-y-3">
                            {navItems.map((item, index) => (
                                <motion.div
                                    key={item.to}
                                    initial={{ x: -50, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.1 }}
                                >
                                    <Link
                                        to={item.to}
                                        spy={true}
                                        smooth={true}
                                        offset={-80}
                                        duration={500}
                                        onClick={() => setIsOpen(false)}
                                        className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-slate-800/50 rounded-lg cursor-pointer transition-all duration-300"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;
