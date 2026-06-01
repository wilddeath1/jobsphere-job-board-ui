import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className="navbar">

                <div className="logo">
                    <h2>
                        <a href="/">JobSphere</a>
                    </h2>
                </div>

                {/* Desktop Navigation */}
                <ul className="nav-links">
                    <li>
                        <a href="/">Home</a>
                    </li>

                    <li>
                        <a
                            href="https://www.indeed.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Jobs
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.glassdoor.com/Reviews/index.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Companies
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://remoteok.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Remote
                        </a>
                    </li>
                </ul>

                {/* Desktop Auth */}
                <div className="auth">
                    <button>Login</button>
                    <button>Sign Up</button>
                </div>

                {/* Mobile Menu Button */}
                <div
                    className="menu-icon"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="mobile-menu">
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>

                            <li>
                                <a
                                    href="https://www.indeed.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Jobs
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://www.glassdoor.com/Reviews/index.htm"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Companies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="https://remoteok.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Remote
                                </a>
                            </li>
                        </ul>

                        <div className="mobile-auth">
                            <button className="login-btn">Login</button>
                            <button className="signup-btn">Sign Up</button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    );
};

export default Navbar;