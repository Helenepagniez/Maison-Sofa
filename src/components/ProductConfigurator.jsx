import React, { useState, useEffect } from 'react';
import { Check, Ruler, Layers, Feather, Hammer } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';

const ProductConfigurator = ({ onAddToCart }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find(p => p.id === id);

    // Default to first product if ID not found or not provided (though routing should handle this)
    const activeProduct = product || products[0];

    const [selectedColor, setSelectedColor] = useState(activeProduct.colors[0]);
    const [isAnimating, setIsAnimating] = useState(false);

    // Reset selected color when product changes
    useEffect(() => {
        if (activeProduct) {
            setSelectedColor(activeProduct.colors[0]);
        }
    }, [activeProduct]);

    if (!activeProduct) return <div>Produit introuvable</div>;

    const handleColorChange = (color) => {
        if (color.id === selectedColor.id) return;
        setIsAnimating(true);
        setTimeout(() => {
            setSelectedColor(color);
            setIsAnimating(false);
        }, 300);
    };

    return (
        <div className="container product-page-container">
            <div className="product-configurator-grid">

                {/* Image Section */}
                <div className="product-image-section">
                    <img
                        src={selectedColor.image}
                        alt={selectedColor.name}
                        style={{
                            maxWidth: '90%',
                            maxHeight: '90%',
                            objectFit: 'contain',
                            transition: 'opacity 0.3s ease',
                            opacity: isAnimating ? 0 : 1,
                            filter: isAnimating ? 'blur(10px) opacity(0)' : `drop-shadow(0 20px 30px rgba(0,0,0,0.15)) ${selectedColor.filter || 'none'}`
                        }}
                    />
                </div>

                {/* Details Section */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 style={{ fontSize: '1rem', color: 'var(--color-accent)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>Collection {activeProduct.category}</h2>
                    <h1 style={{ marginBottom: '1rem' }}>{activeProduct.name}</h1>
                    <p style={{ fontSize: '15px', color: '#666', marginBottom: '2rem', maxWidth: '500px' }}>
                        {activeProduct.description}
                    </p>

                    <div style={{ marginBottom: '2rem' }}>
                        <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Choisir le coloris</p>
                        <div className="color-options-container">
                            {activeProduct.colors.map((color) => (
                                <button
                                    key={color.id}
                                    onClick={() => handleColorChange(color)}
                                    style={{
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        backgroundColor: color.hex,
                                        border: selectedColor.id === color.id ? '2px solid var(--color-primary)' : '1px solid #ddd',
                                        padding: '2px',
                                        position: 'relative',
                                        cursor: 'pointer',
                                        boxShadow: selectedColor.id === color.id ? '0 0 0 2px white, 0 0 0 4px var(--color-primary)' : 'none',
                                        transition: 'all 0.2s ease'
                                    }}
                                    aria-label={color.name}
                                />
                            ))}
                        </div>
                        <p style={{ marginTop: '1rem', fontStyle: 'italic', color: '#555' }}>{selectedColor.name}</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '2rem' }}>
                        <span style={{ fontSize: '2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-accent)' }}>
                            {selectedColor.price.toLocaleString()}€
                        </span>
                    </div>

                    <button
                        className="btn-accent"
                        onClick={() => onAddToCart({ ...activeProduct, selectedColor, id: `${activeProduct.id}-${selectedColor.id}` })}
                        style={{ width: '100%' }}
                    >
                        Ajouter au Panier
                    </button>

                    <div style={{ marginTop: '2rem', borderTop: '1px solid #eee', paddingTop: '2rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {activeProduct.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-4">
                                <Check size={16} color="var(--color-accent)" />
                                <span style={{ fontSize: '0.9rem' }}>{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Extended Details Section */}
            <div className="product-details-extended">
                <div className="details-column description-column">
                    <h3 className="details-title">L'Esprit du Modèle</h3>
                    {activeProduct.longDescription && activeProduct.longDescription.map((paragraph, index) => (
                        <p key={index} className="details-text" style={{ fontSize: '15px', lineHeight: '1.6', marginBottom: '1rem' }}>
                            {paragraph}
                        </p>
                    ))}
                </div>

                <div className="details-column specs-column">
                    <h3 className="details-title">Caractéristiques Techniques</h3>

                    <div className="specs-grid">
                        <div className="spec-item">
                            <Ruler className="spec-icon" size={24} />
                            <div>
                                <h4>Dimensions</h4>
                                <p>L {activeProduct.dimensions?.width} x H {activeProduct.dimensions?.height} x P {activeProduct.dimensions?.depth} cm</p>
                                <p className="sub-spec">Hauteur d'assise : {activeProduct.dimensions?.seatHeight} cm</p>
                            </div>
                        </div>

                        <div className="spec-item">
                            <Hammer className="spec-icon" size={24} />
                            <div>
                                <h4>Structure</h4>
                                <p>{activeProduct.materialDetails?.structure}</p>
                            </div>
                        </div>

                        <div className="spec-item">
                            <Layers className="spec-icon" size={24} />
                            <div>
                                <h4>Suspension & Garnissage</h4>
                                <p>{activeProduct.materialDetails?.suspension}</p>
                                <p className="sub-spec">{activeProduct.materialDetails?.filling}</p>
                            </div>
                        </div>

                        <div className="spec-item">
                            <Feather className="spec-icon" size={24} />
                            <div>
                                <h4>Revêtement</h4>
                                <p>{activeProduct.materialDetails?.coating}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .product-page-container {
                    padding: 2rem 1rem;
                    min-height: 80vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }

                .product-configurator-grid {
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                    width: 100%;
                    margin-top: 2rem;
                }

                .product-image-section {
                    position: relative;
                    height: 350px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #f0f0f0;
                    border-radius: 4px;
                    overflow: hidden;
                }

                @media (min-width: 768px) {
                    .product-page-container {
                        padding: 4rem 2rem;
                    }

                    .product-configurator-grid {
                        grid-template-columns: 1.5fr 1fr;
                        gap: 4rem;
                    }

                    .product-image-section {
                        height: 600px;
                    }
                }

                .color-options-container {
                    display: flex;
                    gap: 1rem;
                    flex-wrap: wrap;
                }

                /* Extended Details Styles */
                .product-details-extended {
                    width: 100%;
                    margin-top: 2rem;
                    display: grid;
                    grid-template-columns: 1fr;
                    gap: 2rem;
                    border-top: 1px solid #eee;
                    padding-top: 2rem;
                }

                .details-title {
                    font-size: 1.5rem;
                    color: var(--color-accent);
                    margin-bottom: 1.5rem;
                    font-family: var(--font-heading);
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }

                .details-text {
                    margin-bottom: 1.5rem;
                    color: #555;
                    line-height: 1.8;
                    font-size: 1.05rem;
                    text-align: justify;
                }

                .specs-grid {
                    display: grid;
                    gap: 2rem;
                }

                .spec-item {
                    display: flex;
                    gap: 1.5rem;
                    align-items: flex-start;
                }

                .spec-icon {
                    color: var(--color-accent);
                    flex-shrink: 0;
                    margin-top: 0.2rem;
                }

                .spec-item h4 {
                    font-size: 1rem;
                    font-weight: bold;
                    margin-bottom: 0.3rem;
                    color: #333;
                    text-transform: uppercase;
                }

                .spec-item p {
                    color: #666;
                    font-size: 0.95rem;
                    margin: 0;
                    line-height: 1.4;
                }

                .sub-spec {
                    font-size: 0.85rem !important;
                    color: #888 !important;
                    margin-top: 0.2rem !important;
                }

                @media (min-width: 900px) {
                    .product-details-extended {
                        grid-template-columns: 1.2fr 0.8fr;
                        gap: 6rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default ProductConfigurator;
