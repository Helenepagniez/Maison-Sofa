import React from 'react';

const Legal = () => {
    return (
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <h1 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', letterSpacing: '2px' }}>MENTIONS LÉGALES</h1>
                <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto' }}></div>
            </div>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>1. Éditeur du site</h2>
                <p style={{ lineHeight: '1.6', color: '#666' }}>
                    Le site Maison Sofa est édité par la société MAISON SOFA SAS, au capital de 100 000 euros, immatriculée au Registre du Commerce et des Sociétés de Paris sous le numéro 123 456 789.<br />
                    Siège social : 12 Avenue des Champs-Élysées, 75008 Paris, France.<br />
                    Numéro de TVA intracommunautaire : FR 12 345 678 901.<br />
                    Directeur de la publication : Jean Dupont.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>2. Hébergement</h2>
                <p style={{ lineHeight: '1.6', color: '#666' }}>
                    Le site est hébergé par la société CloudHost, 10 rue de la Paix, 75002 Paris, France.<br />
                    Téléphone : +33 1 23 45 67 89.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>3. Propriété intellectuelle</h2>
                <p style={{ lineHeight: '1.6', color: '#666' }}>
                    L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>4. Données personnelles</h2>
                <p style={{ lineHeight: '1.6', color: '#666' }}>
                    Conformément à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, de modification, de rectification et de suppression des données qui vous concernent. Pour l'exercer, adressez-vous à contact@maisonsofa.fr.
                </p>
            </section>
        </div>
    );
};

export default Legal;
