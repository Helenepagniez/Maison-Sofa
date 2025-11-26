const productsData = [
    // Modèle 1 - Chesterfield
    {
        id: 'model-1',
        name: 'Chesterfield Original',
        price: 2450,
        description: 'L\'icône du style anglais, avec son capitonnage profond et ses accoudoirs enroulés.',
        category: 'Classique',
        baseImage: '/chesterfield.png',
        colors: [
            { id: 'col-1-0', name: 'Cuir Cognac', hex: '#8b4513', image: '/chesterfield.png', price: 2450 },
            { id: 'col-1-1', name: 'Cuir Noir', hex: '#222222', image: '/chesterfield.png', price: 2450 },
            { id: 'col-1-2', name: 'Velours Vert Anglais', hex: '#004225', image: '/chesterfield.png', price: 2550 },
            { id: 'col-1-3', name: 'Cuir Marron', hex: '#654321', image: '/chesterfield.png', price: 2450 }
        ],
        features: ['Capitonnage Fait Main', 'Cuir Pleine Fleur', 'Pieds Tournés'],
        dimensions: { width: 220, height: 78, depth: 95, seatHeight: 45 },
        materialDetails: {
            structure: 'Hêtre massif certifié FSC',
            suspension: 'Ressorts biconiques en acier',
            filling: 'Crins végétal et mousse HR 35kg/m³',
            coating: 'Cuir de vachette pleine fleur'
        },
        longDescription: [
            'L\'élégance intemporelle du Chesterfield Original redéfinit les standards du mobilier classique. Conçu pour s\'intégrer harmonieusement dans les intérieurs les plus exigeants, ce canapé allie une silhouette majestueuse à une générosité d\'assise exceptionnelle.',
            'Chaque détail a été pensé pour offrir une expérience sensorielle unique. Le toucher incomparable du cuir sélectionné parmi les meilleures tanneries européennes invite à la détente absolue. La structure en bois massif, assemblée de manière traditionnelle, garantit une longévité remarquable à cette pièce maîtresse de votre salon.',
            'Au-delà de son esthétique soignée, ce modèle se distingue par son capitonnage profond réalisé entièrement à la main. Le confort ferme et le maintien optimal font de ce Chesterfield une véritable invitation au lâcher-prise, signée Maison Sofa.'
        ]
    },

    // Modèle 2 - Minimalist
    {
        id: 'model-2',
        name: 'Canapé Pure Line',
        price: 1590,
        description: 'L\'essence du minimalisme : des lignes droites et une élégance discrète.',
        category: 'Minimaliste',
        baseImage: '/minimalist.png',
        colors: [
            { id: 'col-2-0', name: 'Gris Galet', hex: '#d3d3d3', image: '/minimalist.png', price: 1590 },
            { id: 'col-2-1', name: 'Beige Sable', hex: '#f5f5dc', image: '/minimalist.png', price: 1590 },
            { id: 'col-2-2', name: 'Anthracite', hex: '#36454f', image: '/minimalist.png', price: 1590 }
        ],
        features: ['Design Épuré', 'Déhoussable', 'Pieds Fins Métal'],
        dimensions: { width: 210, height: 80, depth: 90, seatHeight: 43 },
        materialDetails: {
            structure: 'Panneaux de particules haute densité',
            suspension: 'Ressorts Nosag en acier trempé',
            filling: 'Mousse polyéther haute résilience',
            coating: 'Lin lavé'
        },
        longDescription: [
            'Le Canapé Pure Line se distingue par sa simplicité radicale. Il s\'efface pour laisser place à l\'espace et à la lumière, tout en offrant un confort sans compromis qui ravira les amateurs de design épuré.',
            'Chaque détail a été pensé pour offrir une expérience minimaliste unique. Le toucher incomparable du lin lavé sélectionné parmi les meilleures filatures européennes invite à la détente absolue. La structure sobre, assemblée avec précision, garantit une longévité remarquable à cette pièce maîtresse de votre salon.',
            'Au-delà de son esthétique soignée, ce modèle se distingue par son ergonomie étudiée. Les coussins déhoussables permettent un entretien facile tandis que la profondeur d\'assise calibrée offre un maintien optimal. Une véritable invitation au lâcher-prise, signée Maison Sofa.'
        ]
    },

    // Modèle 3 - Blue (Nuage)
    {
        id: 'model-3',
        name: 'Canapé Nuage',
        price: 1890,
        description: 'Un design organique aux courbes douces pour un confort enveloppant.',
        category: 'Moderne',
        baseImage: '/blue.png',
        colors: [
            { id: 'col-3-0', name: 'Blanc Écume', hex: '#f0f0f0', image: '/blue.png', price: 1890 },
            { id: 'col-3-1', name: 'Bleu Céleste', hex: '#a8c0ff', image: '/blue.png', price: 1890 },
            { id: 'col-3-2', name: 'Rose Poudré', hex: '#fad0c4', image: '/blue.png', price: 1890 },
            { id: 'col-3-3', name: 'Gris Perle', hex: '#e5e5e5', image: '/blue.png', price: 1890 }
        ],
        features: ['Formes Organiques', 'Tissu Bouclé', 'Assise Profonde'],
        dimensions: { width: 240, height: 85, depth: 110, seatHeight: 42 },
        materialDetails: {
            structure: 'Pin massif certifié FSC',
            suspension: 'Sangles élastiques haute résistance',
            filling: 'Mousse HR 40kg/m³ + couche de contact plumes',
            coating: 'Tissu bouclé 100% polyester'
        },
        longDescription: [
            'L\'élégance intemporelle du Canapé Nuage redéfinit les standards du confort contemporain. Conçu pour s\'intégrer harmonieusement dans les intérieurs les plus exigeants, ce canapé allie une silhouette épurée à une générosité d\'assise exceptionnelle.',
            'Chaque détail a été pensé pour offrir une expérience sensorielle unique. Le toucher incomparable du tissu bouclé sélectionné parmi les meilleures filatures européennes invite à la détente absolue. La structure en bois massif, assemblée de manière traditionnelle, garantit une longévité remarquable à cette pièce maîtresse de votre salon.',
            'Au-delà de son esthétique soignée, ce modèle se distingue par son ergonomie étudiée. La profondeur d\'assise et l\'inclinaison du dossier ont été calibrées pour offrir un maintien optimal, que ce soit pour des moments de convivialité ou de repos solitaire. Une véritable invitation au lâcher-prise, signée Maison Sofa.'
        ]
    },

    // Modèle 4 - Corner Sofa (Canapé d'Angle)
    {
        id: 'model-4',
        name: 'Canapé d\'Angle Convertible',
        price: 2890,
        description: 'Un canapé d\'angle modulable et convertible en lit, parfait pour les grands espaces.',
        category: 'Moderne',
        baseImage: '/corner-sofa.png',
        colors: [
            { id: 'col-4-0', name: 'Beige Naturel', hex: '#e8d5c4', image: '/corner-sofa.png', price: 2890 },
            { id: 'col-4-1', name: 'Gris Clair', hex: '#d3d3d3', image: '/corner-sofa.png', price: 2890 },
            { id: 'col-4-2', name: 'Bleu Nuit', hex: '#2c3e50', image: '/corner-sofa.png', price: 2990 },
            { id: 'col-4-3', name: 'Taupe', hex: '#8b7d6b', image: '/corner-sofa.png', price: 2890 }
        ],
        features: ['Convertible en Lit', 'Angle Réversible', 'Coffre de Rangement'],
        dimensions: { width: 280, height: 85, depth: 180, seatHeight: 44 },
        materialDetails: {
            structure: 'Bois massif et panneaux haute densité',
            suspension: 'Ressorts Nosag en acier trempé',
            filling: 'Mousse polyuréthane HR 35kg/m³ + fibres creuses',
            coating: 'Tissu résistant anti-tâches'
        },
        longDescription: [
            'L\'élégance intemporelle du Canapé d\'Angle Convertible redéfinit les standards du confort contemporain. Conçu pour s\'intégrer harmonieusement dans les intérieurs les plus exigeants, ce canapé allie une silhouette généreuse à une fonctionnalité exceptionnelle.',
            'Chaque détail a été pensé pour offrir une expérience sensorielle unique. Le toucher incomparable du tissu résistant sélectionné parmi les meilleures filatures européennes invite à la détente absolue. La structure en bois massif, assemblée de manière traditionnelle, garantit une longévité remarquable à cette pièce maîtresse de votre salon.',
            'Au-delà de son esthétique soignée, ce modèle se distingue par sa polyvalence étudiée. Convertible en lit d\'appoint et doté d\'un coffre de rangement intégré, il offre un maintien optimal pour tous vos moments de vie. Une véritable invitation au lâcher-prise, signée Maison Sofa.'
        ]
    },

    // Modèle 5 - Cloud Sofa (Canapé Cocon)
    {
        id: 'model-5',
        name: 'Canapé Cocon',
        price: 2190,
        description: 'Des formes arrondies et enveloppantes pour un confort absolu et un style contemporain.',
        category: 'Moderne',
        baseImage: '/cloud-sofa.png',
        colors: [
            { id: 'col-5-0', name: 'Beige Crème', hex: '#f5f5dc', image: '/cloud-sofa.png', price: 2190 },
            { id: 'col-5-1', name: 'Blanc Ivoire', hex: '#fffff0', image: '/cloud-sofa.png', price: 2190 },
            { id: 'col-5-2', name: 'Gris Perle', hex: '#e5e5e5', image: '/cloud-sofa.png', price: 2190 },
            { id: 'col-5-3', name: 'Taupe Clair', hex: '#b8a99a', image: '/cloud-sofa.png', price: 2190 }
        ],
        features: ['Formes Arrondies', 'Tissu Bouclé Premium', 'Confort Moelleux'],
        dimensions: { width: 230, height: 82, depth: 105, seatHeight: 40 },
        materialDetails: {
            structure: 'Bois massif certifié FSC',
            suspension: 'Sangles élastiques renforcées',
            filling: 'Mousse HR 38kg/m³ + plumes d\'oie',
            coating: 'Tissu bouclé 100% polyester premium'
        },
        longDescription: [
            'L\'élégance intemporelle du Canapé Cocon redéfinit les standards du confort contemporain. Conçu pour s\'intégrer harmonieusement dans les intérieurs les plus exigeants, ce canapé allie des formes organiques douces à une générosité d\'assise exceptionnelle.',
            'Chaque détail a été pensé pour offrir une expérience sensorielle unique. Le toucher incomparable du tissu bouclé premium sélectionné parmi les meilleures filatures européennes invite à la détente absolue. La structure en bois massif, assemblée de manière traditionnelle, garantit une longévité remarquable à cette pièce maîtresse de votre salon.',
            'Au-delà de son esthétique soignée, ce modèle se distingue par son ergonomie étudiée. Les formes arrondies et l\'assise moelleuse créent un véritable cocon de confort, parfait pour se lover et se détendre. Une véritable invitation au lâcher-prise, signée Maison Sofa.'
        ]
    },

    // Modèle 6 - Leather Sofa (Canapé Cuir Premium)
    {
        id: 'model-6',
        name: 'Canapé Cuir Premium',
        price: 3290,
        description: 'Un canapé en cuir véritable au design contemporain, alliant élégance et durabilité.',
        category: 'Classique',
        baseImage: '/leather.png',
        colors: [
            { id: 'col-6-0', name: 'Cuir Caramel', hex: '#c19a6b', image: '/leather.png', price: 3290 },
            { id: 'col-6-1', name: 'Cuir Noir', hex: '#1a1a1a', image: '/leather.png', price: 3290 },
            { id: 'col-6-2', name: 'Cuir Cognac', hex: '#8b4513', image: '/leather.png', price: 3390 },
            { id: 'col-6-3', name: 'Cuir Gris Anthracite', hex: '#4a4a4a', image: '/leather.png', price: 3290 }
        ],
        features: ['Cuir Pleine Fleur', 'Coutures Sellier', 'Pieds Métal Brossé'],
        dimensions: { width: 215, height: 83, depth: 92, seatHeight: 46 },
        materialDetails: {
            structure: 'Chêne massif certifié FSC',
            suspension: 'Ressorts Nosag en acier trempé',
            filling: 'Mousse polyuréthane HR 40kg/m³',
            coating: 'Cuir de vachette pleine fleur aniline'
        },
        longDescription: [
            'L\'élégance intemporelle du Canapé Cuir Premium redéfinit les standards du luxe contemporain. Conçu pour s\'intégrer harmonieusement dans les intérieurs les plus exigeants, ce canapé allie une silhouette raffinée à une qualité de cuir exceptionnelle.',
            'Chaque détail a été pensé pour offrir une expérience sensorielle unique. Le toucher incomparable du cuir pleine fleur aniline sélectionné parmi les meilleures tanneries européennes invite à la détente absolue. La structure en chêne massif, assemblée de manière traditionnelle, garantit une longévité remarquable à cette pièce maîtresse de votre salon.',
            'Au-delà de son esthétique soignée, ce modèle se distingue par sa patine naturelle qui s\'embellit avec le temps. Les coutures sellier réalisées à la main et les pieds en métal brossé apportent une touche de modernité à ce classique intemporel. Une véritable invitation au lâcher-prise, signée Maison Sofa.'
        ]
    },

    // Modèle 7 - Fauteuil Arrondi (1 place)
    {
        id: 'model-7',
        name: 'Fauteuil Cosy',
        price: 890,
        description: 'Un fauteuil 1 place aux formes arrondies et enveloppantes, parfait pour créer un coin lecture.',
        category: 'Moderne',
        baseImage: '/armchair-rounded.png',
        colors: [
            { id: 'col-7-0', name: 'Beige Bouclé', hex: '#f5f5dc', image: '/armchair-rounded.png', price: 890 },
            { id: 'col-7-1', name: 'Blanc Crème', hex: '#fffdd0', image: '/armchair-rounded.png', price: 890 },
            { id: 'col-7-2', name: 'Gris Perle', hex: '#e5e5e5', image: '/armchair-rounded.png', price: 890 },
            { id: 'col-7-3', name: 'Rose Poudré', hex: '#fad0c4', image: '/armchair-rounded.png', price: 890 }
        ],
        features: ['Formes Arrondies', 'Tissu Bouclé Tendance', 'Compact'],
        dimensions: { width: 85, height: 78, depth: 82, seatHeight: 42 },
        materialDetails: {
            structure: 'Bois massif certifié FSC',
            suspension: 'Sangles élastiques',
            filling: 'Mousse HR 35kg/m³',
            coating: 'Tissu bouclé 100% polyester'
        },
        longDescription: [
            'L\'élégance intemporelle du Fauteuil Cosy redéfinit les standards du confort contemporain. Conçu pour s\'intégrer harmonieusement dans les intérieurs les plus exigeants, ce fauteuil allie des formes organiques douces à une compacité pratique.',
            'Chaque détail a été pensé pour offrir une expérience sensorielle unique. Le toucher incomparable du tissu bouclé tendance sélectionné parmi les meilleures filatures européennes invite à la détente absolue. La structure en bois massif, assemblée de manière traditionnelle, garantit une longévité remarquable à cette pièce parfaite pour votre coin lecture.',
            'Au-delà de son esthétique soignée, ce modèle se distingue par son ergonomie étudiée. Les formes arrondies créent un véritable cocon de confort, parfait pour se lover avec un bon livre. Une véritable invitation au lâcher-prise, signée Maison Sofa.'
        ]
    },

    // Modèle 8 - Canapé Capitonné Vertical
    {
        id: 'model-8',
        name: 'Canapé Moutarde Capitonné',
        price: 2390,
        description: 'Un canapé au design contemporain avec capitonnage vertical, pour une touche audacieuse.',
        category: 'Moderne',
        baseImage: '/channeled-sofa.png',
        colors: [
            { id: 'col-8-0', name: 'Moutarde', hex: '#d4a017', image: '/channeled-sofa.png', price: 2390 },
            { id: 'col-8-1', name: 'Vert Sauge', hex: '#9caf88', image: '/channeled-sofa.png', price: 2390 },
            { id: 'col-8-2', name: 'Bleu Canard', hex: '#008b8b', image: '/channeled-sofa.png', price: 2490 },
            { id: 'col-8-3', name: 'Terracotta', hex: '#e2725b', image: '/channeled-sofa.png', price: 2390 }
        ],
        features: ['Capitonnage Vertical', 'Velours Premium', 'Design Bas'],
        dimensions: { width: 225, height: 75, depth: 95, seatHeight: 40 },
        materialDetails: {
            structure: 'Bois massif certifié FSC',
            suspension: 'Ressorts Nosag en acier trempé',
            filling: 'Mousse polyuréthane HR 35kg/m³',
            coating: 'Velours 100% polyester'
        },
        longDescription: [
            'L\'élégance intemporelle du Canapé Moutarde Capitonné redéfinit les standards du design contemporain. Conçu pour s\'intégrer harmonieusement dans les intérieurs les plus exigeants, ce canapé allie une silhouette basse et moderne à un capitonnage vertical distinctif.',
            'Chaque détail a été pensé pour offrir une expérience sensorielle unique. Le toucher incomparable du velours premium sélectionné parmi les meilleures filatures européennes invite à la détente absolue. La structure en bois massif, assemblée de manière traditionnelle, garantit une longévité remarquable à cette pièce maîtresse de votre salon.',
            'Au-delà de son esthétique soignée, ce modèle se distingue par son design audacieux. Le capitonnage vertical crée un jeu de volumes unique tandis que les accoudoirs arrondis apportent douceur et confort. Une véritable invitation au lâcher-prise, signée Maison Sofa.'
        ]
    },

    // Modèle 9 - Canapé Gigogne
    {
        id: 'model-9',
        name: 'Canapé Gigogne Émeraude',
        price: 2690,
        description: 'Un canapé gigogne pratique avec lit d\'appoint extractible, en velours vert émeraude.',
        category: 'Moderne',
        baseImage: '/trundle-sofa.png',
        colors: [
            { id: 'col-9-0', name: 'Vert Émeraude', hex: '#50c878', image: '/trundle-sofa.png', price: 2690 },
            { id: 'col-9-1', name: 'Bleu Marine', hex: '#000080', image: '/trundle-sofa.png', price: 2690 },
            { id: 'col-9-2', name: 'Bordeaux', hex: '#800020', image: '/trundle-sofa.png', price: 2790 },
            { id: 'col-9-3', name: 'Gris Anthracite', hex: '#36454f', image: '/trundle-sofa.png', price: 2690 }
        ],
        features: ['Lit Gigogne Extractible', 'Velours Luxueux', 'Gain de Place'],
        dimensions: { width: 200, height: 82, depth: 90, seatHeight: 43 },
        materialDetails: {
            structure: 'Bois massif et métal renforcé',
            suspension: 'Ressorts Nosag en acier trempé',
            filling: 'Mousse polyuréthane HR 35kg/m³',
            coating: 'Velours 100% polyester'
        },
        longDescription: [
            'L\'élégance intemporelle du Canapé Gigogne Émeraude redéfinit les standards de la polyvalence contemporaine. Conçu pour s\'intégrer harmonieusement dans les intérieurs les plus exigeants, ce canapé allie une silhouette raffinée à une fonctionnalité exceptionnelle avec son lit gigogne extractible.',
            'Chaque détail a été pensé pour offrir une expérience sensorielle unique. Le toucher incomparable du velours luxueux sélectionné parmi les meilleures filatures européennes invite à la détente absolue. La structure renforcée en bois massif et métal, assemblée de manière traditionnelle, garantit une longévité remarquable à cette pièce maîtresse de votre salon.',
            'Au-delà de son esthétique soignée, ce modèle se distingue par sa praticité étudiée. Le lit gigogne extractible permet d\'accueillir vos invités en toute simplicité, transformant votre salon en chambre d\'appoint en quelques secondes. Une véritable invitation au lâcher-prise, signée Maison Sofa.'
        ]
    }
];

export const products = productsData;
