import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Package, CreditCard } from 'lucide-react';

const Confirmation = () => {
    const location = useLocation();
    const { orderId } = location.state || { orderId: 'UNKNOWN' };
    const orderDate = new Date().toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="container" style={{ padding: '6rem 0', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

            {/* Payment Confirmation Section */}
            <div style={{ marginBottom: '3rem' }}>
                <CheckCircle size={80} color="#4CAF50" style={{ marginBottom: '1rem' }} />
                <h1 style={{ color: '#4CAF50', marginBottom: '0.5rem' }}>Paiement Confirmé</h1>
                <p style={{ color: '#666', fontSize: '1.1rem' }}>Votre transaction a été effectuée avec succès.</p>
            </div>

            {/* Order Confirmation Section */}
            <div style={{
                backgroundColor: '#f9f9f9',
                padding: '2.5rem',
                borderRadius: '12px',
                marginBottom: '3rem',
                width: '100%',
                maxWidth: '600px',
                border: '1px solid #eee'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', color: 'var(--color-accent)' }}>
                    <Package size={32} style={{ marginRight: '10px' }} />
                    <h2 style={{ margin: 0 }}>Confirmation de Commande</h2>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem', textAlign: 'left' }}>
                    <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #eee' }}>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>N° de Commande</p>
                        <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--color-accent)' }}>{orderId}</p>
                    </div>
                    <div style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #eee' }}>
                        <p style={{ margin: 0, fontSize: '0.85rem', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>Date</p>
                        <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.2rem', fontWeight: '500' }}>{orderDate}</p>
                    </div>
                </div>

                <div style={{ textAlign: 'left', borderTop: '1px solid #eee', paddingTop: '1.5rem' }}>
                    <div style={{ display: 'flex', marginBottom: '1rem', alignItems: 'flex-start' }}>
                        <div style={{ minWidth: '24px', marginRight: '10px', marginTop: '3px' }}>📧</div>
                        <p style={{ margin: 0, color: '#555', lineHeight: '1.5' }}>
                            Vous recevrez très prochainement un email contenant <strong>la confirmation de votre commande</strong> ainsi que <strong>la confirmation de votre paiement</strong>.
                        </p>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <div style={{ minWidth: '24px', marginRight: '10px', marginTop: '3px' }}>🚚</div>
                        <p style={{ margin: 0, color: '#555', lineHeight: '1.5' }}>
                            Un second email vous sera envoyé dès l'expédition pour <strong>suivre l'avancée de votre colis</strong>.
                        </p>
                    </div>
                </div>
            </div>

            <Link to="/" className="btn-accent" style={{ textDecoration: 'none', padding: '1rem 2.5rem', borderRadius: '30px' }} title="Retourner à la boutique">
                Retourner à la boutique
            </Link>
        </div>
    );
};

export default Confirmation;
