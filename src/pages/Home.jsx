import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShieldCheck, Truck, Award, Headphones } from 'lucide-react';
import { products } from '../data/products';

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('Tous');
    const [priceRange, setPriceRange] = useState([0, 5000]);

    const categories = ['Tous', ...new Set(products.map(p => p.category))];
    const maxPrice = Math.max(...products.map(p => p.price));
    const minPrice = Math.min(...products.map(p => p.price));

    const filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        return matchesSearch && matchesCategory && matchesPrice;
    });

    return (
        <div className="container" style={{ padding: '4rem 2rem' }}>

            {/* Hero Section */}
            <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
                <h1 style={{ marginBottom: '1rem', letterSpacing: '4px', color: 'var(--color-accent)' }}>COLLECTION 2025</h1>
                <div style={{ width: '60px', height: '4px', backgroundColor: 'var(--color-accent)', margin: '0 auto 2rem auto' }}></div>
                <p className="mobile-subtitle" style={{ fontSize: '1.2rem', color: '#666', maxWidth: '600px', margin: '0 auto 2rem auto' }}>
                    L'art de vivre à la française. Découvrez notre sélection exclusive de canapés conçus pour l'excellence.
                </p>
                <div className="mobile-text" style={{ width: '100%', margin: '0 auto', color: '#555', lineHeight: '1.8', textAlign: 'justify' }}>
                    <p style={{ marginBottom: '1rem' }}>
                        Plongez dans un univers où le confort rencontre l'esthétique absolue. Nos créations, fruits d'un savoir-faire artisanal séculaire, sont pensées pour transformer votre salon en un véritable sanctuaire de bien-être. Chaque courbe, chaque couture est le résultat d'une attention méticuleuse aux détails, garantissant une pièce unique qui traversera le temps avec élégance.
                    </p>
                    <p>
                        Que vous soyez adepte du minimalisme épuré ou du charme classique intemporel, notre collection 2025 saura répondre à vos exigences les plus pointues. Nous avons sélectionné pour vous les matériaux les plus nobles – velours soyeux, cuirs pleine fleur, lins naturels – pour offrir une expérience sensorielle inégalée à chaque instant de détente.
                    </p>
                </div>
                {/* Filters & Search */}
                <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                    {/* Top Bar: Search & Category */}
                    <div className="flex justify-between items-center" style={{ flexWrap: 'wrap', gap: '1rem' }}>
                        <div className="category-filters" style={{ display: 'flex', gap: '1rem', overflowX: 'auto', paddingBottom: '1rem' }}>
                            {categories.map(category => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`filter-btn ${selectedCategory === category ? 'selected' : ''}`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>

                        <div style={{ position: 'relative', minWidth: '300px' }}>
                            <Search size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                            <input
                                type="text"
                                placeholder="Rechercher un modèle..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '0.8rem 1rem 0.8rem 3rem',
                                    border: '1px solid #eee',
                                    borderRadius: '2rem',
                                    outline: 'none',
                                    backgroundColor: '#fff'
                                }}
                            />
                        </div>
                    </div>

                    {/* Price Filter */}
                    <div className="price-filter-container" style={{ padding: '1.5rem', backgroundColor: '#f9f9f9', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <span style={{ fontWeight: 'bold' }}>Budget :</span>
                        <div className="price-filter-controls" style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span>{minPrice}€</span>
                            <input
                                type="range"
                                min={minPrice}
                                max={maxPrice}
                                value={priceRange[1]}
                                onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                                style={{
                                    flex: 1,
                                    cursor: 'pointer',
                                    borderRadius: '10px',
                                    background: `linear-gradient(to right, var(--color-accent) 0%, var(--color-accent) ${((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%, #ddd ${((priceRange[1] - minPrice) / (maxPrice - minPrice)) * 100}%, #ddd 100%)`
                                }}
                            />
                            <span>{priceRange[1]}€</span>
                        </div>
                        <button
                            onClick={() => setPriceRange([0, 5000])}
                            style={{ fontSize: '0.8rem', textDecoration: 'underline', color: '#666' }}
                        >
                            Réinitialiser
                        </button>
                    </div>

                </div>

            </div>

            {/* Product Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '3rem' }}>
                {
                    filteredProducts.map(product => (
                        <Link to={`/product/${product.id}`} key={product.id} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="product-card">
                                <div className="product-image-wrapper">
                                    <img
                                        src={product.baseImage}
                                        alt={product.name}
                                        className="product-image"
                                    />
                                </div>

                                <div className="product-details">
                                    <div className="product-header">
                                        <h3 className="product-name">{product.name}</h3>
                                        <span className="product-price">
                                            {product.price.toLocaleString()}€
                                        </span>
                                    </div>
                                    <p className="product-colors">{product.colors.length} Coloris disponibles</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div >

            {
                filteredProducts.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '4rem', color: '#888' }}>
                        Aucun produit ne correspond à vos critères.
                    </div>
                )
            }

            {/* Reassurance Banner */}
            <div style={{
                marginTop: '8rem',
                padding: '4rem 2rem',
                backgroundColor: 'var(--color-accent)',
                borderRadius: '8px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '3rem',
                textAlign: 'center'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--color-accent)', padding: '1rem', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                        <ShieldCheck size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'white' }}>Paiement Sécurisé</h3>
                    <p style={{ fontSize: '0.9rem', color: 'white', lineHeight: '1.6' }}>Vos transactions sont protégées par un cryptage SSL de pointe pour une sérénité totale.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--color-accent)', padding: '1rem', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                        <Award size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'white' }}>Qualité Premium</h3>
                    <p style={{ fontSize: '0.9rem', color: 'white', lineHeight: '1.6' }}>Matériaux nobles et finitions main. Une garantie de 10 ans sur toutes nos structures.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--color-accent)', padding: '1rem', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                        <Truck size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'white' }}>Livraison Premium</h3>
                    <p style={{ fontSize: '0.9rem', color: 'white', lineHeight: '1.6' }}>Livraison sur rendez-vous et installation dans la pièce de votre choix par nos experts.</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ marginBottom: '1.5rem', color: 'var(--color-accent)', padding: '1rem', backgroundColor: 'white', borderRadius: '50%', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                        <Headphones size={32} />
                    </div>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px', color: 'white' }}>Service Conciergerie</h3>
                    <p style={{ fontSize: '0.9rem', color: 'white', lineHeight: '1.6' }}>Une équipe dédiée à votre écoute 7j/7 pour vous accompagner dans votre projet.</p>
                </div>
            </div>
            <style>{`
                .filter-btn {
                    padding: 0.8rem 1.5rem;
                    border-radius: 30px;
                    border: 1px solid #ddd;
                    background-color: transparent;
                    color: #666;
                    cursor: pointer;
                    white-space: nowrap;
                    transition: all 0.3s ease;
                    font-size: 0.9rem;
                    font-weight: normal;
                }
                .filter-btn:hover {
                    border-color: var(--color-accent);
                    color: var(--color-accent);
                }
                .filter-btn.selected {
                    border-color: var(--color-accent);
                    background-color: var(--color-accent);
                    color: white;
                    font-weight: bold;
                    box-shadow: 0 4px 10px rgba(197, 160, 89, 0.3);
                }
                .filter-btn.selected:hover {
                    color: white;
                    background-color: var(--color-accent);
                }

                /* Product Card Styles */
                .product-card {
                    background: white;
                    border-radius: 16px;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    border: 1px solid transparent;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                }

                .product-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08);
                    border-color: rgba(0,0,0,0.05);
                }

                .product-image-wrapper {
                    background-color: #f4f4f4;
                    height: 220px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    overflow: hidden;
                    border-radius: 12px;
                    margin: 10px;
                }

                .product-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                    mix-blend-mode: multiply;
                    transform: scale(1);
                }

                .product-image[data-flipped="true"] {
                    transform: scaleX(-1);
                }

                .product-card:hover .product-image {
                    transform: scale(1.1);
                }

                .product-card:hover .product-image[data-flipped="true"] {
                    transform: scale(-1.1, 1.1);
                }

                .product-details {
                    padding: 0.5rem 1.2rem 1.5rem 1.2rem;
                    flex-grow: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                }

                .product-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-start;
                    margin-bottom: 0.5rem;
                }

                .product-name {
                    font-size: 1.05rem;
                    font-weight: 600;
                    color: var(--color-accent);
                    margin: 0;
                    line-height: 1.4;
                }

                .product-price {
                    font-weight: 700;
                    color: var(--color-accent);
                    font-size: 1.1rem;
                    white-space: nowrap;
                    margin-left: 1rem;
                }

                .product-colors {
                    font-size: 0.85rem;
                    color: #999;
                    margin: 0;
                    font-weight: 500;
                }
            `}</style>
        </div >
    );
};

export default Home;
