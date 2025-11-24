import React from 'react';
import { Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, onRemove, onUpdateQuantity }) => {
    const navigate = useNavigate();
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    if (cartItems.length === 0) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center', minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h2 style={{ marginBottom: '2rem' }}>Votre panier est vide</h2>
                <button className="btn-back" onClick={() => navigate('/')}>Retourner à la boutique</button>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 0', minHeight: '80vh' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--color-accent)' }}>Mon Panier</h1>

            <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
                {/* Cart Items List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                    {/* Header Row */}
                    <div style={{ display: 'grid', gridTemplateColumns: '80px 2fr 1fr 1fr auto', gap: '2rem', paddingBottom: '1rem', borderBottom: '1px solid #eee', color: '#999', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        <span>Produit</span>
                        <span>Description</span>
                        <span>Quantité</span>
                        <span style={{ textAlign: 'right' }}>Prix</span>
                        <span></span>
                    </div>

                    {cartItems.map((item, index) => (
                        <div key={`${item.id}-${item.selectedColor?.id}-${index}`} style={{ display: 'grid', gridTemplateColumns: '80px 2fr 1fr 1fr auto', gap: '2rem', padding: '1.5rem 0', borderBottom: '1px solid #eee', alignItems: 'center' }}>
                            {/* Image */}
                            <div style={{ width: '80px', height: '80px', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}>
                                <img src={item.image} alt={item.name} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
                            </div>

                            {/* Description */}
                            <div>
                                <h3 style={{ fontSize: '1.1rem', margin: '0 0 0.25rem 0' }}>{item.name}</h3>
                                <p style={{ fontSize: '0.9rem', color: '#666', margin: 0 }}>Coloris : {item.selectedColor?.name || 'Standard'}</p>
                            </div>

                            {/* Quantity */}
                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '4px', width: 'fit-content' }}>
                                <button
                                    onClick={() => onUpdateQuantity(item.id, item.selectedColor?.id, item.quantity - 1)}
                                    style={{ padding: '0.2rem 0.6rem', background: 'none', border: 'none', cursor: 'pointer', color: '#666' }}
                                    disabled={item.quantity <= 1}
                                >-</button>
                                <span style={{ padding: '0.2rem 0.6rem', borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd', fontSize: '0.9rem' }}>{item.quantity}</span>
                                <button
                                    onClick={() => onUpdateQuantity(item.id, item.selectedColor?.id, item.quantity + 1)}
                                    style={{ padding: '0.2rem 0.6rem', background: 'none', border: 'none', cursor: 'pointer', color: '#666' }}
                                >+</button>
                            </div>

                            {/* Price */}
                            <div style={{ textAlign: 'right', fontWeight: 'bold', fontSize: '1.1rem' }}>
                                {(item.price * item.quantity).toLocaleString()}€
                            </div>

                            {/* Remove */}
                            <button
                                onClick={() => onRemove(item.id, item.selectedColor?.id)}
                                style={{ color: '#ccc', cursor: 'pointer', background: 'none', border: 'none', padding: '0.5rem', transition: 'color 0.2s' }}
                                className="hover:text-red-500"
                                onMouseEnter={(e) => e.currentTarget.style.color = '#ff4444'}
                                onMouseLeave={(e) => e.currentTarget.style.color = '#ccc'}
                            >
                                <Trash2 size={18} />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Summary Section */}
                <div style={{ marginTop: '3rem', display: 'flex', justifyContent: 'center' }}>
                    <div style={{ width: '100%', maxWidth: '400px', backgroundColor: '#f9f9f9', padding: '2rem', borderRadius: '8px' }}>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-accent)', fontSize: '1.2rem' }}>Résumé de la commande</h3>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', color: '#666' }}>
                            <span>Sous-total</span>
                            <span>{total.toLocaleString()}€</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem', color: '#666' }}>
                            <span>Livraison</span>
                            <span>Gratuite</span>
                        </div>

                        <div style={{ borderTop: '1px solid #ddd', paddingTop: '1.5rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                            <span style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Total</span>
                            <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>{total.toLocaleString()}€</span>
                        </div>

                        <button
                            className="btn-accent"
                            style={{ width: '100%' }}
                            onClick={() => navigate('/checkout')}
                        >
                            Passer la commande
                        </button>

                        <button
                            onClick={() => navigate('/')}
                            style={{ width: '100%', marginTop: '1rem', background: 'none', border: 'none', textDecoration: 'underline', color: '#666', cursor: 'pointer', fontSize: '0.9rem' }}
                        >
                            Continuer mes achats
                        </button>
                    </div>
                </div>
            </div>

            <style>{`
                @media (max-width: 768px) {
                    div[style*="grid-template-columns: 80px 2fr 1fr 1fr auto"] {
                        grid-template-columns: 80px 1fr auto !important;
                        gap: 1rem !important;
                        grid-template-areas: 
                            "img desc remove"
                            "img qty price";
                    }
                    
                    /* Hide header on mobile */
                    div[style*="padding-bottom: 1rem"] {
                        display: none !important;
                    }

                    /* Adjust items for mobile grid areas */
                    div[style*="grid-template-columns: 80px 2fr 1fr 1fr auto"] > div:nth-child(1) { grid-area: img; }
                    div[style*="grid-template-columns: 80px 2fr 1fr 1fr auto"] > div:nth-child(2) { grid-area: desc; }
                    div[style*="grid-template-columns: 80px 2fr 1fr 1fr auto"] > div:nth-child(3) { grid-area: qty; }
                    div[style*="grid-template-columns: 80px 2fr 1fr 1fr auto"] > div:nth-child(4) { grid-area: price; text-align: right; }
                    div[style*="grid-template-columns: 80px 2fr 1fr 1fr auto"] > button { grid-area: remove; justify-self: end; }
                }
            `}</style>
        </div>
    );
};

export default Cart;
