import React, { useState } from 'react';
import { ShoppingBag, Info, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount, onOpenCart }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav style={{
                padding: '2rem 0',
                position: 'sticky',
                top: 0,
                backgroundColor: 'rgba(249, 249, 249, 0.9)',
                backdropFilter: 'blur(10px)',
                zIndex: 100,
                borderBottom: '1px solid rgba(0,0,0,0.05)'
            }}>
                <div className="container flex justify-between items-center">
                    {/* Mobile: Hamburger + Logo + Cart */}
                    <div style={{ display: 'none' }} className="mobile-nav">
                        <Menu
                            size={28}
                            color="var(--color-accent)"
                            style={{ cursor: 'pointer' }}
                            onClick={() => setIsMobileMenuOpen(true)}
                        />
                    </div>

                    <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <span className="navbar-brand" style={{ fontSize: '1.5rem', margin: 0, letterSpacing: '2px', fontWeight: 'bold', display: 'block', fontFamily: 'var(--font-heading)' }}>MAISON SOFA</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }} className="desktop-nav">
                        <Link to="/about" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', minWidth: '80px' }}>
                            <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Info size={24} color="var(--color-accent)" />
                            </div>
                            <span style={{ color: 'var(--color-accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', whiteSpace: 'nowrap' }}>À Propos</span>
                        </Link>
                        <Link to="/contact" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', minWidth: '80px' }}>
                            <div style={{ width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                            </div>
                            <span style={{ color: 'var(--color-accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', whiteSpace: 'nowrap' }}>Contact</span>
                        </Link>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', minWidth: '80px' }} onClick={onOpenCart}>
                            <div style={{ position: 'relative', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <ShoppingBag size={24} color="var(--color-accent)" />
                                {cartCount > 0 && (
                                    <span style={{
                                        position: 'absolute',
                                        top: '-8px',
                                        right: '-8px',
                                        backgroundColor: 'var(--color-accent)',
                                        color: 'white',
                                        fontSize: '0.6rem',
                                        width: '16px',
                                        height: '16px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}>
                                        {cartCount}
                                    </span>
                                )}
                            </div>
                            <span style={{ color: 'var(--color-accent)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', whiteSpace: 'nowrap' }}>Mon Panier</span>
                        </div>
                    </div>

                    {/* Mobile: Cart Icon */}
                    <div style={{ display: 'none', position: 'relative', cursor: 'pointer' }} className="mobile-cart" onClick={onOpenCart}>
                        <ShoppingBag size={24} color="var(--color-accent)" />
                        {cartCount > 0 && (
                            <span style={{
                                position: 'absolute',
                                top: '-8px',
                                right: '-8px',
                                backgroundColor: 'var(--color-accent)',
                                color: 'white',
                                fontSize: '0.6rem',
                                width: '16px',
                                height: '16px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {cartCount}
                            </span>
                        )}
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    zIndex: 1000,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '2rem'
                }}>
                    <X
                        size={32}
                        color="white"
                        style={{ position: 'absolute', top: '2rem', right: '2rem', cursor: 'pointer' }}
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
                        <Link
                            to="/"
                            style={{ color: 'white', fontSize: '1.5rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '2px' }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Accueil
                        </Link>
                        <Link
                            to="/about"
                            style={{ color: 'white', fontSize: '1.5rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '2px' }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            À Propos
                        </Link>
                        <Link
                            to="/contact"
                            style={{ color: 'white', fontSize: '1.5rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '2px' }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <div
                            style={{ color: 'white', fontSize: '1.5rem', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '2px', cursor: 'pointer' }}
                            onClick={() => {
                                setIsMobileMenuOpen(false);
                                onOpenCart();
                            }}
                        >
                            Mon Panier {cartCount > 0 && `(${cartCount})`}
                        </div>
                    </div>
                </div>
            )}

            <style>{`
                @media (max-width: 768px) {
                    .desktop-nav {
                        display: none !important;
                    }
                    .mobile-nav, .mobile-cart {
                        display: flex !important;
                        align-items: center;
                    }
                    .container h1 {
                        font-size: 1.2rem !important;
                    }
                    .container.flex {
                        display: flex !important;
                        flex-direction: row !important;
                        justify-content: space-between !important;
                        align-items: center !important;
                    }
                }
            `}</style>
        </>
    );
};

export default Navbar;
