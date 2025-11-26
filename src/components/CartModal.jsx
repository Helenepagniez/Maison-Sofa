import React from 'react';
import { X, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartModal = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity, onUpdateColor, products }) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleViewCart = () => {
        onClose();
        navigate('/cart');
    };

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1000,
            display: 'flex',
            justifyContent: 'flex-end',
            backgroundColor: 'rgba(0,0,0,0.5)',
            backdropFilter: 'blur(2px)'
        }}>
            <div
                className="animate-slide-in"
                style={{
                    width: '100%',
                    maxWidth: '500px',
                    height: '100%',
                    backgroundColor: 'white',
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '-10px 0 30px rgba(0,0,0,0.1)'
                }}
            >
                <div className="flex justify-between items-center" style={{ marginBottom: '2rem' }}>
                    <h2 style={{ margin: 0, fontSize: '1.5rem' }}>Votre Panier ({cartItems.length})</h2>
                    <button onClick={onClose} className="cart-modal-close"><X size={24} /></button>
                </div>

                <div style={{ flex: 1, overflowY: 'auto' }}>
                    {cartItems.length === 0 ? (
                        <p style={{ textAlign: 'center', color: '#888', marginTop: '4rem' }}>Votre panier est vide.</p>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {cartItems.map((item, index) => (
                                <div key={`${item.id}-${item.selectedColor?.id}-${index}`} style={{ display: 'flex', gap: '1rem', borderBottom: '1px solid #eee', paddingBottom: '1.5rem' }}>
                                    <div style={{ width: '100px', height: '100px', backgroundColor: '#f9f9f9', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <img src={item.image} alt={item.name} title={item.name} style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }} />
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <h3 style={{ fontSize: '1rem', margin: '0 0 0.5rem 0' }}>{item.name}</h3>

                                        <div style={{ marginBottom: '0.5rem' }}>
                                            <select
                                                value={item.selectedColor?.id}
                                                onChange={(e) => {
                                                    const newColorId = e.target.value;
                                                    if (newColorId !== item.selectedColor?.id) {
                                                        onUpdateColor(item.id, item.selectedColor?.id, newColorId);
                                                    }
                                                }}
                                                style={{
                                                    padding: '0.1rem 0.5rem',
                                                    borderRadius: '4px',
                                                    border: '1px solid #ddd',
                                                    fontSize: '0.8rem',
                                                    color: '#555',
                                                    cursor: 'pointer',
                                                    maxWidth: '100%'
                                                }}
                                            >
                                                {products.find(p => p.id === item.id.split('-col-')[0])?.colors.map(color => (
                                                    <option key={color.id} value={color.id}>
                                                        {color.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '4px' }}>
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, item.selectedColor?.id, item.quantity - 1)}
                                                    style={{ padding: '0.1rem 0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#666' }}
                                                    disabled={item.quantity <= 1}
                                                >-</button>
                                                <span style={{ padding: '0.1rem 0.5rem', borderLeft: '1px solid #ddd', borderRight: '1px solid #ddd', fontSize: '0.9rem' }}>{item.quantity}</span>
                                                <button
                                                    onClick={() => onUpdateQuantity(item.id, item.selectedColor?.id, item.quantity + 1)}
                                                    style={{ padding: '0.1rem 0.5rem', background: 'none', border: 'none', cursor: 'pointer', color: '#666' }}
                                                >+</button>
                                            </div>
                                            <p style={{ fontSize: '1rem', fontWeight: 'bold' }}>{(item.price * item.quantity).toLocaleString()}€</p>
                                        </div>
                                    </div>
                                    <button onClick={() => onRemove(item.id, item.selectedColor?.id)} style={{ color: '#999', height: 'fit-content' }}>
                                        <Trash2 size={18} />
                                    </button>
                                </div>
                            ))}
                        </div >
                    )}
                </div >

                <div style={{ borderTop: '1px solid #eee', paddingTop: '2rem', marginTop: 'auto' }}>
                    <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
                        <span style={{ fontSize: '1.2rem' }}>Total</span>
                        <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>{total.toLocaleString()}€</span>
                    </div>
                    <button
                        className="btn-accent"
                        style={{ width: '100%' }}
                        disabled={cartItems.length === 0}
                        onClick={handleViewCart}
                    >
                        Voir mon panier
                    </button>
                </div>
            </div >

            <style>{`
                @media (max-width: 768px) {
                    .cart-modal-close {
                        position: static !important;
                    }
                }
            `}</style>
        </div >
    );
};

export default CartModal;
