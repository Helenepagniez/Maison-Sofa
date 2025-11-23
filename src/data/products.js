const adjectives = ['Royal', 'Impérial', 'Cosy', 'Urbain', 'Nature', 'Vintage', 'Luxe', 'Design', 'Zen', 'Chic', 'Élégance', 'Prestige', 'Confort', 'Nuage', 'Cocon', 'Lounge', 'Studio', 'Loft', 'Manoir', 'Palace'];
const materials = ['Velours', 'Cuir', 'Lin', 'Bouclé', 'Tissu', 'Microfibre', 'Laine', 'Coton'];
const shapes = ['Droit', 'Angle', 'Panoramique', 'Modulable', 'Convertible', 'Méridienne'];

const baseImages = [
    '/blue.png',       // Cloud shape
    '/chesterfield.png', // Chesterfield shape
    '/minimalist.png'    // Minimalist shape
];

const generateProducts = () => {
    const products = [];

    for (let i = 1; i <= 30; i++) {
        const shapeIndex = i % 3;
        const isFlipped = i % 2 === 0; // Flip every other sofa to create visual variety
        const baseImage = baseImages[shapeIndex];

        // Generate 1 to 4 colors for this specific model
        const numColors = Math.floor(Math.random() * 4) + 1;
        const modelColors = [];

        for (let c = 0; c < numColors; c++) {
            const hue = Math.floor(Math.random() * 360);
            const sat = 0.5 + Math.random() * 0.5;
            const light = 0.4 + Math.random() * 0.4;

            modelColors.push({
                id: `col-${i}-${c}`,
                name: `Finition ${c + 1}`,
                hex: `hsl(${hue}, ${sat * 100}%, ${light * 100}%)`,
                filter: `hue-rotate(${hue}deg) saturate(${sat}) brightness(${light})`,
                price: 0 // Will be set to product price
            });
        }

        const price = 1200 + Math.floor(Math.random() * 40) * 100;

        // Update prices for colors
        modelColors.forEach(c => c.price = price);

        products.push({
            id: `model-${i}`,
            name: `Canapé ${adjectives[i % adjectives.length]} ${i}`,
            price: price,
            description: `Le modèle ${i} incarne l'excellence du savoir-faire italien. Une pièce unique qui allie ${materials[i % materials.length]} et design ${shapes[i % shapes.length]}.`,
            category: i % 3 === 0 ? 'Moderne' : i % 3 === 1 ? 'Classique' : 'Minimaliste',
            baseImage: baseImage,
            flipped: isFlipped, // New property for mirroring
            colors: modelColors,
            features: ['Structure Bois Massif', 'Mousse Haute Densité', 'Garantie 10 ans']
        });
    }

    return products;
};

export const products = generateProducts();
