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
                                    style={{
                                        padding: '0.8rem 1.5rem',
                                        borderRadius: '30px',
                                        border: selectedCategory === category ? 'none' : '1px solid #ddd',
                                        backgroundColor: selectedCategory === category ? 'var(--color-accent)' : 'transparent',
                                        color: selectedCategory === category ? 'white' : '#666',
                                        cursor: 'pointer',
                                        whiteSpace: 'nowrap',
                                        transition: 'all 0.3s',
                                        fontSize: '0.9rem',
                                        fontWeight: selectedCategory === category ? 'bold' : 'normal',
                                        boxShadow: selectedCategory === category ? '0 4px 10px rgba(197, 160, 89, 0.3)' : 'none'
                                    }}
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
                            <div className="product-card" style={{ cursor: 'pointer', group: 'card' }}>
                                <div style={{
                                    backgroundColor: '#e5e5e5',
                                    height: '300px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '4px'
                                }}>
                                    <img
                                        src={product.baseImage}
                                        alt={product.name}
                                        style={{
                                            maxWidth: '90%',
                                            maxHeight: '90%',
                                            objectFit: 'contain',
                                            transition: 'transform 0.5s ease',
                                            transform: product.flipped ? 'scaleX(-1)' : 'scaleX(1)',
                                            filter: `drop-shadow(0 10px 20px rgba(0,0,0,0.1)) ${product.colors[0].filter || 'none'}`,
                                            mixBlendMode: 'multiply'
                                        }}
                                        onMouseOver={(e) => e.currentTarget.style.transform = product.flipped ? 'scaleX(-1) scale(1.05)' : 'scale(1.05)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = product.flipped ? 'scaleX(-1)' : 'scale(1)'}
                                    />
                                </div>

                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem', color: 'var(--color-accent)' }}>{product.name}</h3>
                                        <p style={{ color: '#666', fontSize: '0.9rem' }}>{product.colors.length} Coloris disponibles</p>
                                    </div>
                                    <span style={{ fontSize: '1.1rem', fontWeight: 'bold' }}>
                                        {product.price.toLocaleString()}€
                                    </span>
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
        </div >
    );
};

export default Home;
