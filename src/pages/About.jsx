import React from 'react';
import { Leaf, Lightbulb, Heart, Award } from 'lucide-react';

const About = () => {
    return (
        <div className="container" style={{ padding: '4rem 2rem', maxWidth: '900px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', letterSpacing: '2px', color: 'var(--color-accent)' }}>NOTRE HISTOIRE</h1>
                <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }} className="about-grid">
                <div>
                    <img
                        src="/chesterfield.png"
                        alt="Atelier Maison Sofa"
                        style={{ width: '100%', borderRadius: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', filter: 'sepia(0.3)' }}
                    />
                </div>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', fontFamily: 'var(--font-heading)' }}>L'Excellence Artisanale</h2>
                    <p style={{ lineHeight: '1.8', color: '#666', marginBottom: '1.5rem', textAlign: 'justify' }}>
                        Fondée en 2025, Maison Sofa est née d'une ambition simple : redéfinir le luxe accessible dans l'univers du mobilier. Nous croyons que chaque canapé doit être une œuvre d'art, un point de rencontre entre le design contemporain et le confort absolu.
                    </p>
                    <p style={{ lineHeight: '1.8', color: '#666', textAlign: 'justify' }}>
                        Nos artisans, héritiers d'un savoir-faire traditionnel, façonnent chaque pièce à la main dans nos ateliers. Du choix des bois massifs pour les structures à la sélection rigoureuse des tissus les plus nobles, aucune étape n'est laissée au hasard.
                    </p>
                </div>
            </div>

            <div style={{ backgroundColor: '#f9f9f9', borderRadius: '8px', textAlign: 'center', marginBottom: '6rem' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>Nos Valeurs</h2>
                <div style={{ display: 'grid', gap: '3rem' }} className="values-grid">
                    <div>
                        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                            <Leaf size={40} color="var(--color-accent)" />
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-accent)', fontWeight: 'bold' }}>Durabilité</h3>
                        <p style={{ color: '#666', lineHeight: '1.6', textAlign: 'justify' }}>Nous créons des meubles conçus pour durer, en privilégiant des matériaux éco-responsables et des processus de fabrication respectueux de l'environnement.</p>
                    </div>
                    <div>
                        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                            <Lightbulb size={40} color="var(--color-accent)" />
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-accent)', fontWeight: 'bold' }}>Innovation</h3>
                        <p style={{ color: '#666', lineHeight: '1.6', textAlign: 'justify' }}>Nous ne cessons de repousser les limites du design pour vous offrir des fonctionnalités modernes sans jamais sacrifier l'élégance.</p>
                    </div>
                    <div>
                        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                            <Heart size={40} color="var(--color-accent)" />
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-accent)', fontWeight: 'bold' }}>Passion</h3>
                        <p style={{ color: '#666', lineHeight: '1.6', textAlign: 'justify' }}>L'amour du beau et du bien-fait est au cœur de notre ADN. C'est cette passion qui anime nos équipes chaque jour.</p>
                    </div>
                    <div>
                        <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                            <Award size={40} color="var(--color-accent)" />
                        </div>
                        <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-accent)', fontWeight: 'bold' }}>Excellence</h3>
                        <p style={{ color: '#666', lineHeight: '1.6', textAlign: 'justify' }}>Chaque détail compte. De la sélection des matières premières à la livraison finale, nous visons la perfection à chaque étape.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
