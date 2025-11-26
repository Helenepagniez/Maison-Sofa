import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '4rem 0 2rem 0', marginTop: 'auto' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                {/* Brand */}
                <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', marginBottom: '1.5rem', letterSpacing: '2px', color: 'white' }}>MAISON SOFA</h3>
                    <p style={{ color: '#999', fontSize: '0.9rem', lineHeight: '1.8', maxWidth: '300px' }}>
                        L'excellence du mobilier haut de gamme. Chaque pièce est une invitation au confort et à l'élégance, conçue pour sublimer votre intérieur avec une touche de raffinement intemporel.
                    </p>
                </div>

                {/* Links */}
                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>Navigation</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '0.8rem' }}><Link to="/" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = '#ccc'} title="Retour à l'accueil">Accueil</Link></li>
                        <li style={{ marginBottom: '0.8rem' }}><Link to="/about" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = '#ccc'} title="En savoir plus sur Maison Sofa">À Propos</Link></li>
                        <li style={{ marginBottom: '0.8rem' }}><Link to="/contact" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = '#ccc'} title="Nous contacter">Contact</Link></li>
                        <li style={{ marginBottom: '0.8rem' }}><Link to="/cart" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = '#ccc'} title="Voir mon panier">Mon Panier</Link></li>
                        <li style={{ marginBottom: '0.8rem' }}><Link to="/legal" style={{ color: '#ccc', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color = 'var(--color-accent)'} onMouseOut={e => e.target.style.color = '#ccc'} title="Consulter les mentions légales">Mentions Légales</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '1.5rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '1px' }}>Nous Contacter</h4>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'flex-start', gap: '1rem', color: '#ccc' }}>
                            <MapPin size={18} style={{ marginTop: '3px', color: 'var(--color-accent)' }} />
                            <span>12 Avenue des Champs-Élysées,<br />75008 Paris, France</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', color: '#ccc' }}>
                            <Phone size={18} style={{ color: 'var(--color-accent)' }} />
                            <span>+33 1 45 67 89 10</span>
                        </li>
                        <li style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem', color: '#ccc' }}>
                            <Mail size={18} style={{ color: 'var(--color-accent)' }} />
                            <a
                                href="mailto:contact@maisonsofa.fr"
                                title="Cliquez pour nous envoyer un email"
                                style={{ color: '#ccc', textDecoration: 'none', transition: 'all 0.3s' }}
                                onMouseOver={e => { e.target.style.color = 'var(--color-accent)'; e.target.style.textDecoration = 'underline'; e.target.style.textDecorationColor = 'var(--color-accent)'; }}
                                onMouseOut={e => { e.target.style.color = '#ccc'; e.target.style.textDecoration = 'none'; }}
                            >
                                contact@maisonsofa.fr
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{ borderTop: '1px solid #333', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <p style={{ color: '#ffffffff', fontSize: '0.8rem' }}>&copy; 2025 Maison Sofa. Tous droits réservés.</p>
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <a href="#" style={{ color: '#ffffffff', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#666'} title="Suivez-nous sur Facebook">
                        <Facebook size={20} />
                    </a>
                    <a href="#" style={{ color: '#ffffffff', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#666'} title="Suivez-nous sur Instagram">
                        <Instagram size={20} />
                    </a>
                    <a href="#" style={{ color: '#ffffffff', transition: 'color 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.color = 'var(--color-accent)'} onMouseLeave={(e) => e.currentTarget.style.color = '#666'} title="Suivez-nous sur Twitter">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
