import React from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';
import { products } from '../data/products';

const PageHeader = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const pathnames = location.pathname.split('/').filter((x) => x);

    // Don't show on home page or checkout page (quarantine mode)
    if (location.pathname === '/' || location.pathname === '/checkout') {
        return null;
    }

    const routeNameMap = {
        'product': 'Produit',
        'checkout': 'Commande',
        'confirmation': 'Confirmation',
        'legal': 'Mentions Légales',
        'about': 'À Propos',
        'contact': 'Contact',
        'cart': 'Mon Panier'
    };

    // Custom breadcrumb logic for product pages
    let breadcrumbItems = [];
    if (pathnames[0] === 'product' && pathnames[1]) {
        const productId = pathnames[1];
        const product = products.find(p => p.id === productId);
        const productName = product ? product.name : productId;

        breadcrumbItems = [
            { name: productName, path: null, isLast: true }
        ];
    } else {
        // Standard logic for other pages
        breadcrumbItems = pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const displayName = routeNameMap[name] || name;
            return { name: displayName, path: routeTo, isLast };
        });
    }

    return (
        <div className="container" style={{ padding: '1rem 2rem', marginTop: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                {/* Back Button */}
                <button
                    onClick={() => navigate(-1)}
                    className="btn-back"
                >
                    <ChevronLeft size={16} />
                    Retour
                </button>

                {/* Breadcrumbs */}
                <nav style={{ display: 'flex', alignItems: 'center', fontSize: '0.9rem', color: '#666' }}>
                    <Link to="/" style={{ display: 'flex', alignItems: 'center', color: '#666', textDecoration: 'none' }}>
                        <Home size={16} />
                    </Link>

                    {breadcrumbItems.map((item, index) => (
                        <React.Fragment key={index}>
                            <ChevronRight size={14} style={{ margin: '0 0.5rem', color: '#999' }} />
                            {item.isLast ? (
                                <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>
                                    {item.name}
                                </span>
                            ) : (
                                <Link to={item.path} style={{ color: '#666', textDecoration: 'none' }}>
                                    {item.name}
                                </Link>
                            )}
                        </React.Fragment>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default PageHeader;
