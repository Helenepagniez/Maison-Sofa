import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, clearCart }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const total = cartItems.reduce((sum, item) => sum + item.price, 0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            clearCart();
            setLoading(false);
            navigate('/confirmation');
        }, 2000);
    };

    if (cartItems.length === 0) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Votre panier est vide</h2>
                <button className="btn-secondary" onClick={() => navigate('/')} style={{ marginTop: '2rem' }}>Retourner à la boutique</button>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '4rem' }}>Paiement</h1>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem' }}>
                <form onSubmit={handleSubmit}>
                    <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '2rem' }}>Informations de Livraison</h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Prénom</label>
                            <input required type="text" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Nom</label>
                            <input required type="text" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Adresse Email</label>
                        <input required type="email" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Adresse</label>
                        <input required type="text" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Ville</label>
                            <input required type="text" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Code Postal</label>
                            <input required type="text" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Pays</label>
                            <input required type="text" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                    </div>

                    <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '2rem' }}>Détails du Paiement</h3>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Numéro de Carte</label>
                        <input required type="text" placeholder="0000 0000 0000 0000" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Date d'expiration</label>
                            <input required type="text" placeholder="MM/AA" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>CVC</label>
                            <input required type="text" placeholder="123" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }} />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn-primary"
                        style={{ width: '100%', opacity: loading ? 0.7 : 1 }}
                        disabled={loading}
                    >
                        {loading ? 'Traitement...' : `Payer ${total.toLocaleString()}€`}
                    </button>
                </form>

                <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', height: 'fit-content' }}>
                    <h3 style={{ marginBottom: '1.5rem' }}>Résumé de la commande</h3>
                    {cartItems.map((item, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <span>{item.name}</span>
                            <span>{item.price.toLocaleString()}€</span>
                        </div>
                    ))}
                    <div style={{ borderTop: '1px solid #ddd', marginTop: '1rem', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                        <span>Total</span>
                        <span>{total.toLocaleString()}€</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
