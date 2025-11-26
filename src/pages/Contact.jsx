import React, { useState, useEffect } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [isValid, setIsValid] = useState(false);

    const validateEmail = (email) => {
        return email.includes('@') && email.includes('.');
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Le nom est requis';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'L\'email est requis';
        } else if (!validateEmail(formData.email)) {
            newErrors.email = 'L\'email doit contenir @ et .';
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'Le sujet est requis';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Le message est requis';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        setIsValid(validateForm());
    }, [formData]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', subject: '', message: '' });
            }, 3000);
        }
    };

    return (
        <div className="container" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                <h1 style={{ marginBottom: '1.5rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent)', letterSpacing: '2px' }}>NOUS CONTACTER</h1>
                <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto 2rem auto' }}></div>
                <p style={{ fontSize: '1.1rem', color: '#666', lineHeight: '1.8' }}>
                    Une question ? Un projet ? Notre équipe est à votre écoute pour vous accompagner dans votre recherche du canapé parfait.
                </p>
            </div>

            {submitted ? (
                <div style={{
                    backgroundColor: 'var(--color-accent)',
                    color: 'white',
                    padding: '2rem',
                    borderRadius: '8px',
                    textAlign: 'center',
                    animation: 'fadeIn 0.5s ease-out'
                }}>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Message envoyé !</h2>
                    <p>Merci pour votre message. Notre équipe vous répondra dans les plus brefs délais.</p>
                </div>
            ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="contact-form-grid">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#333', textTransform: 'uppercase', letterSpacing: '1px' }}>Nom *</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                style={{
                                    padding: '1rem',
                                    border: `1px solid ${errors.name ? '#e74c3c' : '#ddd'}`,
                                    borderRadius: '4px',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = errors.name ? '#e74c3c' : 'var(--color-accent)'}
                                onBlur={(e) => e.target.style.borderColor = errors.name ? '#e74c3c' : '#ddd'}
                            />
                            {errors.name && <span style={{ fontSize: '0.8rem', color: '#e74c3c' }}>{errors.name}</span>}
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#333', textTransform: 'uppercase', letterSpacing: '1px' }}>Email *</label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                style={{
                                    padding: '1rem',
                                    border: `1px solid ${errors.email ? '#e74c3c' : '#ddd'}`,
                                    borderRadius: '4px',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    transition: 'border-color 0.3s'
                                }}
                                onFocus={(e) => e.target.style.borderColor = errors.email ? '#e74c3c' : 'var(--color-accent)'}
                                onBlur={(e) => e.target.style.borderColor = errors.email ? '#e74c3c' : '#ddd'}
                            />
                            {errors.email && <span style={{ fontSize: '0.8rem', color: '#e74c3c' }}>{errors.email}</span>}
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="subject" style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#333', textTransform: 'uppercase', letterSpacing: '1px' }}>Sujet *</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            style={{
                                padding: '1rem',
                                border: `1px solid ${errors.subject ? '#e74c3c' : '#ddd'}`,
                                borderRadius: '4px',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.3s'
                            }}
                            onFocus={(e) => e.target.style.borderColor = errors.subject ? '#e74c3c' : 'var(--color-accent)'}
                            onBlur={(e) => e.target.style.borderColor = errors.subject ? '#e74c3c' : '#ddd'}
                        />
                        {errors.subject && <span style={{ fontSize: '0.8rem', color: '#e74c3c' }}>{errors.subject}</span>}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 'bold', color: '#333', textTransform: 'uppercase', letterSpacing: '1px' }}>Message *</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={6}
                            style={{
                                padding: '1rem',
                                border: `1px solid ${errors.message ? '#e74c3c' : '#ddd'}`,
                                borderRadius: '4px',
                                fontSize: '1rem',
                                outline: 'none',
                                transition: 'border-color 0.3s',
                                fontFamily: 'var(--font-body)',
                                resize: 'vertical'
                            }}
                            onFocus={(e) => e.target.style.borderColor = errors.message ? '#e74c3c' : 'var(--color-accent)'}
                            onBlur={(e) => e.target.style.borderColor = errors.message ? '#e74c3c' : '#ddd'}
                        />
                        {errors.message && <span style={{ fontSize: '0.8rem', color: '#e74c3c' }}>{errors.message}</span>}
                    </div>

                    <button
                        type="submit"
                        disabled={!isValid}
                        style={{
                            marginTop: '1rem',
                            alignSelf: 'center',
                            padding: '1rem 3rem',
                            backgroundColor: isValid ? 'transparent' : '#ccc',
                            color: isValid ? 'var(--color-accent)' : '#999',
                            border: `2px solid ${isValid ? 'var(--color-accent)' : '#ccc'}`,
                            borderRadius: '50px',
                            fontSize: '1rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            cursor: isValid ? 'pointer' : 'not-allowed',
                            transition: 'all 0.3s ease',
                            opacity: isValid ? 1 : 0.6
                        }}
                        onMouseEnter={(e) => {
                            if (isValid) {
                                e.target.style.backgroundColor = 'var(--color-accent)';
                                e.target.style.color = 'white';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (isValid) {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.color = 'var(--color-accent)';
                            }
                        }}
                    >
                        Envoyer le message
                    </button>
                </form>
            )}
        </div>
    );
};

export default Contact;

