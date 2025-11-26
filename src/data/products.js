const adjectives = ['Royal', 'Impérial', 'Cosy', 'Urbain', 'Nature', 'Vintage', 'Luxe', 'Design', 'Zen', 'Chic', 'Élégance', 'Prestige', 'Confort', 'Nuage', 'Cocon', 'Lounge', 'Studio', 'Loft', 'Manoir', 'Palace'];
const materials = ['Velours', 'Cuir', 'Lin', 'Bouclé', 'Tissu', 'Microfibre', 'Laine', 'Coton'];
const shapes = ['Droit', 'Angle', 'Panoramique', 'Modulable', 'Convertible', 'Méridienne'];

const baseImages = [
    '/blue.png',       // Cloud shape
    '/chesterfield.png', // Chesterfield shape
    '/minimalist.png'    // Minimalist shape
];

const colorPalettes = [
    // 1. Neutrals (4 colors)
    [
        { name: 'Beige', hue: 30, sat: 0.3, light: 0.8 },
        { name: 'Gris', hue: 0, sat: 0, light: 0.6 },
        { name: 'Charbon', hue: 0, sat: 0, light: 0.2 },
        { name: 'Blanc', hue: 0, sat: 0, light: 0.95 }
    ],
    // 2. Warm (3 colors)
    [
        { name: 'Terracotta', hue: 15, sat: 0.6, light: 0.5 },
        { name: 'Chocolat', hue: 25, sat: 0.5, light: 0.3 },
        { name: 'Crème', hue: 40, sat: 0.4, light: 0.9 }
    ],
    // 3. Cool (4 colors)
    [
        { name: 'Marine', hue: 220, sat: 0.6, light: 0.3 },
        { name: 'Bleu Ciel', hue: 200, sat: 0.7, light: 0.7 },
        { name: 'Canard', hue: 180, sat: 0.8, light: 0.25 },
        { name: 'Gris Perle', hue: 210, sat: 0.1, light: 0.8 }
    ],
    // 4. Bold (3 colors)
    [
        { name: 'Émeraude', hue: 150, sat: 0.7, light: 0.3 },
        { name: 'Moutarde', hue: 45, sat: 0.8, light: 0.5 },
        { name: 'Rubis', hue: 350, sat: 0.7, light: 0.4 }
    ],
    // 5. Minimal (2 colors)
    [
        { name: 'Noir', hue: 0, sat: 0, light: 0.1 },
        { name: 'Blanc', hue: 0, sat: 0, light: 0.95 }
    ],
    // 6. Earthy (4 colors)
    [
        { name: 'Olive', hue: 80, sat: 0.4, light: 0.4 },
        { name: 'Sable', hue: 35, sat: 0.3, light: 0.7 },
        { name: 'Taupe', hue: 30, sat: 0.1, light: 0.5 },
        { name: 'Rouille', hue: 10, sat: 0.6, light: 0.4 }
    ]
];

const generateProducts = () => {
    const products = [];

    for (let i = 1; i <= 30; i++) {
        const shapeIndex = i % 3;
        const baseImage = baseImages[shapeIndex];

        // Select a fixed palette based on the product index
        const paletteIndex = i % colorPalettes.length;
        const selectedPalette = colorPalettes[paletteIndex];

        const price = 1200 + Math.floor((i * 137) % 40) * 100; // Deterministic price

        const modelColors = selectedPalette.map((color, c) => ({
            id: `col-${i}-${c}`,
            name: color.name,
            hex: `hsl(${color.hue}, ${color.sat * 100}%, ${color.light * 100}%)`,
            image: baseImage, // Same image for all colors of this product
            price: price
        }));

        products.push({
            id: `model-${i}`,
            name: `Canapé ${adjectives[i % adjectives.length]} ${i}`,
            price: price,
            description: `Le modèle ${i} incarne l'excellence du savoir-faire italien. Une pièce unique qui allie ${materials[i % materials.length]} et design ${shapes[i % shapes.length]}.`,
            category: i % 3 === 0 ? 'Moderne' : i % 3 === 1 ? 'Classique' : 'Minimaliste',
            baseImage: baseImage,
            colors: modelColors,
            features: ['Structure Bois Massif', 'Mousse Haute Densité', 'Garantie 10 ans'],
            dimensions: {
                width: 200 + (i % 5) * 20,
                height: 85 + (i % 3) * 5,
                depth: 95 + (i % 4) * 5,
                seatHeight: 45
            },
            materialDetails: {
                structure: 'Hêtre massif certifié FSC',
                suspension: 'Ressorts Nosag en acier trempé',
                filling: 'Mousse polyuréthane HR 35kg/m³ + couche de contact plumes',
                coating: materials[i % materials.length]
            },
            longDescription: [
                `L'élégance intemporelle du modèle ${adjectives[i % adjectives.length]} ${i} redéfinit les standards du confort contemporain. Conçu pour s'intégrer harmonieusement dans les intérieurs les plus exigeants, ce canapé allie une silhouette épurée à une générosité d'assise exceptionnelle.`,
                `Chaque détail a été pensé pour offrir une expérience sensorielle unique. Le toucher incomparable du ${materials[i % materials.length].toLowerCase()} sélectionné parmi les meilleures filatures européennes invite à la détente absolue. La structure en bois massif, assemblée de manière traditionnelle, garantit une longévité remarquable à cette pièce maîtresse de votre salon.`,
                `Au-delà de son esthétique soignée, ce modèle se distingue par son ergonomie étudiée. La profondeur d'assise et l'inclinaison du dossier ont été calibrées pour offrir un maintien optimal, que ce soit pour des moments de convivialité ou de repos solitaire. Une véritable invitation au lâcher-prise, signée Maison Sofa.`
            ]
        });
    }

    return products;
};

export const products = generateProducts();
