import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, onClearCart }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        address: '',
        city: '',
        zipCode: '',
        country: '',
        cardNumber: '',
        expiryDate: '',
        cvc: ''
    });

    const [errors, setErrors] = useState({});
    const [emailError, setEmailError] = useState('');
    const [isFormValid, setIsFormValid] = useState(false);

    useEffect(() => {
        const validateForm = () => {
            const newErrors = {};
            let isValid = true;

            // Basic required fields
            const requiredFields = ['firstName', 'lastName', 'email', 'address', 'city', 'zipCode', 'country'];
            requiredFields.forEach(field => {
                if (!formData[field].trim()) {
                    isValid = false;
                }
            });

            // Email Validation
            if (!formData.email.includes('@') || !formData.email.includes('.')) {
                isValid = false;
            }

            // Card Number Validation (16 digits, ignoring spaces)
            const cleanCardNumber = formData.cardNumber.replace(/\s/g, '');
            if (cleanCardNumber.length !== 16) {
                isValid = false;
            }

            // Expiry Date Validation (4 digits, ignoring slash)
            const cleanExpiry = formData.expiryDate.replace('/', '');
            if (cleanExpiry.length !== 4) {
                isValid = false;
            }

            // CVC Validation (3 digits)
            if (formData.cvc.length !== 3) {
                isValid = false;
            }

            setIsFormValid(isValid);
            return newErrors;
        };

        validateForm();
    }, [formData]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear email error when user starts typing again
        if (name === 'email' && emailError) {
            setEmailError('');
        }
    };

    const handleEmailBlur = () => {
        if (formData.email && (!formData.email.includes('@') || !formData.email.includes('.'))) {
            setEmailError('Veuillez entrer une adresse email valide (avec @ et .)');
        }
    };

    const handleCardNumberInput = (e) => {
        const { value } = e.target;
        // Remove non-digits
        const numericValue = value.replace(/\D/g, '');
        // Limit to 16 digits
        const truncatedValue = numericValue.slice(0, 16);
        // Add space every 4 digits
        const formattedValue = truncatedValue.replace(/(\d{4})(?=\d)/g, '$1 ');
        setFormData(prev => ({ ...prev, cardNumber: formattedValue }));
    };

    const handleExpiryInput = (e) => {
        const { value } = e.target;
        // Remove non-digits
        const numericValue = value.replace(/\D/g, '');
        // Limit to 4 digits
        const truncatedValue = numericValue.slice(0, 4);
        // Add slash after 2 digits
        let formattedValue = truncatedValue;
        if (truncatedValue.length > 2) {
            formattedValue = `${truncatedValue.slice(0, 2)}/${truncatedValue.slice(2)}`;
        }
        setFormData(prev => ({ ...prev, expiryDate: formattedValue }));
    };

    const handleNumberInput = (e, maxLength) => {
        const { name, value } = e.target;
        // Allow only numbers
        const numericValue = value.replace(/\D/g, '').slice(0, maxLength);
        setFormData(prev => ({ ...prev, [name]: numericValue }));
    };

    const generateOrderId = () => {
        const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26)); // Random letter A-Z
        const numbers = Math.floor(10000 + Math.random() * 90000); // Random 5 digits
        return `${letter}${numbers}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        setLoading(true);
        // Instant redirect for "fake" payment
        const orderId = generateOrderId();
        if (onClearCart) onClearCart();
        navigate('/confirmation', { state: { orderId } });
    };

    if (cartItems.length === 0) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Votre panier est vide</h2>
                <button className="btn-back" onClick={() => navigate('/')} style={{ marginTop: '2rem' }}>Retourner à la boutique</button>
            </div>
        );
    }

    return (
        <div className="container" style={{ padding: '4rem 0' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--color-accent)' }}>Paiement</h1>

            <div className="checkout-grid">
                <form onSubmit={handleSubmit}>
                    <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '2rem', color: 'var(--color-accent)' }}>Informations de Livraison</h3>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Prénom</label>
                            <input
                                required
                                type="text"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleInputChange}
                                style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Nom</label>
                            <input
                                required
                                type="text"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleInputChange}
                                style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Adresse Email</label>
                        <input
                            required
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={handleEmailBlur}
                            style={{ width: '100%', padding: '1rem', border: `1px solid ${emailError ? 'red' : '#ddd'}`, borderRadius: '4px' }}
                        />
                        {emailError && <p style={{ color: 'red', fontSize: '0.8rem', marginTop: '0.25rem' }}>{emailError}</p>}
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Adresse</label>
                        <input
                            required
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Ville</label>
                            <input
                                required
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleInputChange}
                                style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Code Postal</label>
                            <input
                                required
                                type="text"
                                name="zipCode"
                                value={formData.zipCode}
                                onChange={handleInputChange}
                                style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Pays</label>
                            <input
                                required
                                type="text"
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                            />
                        </div>
                    </div>

                    <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '1rem', marginBottom: '2rem', color: 'var(--color-accent)' }}>Détails du Paiement</h3>

                    <div style={{ marginBottom: '1.5rem' }}>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Numéro de Carte</label>
                        <input
                            required
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleCardNumberInput}
                            placeholder="0000 0000 0000 0000"
                            style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>Date d'expiration (MM/AA)</label>
                            <input
                                required
                                type="text"
                                name="expiryDate"
                                value={formData.expiryDate}
                                onChange={handleExpiryInput}
                                placeholder="MM/AA"
                                style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.9rem' }}>CVC</label>
                            <input
                                required
                                type="text"
                                name="cvc"
                                value={formData.cvc}
                                onChange={(e) => handleNumberInput(e, 3)}
                                placeholder="123"
                                style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', borderRadius: '4px' }}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn-accent"
                        style={{
                            width: '100%',
                            opacity: isFormValid && !loading ? 1 : 0.5,
                            cursor: isFormValid && !loading ? 'pointer' : 'not-allowed'
                        }}
                        disabled={!isFormValid || loading}
                    >
                        {loading ? 'Validation en cours...' : `Payer ${total.toLocaleString()}€`}
                    </button>
                    {!isFormValid && (
                        <p style={{ color: 'red', fontSize: '0.9rem', marginTop: '1rem', textAlign: 'center' }}>
                            Veuillez remplir tous les champs correctement pour procéder au paiement.
                        </p>
                    )}
                </form>

                <div style={{ backgroundColor: '#f9f9f9', padding: '2rem', height: 'fit-content' }}>
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-accent)' }}>Résumé de la commande</h3>
                    {cartItems.map((item, index) => (
                        <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <span>{item.name} <span style={{ fontSize: '0.8rem', color: '#666' }}>({item.quantity}x)</span></span>
                            <span>{(item.price * item.quantity).toLocaleString()}€</span>
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
