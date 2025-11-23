import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';

const Confirmation = () => {
    return (
        <div className="container" style={{ padding: '8rem 0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <CheckCircle size={64} color="var(--color-accent)" style={{ marginBottom: '2rem' }} />
            <h1 style={{ marginBottom: '1rem' }}>Commande Confirmée</h1>
            <p style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', marginBottom: '4rem' }}>
                Merci pour votre achat. Votre commande a été reçue et est en cours de traitement. Vous recevrez bientôt un email de confirmation.
            </p>
            <Link to="/" className="btn-primary" style={{ textDecoration: 'none' }}>
                Continuer vos achats
            </Link>
        </div>
    );
};

export default Confirmation;
