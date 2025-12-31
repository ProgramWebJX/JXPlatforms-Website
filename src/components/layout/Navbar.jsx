import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../ui/Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/">
                        <Logo />
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <div className="relative group">
                            <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                                Products <ChevronDown className="ml-1 w-4 h-4" />
                            </button>
                            {/* Dropdown would go here */}
                        </div>
                        <Link to="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link>
                        <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">Resources</Link>

                        <Link to="/contact">
                            <button className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all transform hover:scale-105">
                                Get in Touch
                            </button>
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300 hover:text-white">
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0f172a] border-b border-white/10"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-2">
                            <Link to="/products" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Products</Link>
                            <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>About Us</Link>
                            <Link to="/resources" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Resources</Link>
                            <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>Contact Us</Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
